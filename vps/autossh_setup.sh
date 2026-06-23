#!/bin/bash

# 颜色输出配置
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. 检查是否以 root 运行
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}错误: 请使用 root 权限运行此脚本。${NC}"
  echo "用法: sudo $0 <目标IP或域名>"
  exit 1
fi

# 2. 检查参数传入
if [ -z "$1" ]; then
  echo -e "${RED}错误: 未提供目标服务器 IP 地址。${NC}"
  echo "用法: sudo $0 <目标IP或域名>"
  echo "示例: sudo $0 192.168.1.100"
  exit 1
fi

TARGET_IP=$1
KEY_PATH="/data/key/id_ed25519"
PORT="1080"
SERVICE_NAME="autossh-socks.service"
SERVICE_PATH="/etc/systemd/system/${SERVICE_NAME}"

echo -e "${GREEN}=== 开始配置 AutoSSH SOCKS 代理服务 ===${NC}"
echo -e "目标服务器: root@${TARGET_IP}"
echo -e "本地 SOCKS 端口: ${PORT}"
echo -e "私钥路径: ${KEY_PATH}\n"

# 3. 安装依赖 (Debian 系使用 apt)
echo -e "${YELLOW}>>> 1. 正在检查并安装 autossh...${NC}"
apt update -y && apt install -y autossh

# 4. 检查并设置私钥权限
echo -e "${YELLOW}>>> 2. 检查私钥文件及权限...${NC}"
if [ ! -f "$KEY_PATH" ]; then
  echo -e "${RED}警告: 私钥文件 $KEY_PATH 不存在！${NC}"
  echo -e "服务将被创建，但可能无法正常启动。请确保稍后将私钥放置在正确位置。"
else
  chmod 600 "$KEY_PATH"
  echo -e "${GREEN}私钥权限已强制设置为 600。${NC}"
fi

# 5. 生成 Systemd 配置文件
echo -e "${YELLOW}>>> 3. 正在生成 systemd 配置文件 (${SERVICE_PATH})...${NC}"
cat > "$SERVICE_PATH" <<EOF
[Unit]
Description=AutoSSH SOCKS Proxy Tunnel
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=root
Environment="AUTOSSH_GATETIME=0"
ExecStart=/usr/bin/autossh -M 0 -i ${KEY_PATH} -D ${PORT} -N -C -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -o ServerAliveCountMax=3 root@${TARGET_IP}
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# 6. 重新加载并启动服务
echo -e "${YELLOW}>>> 4. 重新加载 systemd 并配置开机启动...${NC}"
systemctl daemon-reload
systemctl enable "${SERVICE_NAME}"
systemctl restart "${SERVICE_NAME}"

# 7. 输出结果
echo -e "\n${GREEN}=== 配置完成！ ===${NC}"
echo -e "代理服务已在后台启动，并已加入开机自启。\n"
echo -e "常用管理命令："
echo -e "  查看服务状态 : ${YELLOW}systemctl status ${SERVICE_NAME}${NC}"
echo -e "  启动服务     : ${YELLOW}systemctl start ${SERVICE_NAME}${NC}"
echo -e "  停止服务     : ${YELLOW}systemctl stop ${SERVICE_NAME}${NC}"
echo -e "  查看实时日志 : ${YELLOW}journalctl -u ${SERVICE_NAME} -f${NC}"
