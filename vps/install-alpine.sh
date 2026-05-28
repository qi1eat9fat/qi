#!/bin/sh

# ==============================================================================
# Xray VLESS-Reality Alpine Linux 一键安装管理脚本
# 基于原 install.sh 改写：适配 Alpine /bin/sh、apk、OpenRC。
# 版本: Alpine-1.0
# ==============================================================================

set -eu

SCRIPT_VERSION="Alpine-1.0"
xray_config_path="/usr/local/etc/xray/config.json"
xray_binary_path="/usr/local/bin/xray"
xray_asset_dir="/usr/local/share/xray"
xray_log_dir="/var/log/xray"
xray_service_path="/etc/init.d/xray"
xray_repo_api="https://api.github.com/repos/XTLS/Xray-core/releases/latest"
xray_download_base="https://github.com/XTLS/Xray-core/releases/download"

red="$(printf '\033[91m')"
green="$(printf '\033[92m')"
yellow="$(printf '\033[93m')"
magenta="$(printf '\033[95m')"
cyan="$(printf '\033[96m')"
none="$(printf '\033[0m')"

xray_status_info=""
is_quiet=false

error() {
    printf '\n%s[ERR] %s%s\n\n' "$red" "$1" "$none" >&2
}

info() {
    if [ "$is_quiet" = "false" ]; then
        printf '\n%s[INFO] %s%s\n\n' "$yellow" "$1" "$none"
    fi
}

success() {
    if [ "$is_quiet" = "false" ]; then
        printf '\n%s[OK] %s%s\n\n' "$green" "$1" "$none"
    fi
}

usage() {
    cat <<'EOF'
用法：
  sh install-alpine.sh
  sh install-alpine.sh install [--port 443] [--uuid UUID] [--sni learn.microsoft.com] [--quiet]

说明：
  不带参数运行会进入交互式菜单。
  install 子命令适合远程一键安装或自动化部署。

示例：
  sh install-alpine.sh install --port 443 --sni learn.microsoft.com
  sh install-alpine.sh install --port 443 --uuid 550e8400-e29b-41d4-a716-446655440000 --sni learn.microsoft.com --quiet
EOF
}

spinner() {
    pid="$1"
    spinstr='|/-\\'

    if [ "$is_quiet" = "true" ]; then
        wait "$pid"
        return $?
    fi

    while kill -0 "$pid" 2>/dev/null; do
        first_char=$(printf '%s' "$spinstr" | cut -c1)
        rest_chars=$(printf '%s' "$spinstr" | cut -c2-)
        printf ' [%s]  ' "$first_char"
        spinstr="${rest_chars}${first_char}"
        sleep 0.1
        printf '\r'
    done
    printf '      \r'
    wait "$pid"
    return $?
}

run_background() {
    "$@" >/tmp/xray-alpine-install.log 2>&1 &
    spinner $!
}

fetch_url() {
    url="$1"
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL --connect-timeout 10 --max-time 60 "$url"
        return $?
    fi
    if command -v wget >/dev/null 2>&1; then
        wget -qO- "$url"
        return $?
    fi
    return 1
}

download_file() {
    url="$1"
    dest="$2"

    if command -v curl >/dev/null 2>&1; then
        if curl -fL --connect-timeout 10 --retry 3 -o "$dest" "$url"; then
            return 0
        fi
    fi

    if command -v wget >/dev/null 2>&1; then
        if wget -O "$dest" "$url"; then
            return 0
        fi
    fi

    return 1
}

get_public_ip() {
    ip=""

    if command -v curl >/dev/null 2>&1; then
        for url in "https://api.ipify.org" "https://ip.sb" "https://checkip.amazonaws.com"; do
            ip=$(curl -4fsS --max-time 5 "$url" 2>/dev/null || true)
            if [ -n "$ip" ]; then
                printf '%s\n' "$ip" | tr -d '\r\n'
                return 0
            fi
        done
        for url in "https://api64.ipify.org" "https://ip.sb"; do
            ip=$(curl -6fsS --max-time 5 "$url" 2>/dev/null || true)
            if [ -n "$ip" ]; then
                printf '%s\n' "$ip" | tr -d '\r\n'
                return 0
            fi
        done
    fi

    if command -v wget >/dev/null 2>&1; then
        for url in "https://api.ipify.org" "https://ip.sb" "https://checkip.amazonaws.com"; do
            ip=$(wget -qO- -T 5 "$url" 2>/dev/null || true)
            if [ -n "$ip" ]; then
                printf '%s\n' "$ip" | tr -d '\r\n'
                return 0
            fi
        done
    fi

    error "无法获取公网 IP 地址。"
    return 1
}

