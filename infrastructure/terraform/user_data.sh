cat > user_data.sh <<'EOF'
#!/bin/bash
set -e

PROJECT_NAME="${project_name}"
REPO_URL="${repo_url}"
APP_DIR="/home/ubuntu/${project_name}"

apt-get update -y
apt-get install -y ca-certificates curl gnupg git

install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

usermod -aG docker ubuntu

rm -rf "$APP_DIR"
mkdir -p "$APP_DIR"
chown -R ubuntu:ubuntu "$APP_DIR"

sudo -u ubuntu git clone "$REPO_URL" "$APP_DIR"

echo "Done. Repo cloned to: $APP_DIR"
EOF
