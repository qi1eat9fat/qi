#!/bin/sh
# Alpine Linux 初始化脚本
# 功能：设置 hostname、配置 root SSH 密钥登录并禁用 root 密码登录、安装常用工具。
# 用法示例：
#   sh alpine-init.sh --hostname my-alpine --root-pubkey 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... user@example'
#   sh alpine-init.sh -n my-alpine --root-pubkey-file /tmp/id_ed25519.pub

set -eu

HOSTNAME_VALUE=""
ROOT_PUBKEY=""
ROOT_PUBKEY_FILE=""
START_SSHD=1
SSHD_CONFIG="/etc/ssh/sshd_config"

usage() {
    cat <<'EOF'
用法：
  sh alpine-init.sh --hostname <主机名> --root-pubkey '<SSH公钥>'
  sh alpine-init.sh -n <主机名> --root-pubkey-file <公钥文件路径>

参数：
  -n, --hostname          要设置的 hostname，例如 alpine-01
  -k, --root-pubkey       root 用户允许登录的 SSH 公钥，需要整体用引号包起来
      --root-pubkey-file  从文件读取 root 用户 SSH 公钥
      --no-start-sshd     只修改配置，不启用或重启 sshd 服务
  -h, --help              显示帮助

示例：
  sh alpine-init.sh -n alpine-01 -k 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... user@example'
EOF
}

die() {
    echo "错误：$*" >&2
    exit 1
}

need_root() {
    [ "$(id -u)" -eq 0 ] || die "请使用 root 权限运行该脚本"
}

validate_hostname() {
    name="$1"

    [ -n "$name" ] || die "hostname 不能为空"
    [ "${#name}" -le 253 ] || die "hostname 过长"

    case "$name" in
        .*|*-|*..*|*_*|*[!A-Za-z0-9.-]*)
            die "hostname 格式不合法：只能包含字母、数字、短横线和点，且不能以点开头、不能以短横线结尾"
            ;;
    esac
}

read_pubkey_file() {
    file="$1"
    [ -r "$file" ] || die "无法读取公钥文件：$file"
    sed -n '/^[[:space:]]*$/d; 1p' "$file" | tr -d '\r'
}

validate_pubkey() {
    key="$1"
    [ -n "$key" ] || die "SSH 公钥不能为空"

    case "$key" in
        ssh-rsa\ *|ssh-ed25519\ *|ecdsa-sha2-nistp256\ *|ecdsa-sha2-nistp384\ *|ecdsa-sha2-nistp521\ *|sk-ssh-ed25519@openssh.com\ *|sk-ecdsa-sha2-nistp256@openssh.com\ *)
            ;;
        *)
            die "SSH 公钥格式看起来不正确，请传入类似 'ssh-ed25519 AAAA... user@example' 的完整公钥"
            ;;
    esac
}

parse_args() {
    while [ "$#" -gt 0 ]; do
        case "$1" in
            -n|--hostname)
                [ "$#" -ge 2 ] || die "$1 需要一个参数"
                HOSTNAME_VALUE="$2"
                shift 2
                ;;
            -k|--root-pubkey)
                [ "$#" -ge 2 ] || die "$1 需要一个参数"
                ROOT_PUBKEY="$2"
                shift 2
                ;;
            --root-pubkey-file)
                [ "$#" -ge 2 ] || die "$1 需要一个参数"
                ROOT_PUBKEY_FILE="$2"
                shift 2
                ;;
            --no-start-sshd)
                START_SSHD=0
                shift
                ;;
            -h|--help)
                usage
                exit 0
                ;;
            *)
                die "未知参数：$1"
                ;;
        esac
    done

    [ -n "$HOSTNAME_VALUE" ] || die "必须指定 --hostname"

    if [ -n "$ROOT_PUBKEY" ] && [ -n "$ROOT_PUBKEY_FILE" ]; then
        die "--root-pubkey 和 --root-pubkey-file 只能二选一"
    fi

    if [ -n "$ROOT_PUBKEY_FILE" ]; then
        ROOT_PUBKEY="$(read_pubkey_file "$ROOT_PUBKEY_FILE")"
    fi

    [ -n "$ROOT_PUBKEY" ] || die "必须指定 --root-pubkey 或 --root-pubkey-file"

    validate_hostname "$HOSTNAME_VALUE"
    validate_pubkey "$ROOT_PUBKEY"
}