is_valid_port() {
    port="$1"
    printf '%s' "$port" | grep -Eq '^[0-9]+$' || return 1
    [ "$port" -ge 1 ] && [ "$port" -le 65535 ]
}

is_port_in_use() {
    port="$1"

    if command -v ss >/dev/null 2>&1; then
        ss -tuln 2>/dev/null | awk -v p=":$port" '
            $0 ~ p"[[:space:]]" || $0 ~ p"$" { found = 1 }
            END { exit found ? 0 : 1 }
        '
        return $?
    fi

    if command -v netstat >/dev/null 2>&1; then
        netstat -tuln 2>/dev/null | awk -v p=":$port" '
            $0 ~ p"[[:space:]]" || $0 ~ p"$" { found = 1 }
            END { exit found ? 0 : 1 }
        '
        return $?
    fi

    return 1
}

is_valid_uuid() {
    uuid="$1"
    printf '%s' "$uuid" | grep -Eq '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
}

is_valid_domain() {
    domain="$1"
    case "$domain" in
        *--*) return 1 ;;
    esac
    printf '%s' "$domain" | grep -Eq '^([A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$'
}

check_system_compatibility() {
    if [ "$(uname -s)" != "Linux" ]; then
        error "此脚本仅支持 Linux 系统。"
        return 1
    fi

    if [ ! -f /etc/alpine-release ]; then
        if [ -f /etc/os-release ]; then
            # shellcheck disable=SC1091
            . /etc/os-release
            if [ "${ID:-}" != "alpine" ]; then
                error "此版本脚本仅支持 Alpine Linux。当前系统: ${PRETTY_NAME:-unknown}"
                return 1
            fi
        else
            error "未检测到 Alpine Linux。"
            return 1
        fi
    fi

    if ! command -v apk >/dev/null 2>&1; then
        error "未找到 apk，请确认当前系统为 Alpine Linux。"
        return 1
    fi

    if [ "$is_quiet" = "false" ]; then
        alpine_version=$(cat /etc/alpine-release 2>/dev/null || printf 'unknown')
        info "系统兼容性检查通过，检测到 Alpine Linux ${alpine_version}"
    fi

    return 0
}

install_dependencies() {
    info "正在安装依赖：ca-certificates curl wget jq unzip iproute2 openrc..."

    if [ "$is_quiet" = "true" ]; then
        apk add --no-cache ca-certificates curl wget jq unzip iproute2 openrc >/dev/null
        update-ca-certificates >/dev/null 2>&1 || true
    else
        apk add --no-cache ca-certificates curl wget jq unzip iproute2 openrc
        update-ca-certificates >/dev/null 2>&1 || true
    fi
}

pre_check() {
    if [ "$(id -u)" != "0" ]; then
        error "您必须以 root 用户身份运行此脚本。"
        exit 1
    fi

    if ! check_system_compatibility; then
        exit 1
    fi

    install_dependencies
}

get_xray_arch() {
    arch="$(uname -m)"
    case "$arch" in
        x86_64|amd64) printf '64\n' ;;
        i386|i686) printf '32\n' ;;
        aarch64|arm64) printf 'arm64-v8a\n' ;;
        armv7l|armv7*) printf 'arm32-v7a\n' ;;
        armv6l|armv6*) printf 'arm32-v6\n' ;;
        s390x) printf 's390x\n' ;;
        *)
            error "暂不支持当前 CPU 架构：$arch"
            return 1
            ;;
    esac
}

get_latest_version() {
    latest_json=$(fetch_url "$xray_repo_api" 2>/dev/null || true)
    if [ -z "$latest_json" ]; then
        return 1
    fi
    printf '%s' "$latest_json" | jq -r '.tag_name // empty'
}

write_openrc_service() {
    install -d -m 755 /etc/init.d "$xray_log_dir"

    cat > "$xray_service_path" <<EOF
#!/sbin/openrc-run

name="xray"
description="Xray Service"
command="$xray_binary_path"
command_args="run -config $xray_config_path"
command_background="yes"
pidfile="/run/xray.pid"
output_log="$xray_log_dir/xray.log"
error_log="$xray_log_dir/error.log"
export XRAY_LOCATION_ASSET="$xray_asset_dir"

depend() {
    need net
    after firewall
}

start_pre() {
    checkpath --directory --owner root:root --mode 0755 "$xray_log_dir"
}
EOF

    chmod +x "$xray_service_path"
    rc-update add xray default >/dev/null 2>&1 || true
}

install_xray_core() {
    version="$1"
    arch="$(get_xray_arch)"
    tmp_dir="$(mktemp -d /tmp/xray-alpine.XXXXXX)"
    zip_file="$tmp_dir/xray.zip"
    url="$xray_download_base/$version/Xray-linux-$arch.zip"

    info "正在下载 Xray Core $version ($arch)..."
    if ! download_file "$url" "$zip_file"; then
        rm -rf "$tmp_dir"
        error "下载 Xray Core 失败：$url"
        return 1
    fi

    info "正在安装 Xray Core..."
    if ! unzip -o "$zip_file" -d "$tmp_dir" >/dev/null; then
        rm -rf "$tmp_dir"
        error "解压 Xray Core 失败。"
        return 1
    fi

    if [ ! -f "$tmp_dir/xray" ]; then
        rm -rf "$tmp_dir"
        error "压缩包中未找到 xray 可执行文件。"
        return 1
    fi

    install -d -m 755 /usr/local/bin /usr/local/etc/xray "$xray_asset_dir" "$xray_log_dir"
    install -m 755 "$tmp_dir/xray" "$xray_binary_path"

    if [ -f "$tmp_dir/geoip.dat" ]; then
        install -m 644 "$tmp_dir/geoip.dat" "$xray_asset_dir/geoip.dat"
    fi
    if [ -f "$tmp_dir/geosite.dat" ]; then
        install -m 644 "$tmp_dir/geosite.dat" "$xray_asset_dir/geosite.dat"
    fi

    write_openrc_service
    rm -rf "$tmp_dir"
    return 0
}

stop_xray_service_quiet() {
    if command -v rc-service >/dev/null 2>&1 && [ -x "$xray_service_path" ]; then
        rc-service xray stop >/dev/null 2>&1 || true
    fi
}

restart_xray() {
    if [ ! -f "$xray_binary_path" ]; then
        error "Xray 未安装，无法重启。"
        return 1
    fi

    if ! command -v rc-service >/dev/null 2>&1; then
        error "未找到 rc-service，无法通过 OpenRC 管理 Xray 服务。"
        return 1
    fi

    info "正在重启 Xray 服务..."
    rc-update add xray default >/dev/null 2>&1 || true

    if rc-service xray status >/dev/null 2>&1; then
        if ! rc-service xray restart; then
            error "Xray 服务重启失败，请使用菜单 5 查看日志。"
            return 1
        fi
    else
        if ! rc-service xray start; then
            error "Xray 服务启动失败，请使用菜单 5 查看日志。"
            return 1
        fi
    fi

    sleep 1
    if ! rc-service xray status >/dev/null 2>&1; then
        error "Xray 服务未运行，请使用菜单 5 查看日志。"
        return 1
    fi

    success "Xray 服务已成功启动/重启。"
}

check_xray_status() {
    if [ ! -f "$xray_binary_path" ]; then
        xray_status_info="  Xray 状态: ${red}未安装${none}"
        return
    fi

    xray_version="$($xray_binary_path version 2>/dev/null | head -n 1 | awk '{print $2}' || printf '未知')"
    service_status="${yellow}未运行${none}"
    if command -v rc-service >/dev/null 2>&1 && rc-service xray status >/dev/null 2>&1; then
        service_status="${green}运行中${none}"
    fi

    xray_status_info="  Xray 状态: ${green}已安装${none} | ${service_status} | 版本: ${cyan}${xray_version}${none}"
}