install_packages() {
    echo "==> 安装常用工具和 OpenSSH..."
    apk add --no-cache bash wget curl vim zip openssh
}

configure_hostname() {
    echo "==> 设置 hostname 为：$HOSTNAME_VALUE"
    printf '%s\n' "$HOSTNAME_VALUE" > /etc/hostname
    hostname "$HOSTNAME_VALUE"

    if [ -f /etc/hosts ]; then
        if grep -q '^127\.0\.1\.1[[:space:]]' /etc/hosts; then
            sed -i "s/^127\.0\.1\.1[[:space:]].*/127.0.1.1\t$HOSTNAME_VALUE/" /etc/hosts
        else
            printf '127.0.1.1\t%s\n' "$HOSTNAME_VALUE" >> /etc/hosts
        fi
    else
        cat > /etc/hosts <<EOF
127.0.0.1	localhost localhost.localdomain
127.0.1.1	$HOSTNAME_VALUE
EOF
    fi
}

configure_root_ssh_key() {
    echo "==> 配置 root SSH authorized_keys..."
    install -d -m 700 /root/.ssh
    touch /root/.ssh/authorized_keys
    chmod 600 /root/.ssh/authorized_keys
    chown -R root:root /root/.ssh

    if ! grep -qxF "$ROOT_PUBKEY" /root/.ssh/authorized_keys; then
        if [ -s /root/.ssh/authorized_keys ]; then
            last_char="$(tail -c 1 /root/.ssh/authorized_keys || true)"
            [ -z "$last_char" ] || printf '\n' >> /root/.ssh/authorized_keys
        fi
        printf '%s\n' "$ROOT_PUBKEY" >> /root/.ssh/authorized_keys
    fi
}

set_sshd_option() {
    key="$1"
    value="$2"
    tmp="$(mktemp)"

    awk -v key="$key" -v value="$value" '
        BEGIN { done = 0; in_match = 0 }
        /^[[:space:]]*Match[[:space:]]/ && done == 0 {
            print key " " value
            done = 1
            in_match = 1
            print
            next
        }
        /^[[:space:]]*Match[[:space:]]/ { in_match = 1 }
        in_match == 0 {
            line = $0
            sub(/^[[:space:]#]*/, "", line)
            split(line, parts, /[[:space:]=]+/)
            if (tolower(parts[1]) == tolower(key)) next
        }
        { print }
        END {
            if (done == 0) print key " " value
        }
    ' "$SSHD_CONFIG" > "$tmp"

    cat "$tmp" > "$SSHD_CONFIG"
    rm -f "$tmp"
}

configure_sshd() {
    echo "==> 配置 sshd：允许 root 密钥登录，禁用 root 密码登录..."
    install -d -m 755 /etc/ssh
    touch "$SSHD_CONFIG"

    set_sshd_option "PermitRootLogin" "prohibit-password"
    set_sshd_option "PubkeyAuthentication" "yes"
    set_sshd_option "AuthorizedKeysFile" ".ssh/authorized_keys"

    if command -v ssh-keygen >/dev/null 2>&1; then
        ssh-keygen -A
    fi

    if command -v sshd >/dev/null 2>&1; then
        sshd -t -f "$SSHD_CONFIG"
    fi
}

restart_sshd() {
    [ "$START_SSHD" -eq 1 ] || return 0

    echo "==> 启用并重启 sshd 服务..."
    if command -v rc-update >/dev/null 2>&1; then
        rc-update add sshd default >/dev/null 2>&1 || true
    fi

    if command -v rc-service >/dev/null 2>&1; then
        if rc-service sshd status >/dev/null 2>&1; then
            rc-service sshd restart
        else
            rc-service sshd start
        fi
    elif command -v service >/dev/null 2>&1; then
        service sshd restart || service sshd start
    else
        echo "提示：未找到 rc-service/service，请手动重启 sshd。"
    fi
}

main() {
    parse_args "$@"
    need_root
    install_packages
    configure_hostname
    configure_root_ssh_key
    configure_sshd
    restart_sshd
    echo "==> 完成。建议先新开一个 SSH 会话确认密钥登录可用，再关闭当前会话。"
}

main "$@"