install_xray() {
    if [ -f "$xray_binary_path" ]; then
        info "检测到 Xray 已安装。继续操作将覆盖现有二进制和配置。"
        printf '是否继续？[y/N]: '
        IFS= read -r confirm
        case "$confirm" in
            y|Y|yes|YES) stop_xray_service_quiet ;;
            *) info "操作已取消。"; return ;;
        esac
    fi

    info "开始配置 Xray VLESS-Reality..."

    while :; do
        printf '请输入端口 [1-65535] (默认: %s443%s): ' "$cyan" "$none"
        IFS= read -r port
        [ -z "$port" ] && port=443
        if ! is_valid_port "$port"; then
            error "端口无效，请输入 1-65535 之间的数字。"
            continue
        fi
        if is_port_in_use "$port"; then
            error "端口 $port 已被占用，请选择其他端口。"
            continue
        fi
        break
    done

    while :; do
        printf '请输入 UUID (留空将默认生成随机 UUID): '
        IFS= read -r uuid
        if [ -z "$uuid" ]; then
            uuid="$(cat /proc/sys/kernel/random/uuid)"
            info "已为您生成随机 UUID: ${cyan}${uuid}${none}"
            break
        fi
        if is_valid_uuid "$uuid"; then
            break
        fi
        error "UUID 格式无效，请输入标准 UUID 格式，或留空自动生成。"
    done

    while :; do
        printf '请输入 SNI 域名 (默认: %slearn.microsoft.com%s): ' "$cyan" "$none"
        IFS= read -r domain
        [ -z "$domain" ] && domain="learn.microsoft.com"
        if is_valid_domain "$domain"; then
            break
        fi
        error "域名格式无效，请重新输入。"
    done

    run_install "$port" "$uuid" "$domain"
}

update_xray() {
    if [ ! -f "$xray_binary_path" ]; then
        error "Xray 未安装，无法执行更新。请先选择安装选项。"
        return
    fi

    info "正在检查最新版本..."
    current_version="$($xray_binary_path version 2>/dev/null | head -n 1 | awk '{print $2}' || printf '')"
    latest_version="$(get_latest_version || true)"

    if [ -z "$latest_version" ]; then
        error "获取最新版本号失败，请检查网络或稍后再试。"
        return
    fi

    latest_plain="$(printf '%s' "$latest_version" | sed 's/^v//')"
    info "当前版本: ${cyan}${current_version}${none}，最新版本: ${cyan}${latest_plain}${none}"

    if [ "$current_version" = "$latest_plain" ] || [ "v$current_version" = "$latest_version" ]; then
        success "您的 Xray 已是最新版本，无需更新。"
        return
    fi

    info "发现新版本，开始更新..."
    if ! install_xray_core "$latest_version"; then
        error "Xray Core 更新失败。"
        return
    fi

    if ! restart_xray; then
        return
    fi

    success "Xray 更新成功。"
}

uninstall_xray() {
    if [ ! -f "$xray_binary_path" ]; then
        error "Xray 未安装，无需卸载。"
        return
    fi

    printf '您确定要卸载 Xray 吗？这将删除所有相关文件。[Y/n]: '
    IFS= read -r confirm
    case "$confirm" in
        n|N|no|NO)
            info "卸载操作已取消。"
            return
            ;;
    esac

    info "正在卸载 Xray..."
    stop_xray_service_quiet
    rc-update del xray default >/dev/null 2>&1 || true
    rm -f "$xray_service_path" "$xray_binary_path" "$HOME/xray_vless_reality_link.txt"
    rm -rf /usr/local/etc/xray "$xray_asset_dir" "$xray_log_dir"
    success "Xray 已成功卸载。"
}

view_xray_log() {
    if [ ! -f "$xray_binary_path" ]; then
        error "Xray 未安装，无法查看日志。"
        return
    fi

    info "正在显示 Xray 日志，按 Ctrl+C 退出。"
    touch "$xray_log_dir/xray.log" "$xray_log_dir/error.log" 2>/dev/null || true
    tail -n 100 -f "$xray_log_dir/xray.log" "$xray_log_dir/error.log"
}

write_config() {
    port="$1"
    uuid="$2"
    domain="$3"
    private_key="$4"
    public_key="$5"
    shortid="20220701"

    install -d -m 755 /usr/local/etc/xray "$xray_log_dir"

    jq -n \
        --argjson port "$port" \
        --arg uuid "$uuid" \
        --arg domain "$domain" \
        --arg private_key "$private_key" \
        --arg public_key "$public_key" \
        --arg shortid "$shortid" \
    '{
        "log": {
            "loglevel": "warning",
            "access": "/var/log/xray/access.log",
            "error": "/var/log/xray/error.log"
        },
        "inbounds": [{
            "listen": "0.0.0.0",
            "port": $port,
            "protocol": "vless",
            "settings": {
                "clients": [{"id": $uuid, "flow": "xtls-rprx-vision"}],
                "decryption": "none"
            },
            "streamSettings": {
                "network": "tcp",
                "security": "reality",
                "realitySettings": {
                    "show": false,
                    "dest": ($domain + ":443"),
                    "xver": 0,
                    "serverNames": [$domain],
                    "privateKey": $private_key,
                    "publicKey": $public_key,
                    "shortIds": [$shortid]
                }
            },
            "sniffing": {
                "enabled": true,
                "destOverride": ["http", "tls", "quic"]
            }
        }],
        "outbounds": [{
            "protocol": "freedom",
            "settings": {"domainStrategy": "UseIPv4v6"}
        }]
    }' > "$xray_config_path"

    chmod 600 "$xray_config_path"
}

run_install() {
    port="$1"
    uuid="$2"
    domain="$3"

    latest_version="$(get_latest_version || true)"
    if [ -z "$latest_version" ]; then
        error "获取 Xray 最新版本失败，请检查网络连接。"
        exit 1
    fi

    if ! install_xray_core "$latest_version"; then
        error "Xray Core 安装失败。"
        exit 1
    fi

    info "正在生成 Reality 密钥对..."
    key_pair="$($xray_binary_path x25519 2>/dev/null || true)"
    private_key="$(printf '%s\n' "$key_pair" | grep -i 'Private' | awk '{print $NF}' | head -n 1)"
    public_key="$(printf '%s\n' "$key_pair" | grep -iE 'Public|Password' | awk '{print $NF}' | head -n 1)"

    if [ -z "$private_key" ] || [ -z "$public_key" ]; then
        error "生成 Reality 密钥对失败，请检查 Xray Core 是否正常。"
        exit 1
    fi

    info "正在写入 Xray 配置文件..."
    write_config "$port" "$uuid" "$domain" "$private_key" "$public_key"

    if ! restart_xray; then
        exit 1
    fi

    success "Xray 安装/配置成功。"
    view_subscription_info
}

modify_config() {
    if [ ! -f "$xray_config_path" ]; then
        error "Xray 未安装，无法修改配置。"
        return
    fi

    info "读取当前配置..."
    current_port="$(jq -r '.inbounds[0].port' "$xray_config_path")"
    current_uuid="$(jq -r '.inbounds[0].settings.clients[0].id' "$xray_config_path")"
    current_domain="$(jq -r '.inbounds[0].streamSettings.realitySettings.serverNames[0]' "$xray_config_path")"
    private_key="$(jq -r '.inbounds[0].streamSettings.realitySettings.privateKey' "$xray_config_path")"
    public_key="$(jq -r '.inbounds[0].streamSettings.realitySettings.publicKey' "$xray_config_path")"

    if [ -z "$public_key" ] || [ "$public_key" = "null" ]; then
        error "配置文件中缺少公钥信息，可能是旧版配置，请重新安装以修复。"
        return
    fi

    info "请输入新配置，直接回车则保留当前值。"

    while :; do
        printf '端口 (当前: %s%s%s): ' "$cyan" "$current_port" "$none"
        IFS= read -r port
        [ -z "$port" ] && port="$current_port"
        if ! is_valid_port "$port"; then
            error "端口无效，请输入 1-65535 之间的数字。"
            continue
        fi
        if [ "$port" != "$current_port" ] && is_port_in_use "$port"; then
            error "端口 $port 已被占用，请选择其他端口。"
            continue
        fi
        break
    done

    while :; do
        printf 'UUID (当前: %s%s%s): ' "$cyan" "$current_uuid" "$none"
        IFS= read -r uuid
        [ -z "$uuid" ] && uuid="$current_uuid"
        if is_valid_uuid "$uuid"; then
            break
        fi
        error "UUID 格式无效，请输入标准 UUID 格式。"
    done

    while :; do
        printf 'SNI 域名 (当前: %s%s%s): ' "$cyan" "$current_domain" "$none"
        IFS= read -r domain
        [ -z "$domain" ] && domain="$current_domain"
        if is_valid_domain "$domain"; then
            break
        fi
        error "域名格式无效，请重新输入。"
    done

    write_config "$port" "$uuid" "$domain" "$private_key" "$public_key"
    if ! restart_xray; then
        return
    fi

    success "配置修改成功。"
    view_subscription_info
}

view_subscription_info() {
    if [ ! -f "$xray_config_path" ]; then
        error "配置文件不存在，请先安装。"
        return
    fi

    ip="$(get_public_ip || true)"
    if [ -z "$ip" ]; then
        return 1
    fi

    uuid="$(jq -r '.inbounds[0].settings.clients[0].id' "$xray_config_path")"
    port="$(jq -r '.inbounds[0].port' "$xray_config_path")"
    domain="$(jq -r '.inbounds[0].streamSettings.realitySettings.serverNames[0]' "$xray_config_path")"
    public_key="$(jq -r '.inbounds[0].streamSettings.realitySettings.publicKey' "$xray_config_path")"
    shortid="$(jq -r '.inbounds[0].streamSettings.realitySettings.shortIds[0]' "$xray_config_path")"

    if [ -z "$public_key" ] || [ "$public_key" = "null" ]; then
        error "配置文件中缺少公钥信息，可能是旧版配置，请重新安装以修复。"
        return
    fi

    display_ip="$ip"
    case "$ip" in
        *:*) display_ip="[$ip]" ;;
    esac

    link_name="$(hostname) X-reality"
    link_name_encoded="$(printf '%s' "$link_name" | sed 's/ /%20/g')"
    vless_url="vless://${uuid}@${display_ip}:${port}?flow=xtls-rprx-vision&encryption=none&type=tcp&security=reality&sni=${domain}&fp=chrome&pbk=${public_key}&sid=${shortid}#${link_name_encoded}"

    if [ "$is_quiet" = "true" ]; then
        printf '%s\n' "$vless_url"
    else
        printf '%s\n' "$vless_url" > "$HOME/xray_vless_reality_link.txt"
        printf '%s\n' '----------------------------------------------------------------'
        printf '%s --- Xray VLESS-Reality 订阅信息 --- %s\n' "$green" "$none"
        printf '%s 名称: %s%s%s\n' "$yellow" "$cyan" "$link_name" "$none"
        printf '%s 地址: %s%s%s\n' "$yellow" "$cyan" "$ip" "$none"
        printf '%s 端口: %s%s%s\n' "$yellow" "$cyan" "$port" "$none"
        printf '%s UUID: %s%s%s\n' "$yellow" "$cyan" "$uuid" "$none"
        printf '%s 流控: %sxtls-rprx-vision%s\n' "$yellow" "$cyan" "$none"
        printf '%s 指纹: %schrome%s\n' "$yellow" "$cyan" "$none"
        printf '%s SNI: %s%s%s\n' "$yellow" "$cyan" "$domain" "$none"
        printf '%s 公钥: %s%s%s\n' "$yellow" "$cyan" "$public_key" "$none"
        printf '%s ShortId: %s%s%s\n' "$yellow" "$cyan" "$shortid" "$none"
        printf '%s\n' '----------------------------------------------------------------'
        printf '%s订阅链接已保存到 ~/xray_vless_reality_link.txt:%s\n\n%s%s%s\n' "$green" "$none" "$cyan" "$vless_url" "$none"
        printf '%s\n' '----------------------------------------------------------------'
    fi
}

press_any_key_to_continue() {
    printf '\n按回车键返回主菜单...'
    IFS= read -r _dummy || true
}

main_menu() {
    while :; do
        if command -v clear >/dev/null 2>&1; then
            clear || true
        fi
        printf '%s Xray VLESS-Reality Alpine 一键安装管理脚本 %s\n' "$cyan" "$none"
        printf '%s\n' '---------------------------------------------'
        check_xray_status
        printf '%b\n' "$xray_status_info"
        printf '%s\n' '---------------------------------------------'
        printf '  %s%-2s%s %-35s\n' "$green" "1." "$none" "安装/重装 Xray (VLESS-Reality)"
        printf '  %s%-2s%s %-35s\n' "$cyan" "2." "$none" "更新 Xray"
        printf '  %s%-2s%s %-35s\n' "$yellow" "3." "$none" "重启 Xray"
        printf '  %s%-2s%s %-35s\n' "$red" "4." "$none" "卸载 Xray"
        printf '  %s%-2s%s %-35s\n' "$magenta" "5." "$none" "查看 Xray 日志"
        printf '  %s%-2s%s %-35s\n' "$cyan" "6." "$none" "修改节点配置"
        printf '  %s%-2s%s %-35s\n' "$green" "7." "$none" "查看订阅信息"
        printf '%s\n' '---------------------------------------------'
        printf '  %s%-2s%s %-35s\n' "$yellow" "0." "$none" "退出脚本"
        printf '%s\n' '---------------------------------------------'
        printf '请输入选项 [0-7]: '
        IFS= read -r choice

        needs_pause=true
        case "$choice" in
            1) install_xray ;;
            2) update_xray ;;
            3) restart_xray ;;
            4) uninstall_xray ;;
            5) view_xray_log; needs_pause=false ;;
            6) modify_config ;;
            7) view_subscription_info ;;
            0) success "感谢使用。"; exit 0 ;;
            *) error "无效选项，请输入 0-7 之间的数字。" ;;
        esac

        if [ "$needs_pause" = "true" ]; then
            press_any_key_to_continue
        fi
    done
}

main() {
    case "${1:-}" in
        -h|--help|help)
            usage
            exit 0
            ;;
    esac

    if [ "${1:-}" = "install" ]; then
        shift
        port=""
        uuid=""
        domain=""

        while [ "$#" -gt 0 ]; do
            case "$1" in
                --port)
                    [ "$#" -ge 2 ] || { error "--port 需要参数。"; exit 1; }
                    port="$2"
                    shift 2
                    ;;
                --uuid)
                    [ "$#" -ge 2 ] || { error "--uuid 需要参数。"; exit 1; }
                    uuid="$2"
                    shift 2
                    ;;
                --sni)
                    [ "$#" -ge 2 ] || { error "--sni 需要参数。"; exit 1; }
                    domain="$2"
                    shift 2
                    ;;
                --quiet|-q)
                    is_quiet=true
                    shift
                    ;;
                *)
                    error "未知参数: $1"
                    usage
                    exit 1
                    ;;
            esac
        done

        pre_check

        [ -z "$port" ] && port=443
        [ -z "$uuid" ] && uuid="$(cat /proc/sys/kernel/random/uuid)"
        [ -z "$domain" ] && domain="learn.microsoft.com"

        if ! is_valid_port "$port" || ! is_valid_domain "$domain"; then
            error "参数无效，请检查端口或 SNI 域名格式。"
            exit 1
        fi
        if ! is_valid_uuid "$uuid"; then
            error "UUID 格式无效，请提供标准 UUID 格式，或不传 --uuid 让脚本自动生成。"
            exit 1
        fi

        if [ -f "$xray_binary_path" ]; then
            stop_xray_service_quiet
        fi

        if is_port_in_use "$port"; then
            error "端口 $port 已被占用，请选择其他端口。"
            exit 1
        fi

        run_install "$port" "$uuid" "$domain"
    elif [ "$#" -eq 0 ]; then
        pre_check
        main_menu
    else
        error "未知命令: $1"
        usage
        exit 1
    fi
}

main "$@"
