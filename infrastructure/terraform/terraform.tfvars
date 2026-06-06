cat > terraform.tfvars <<'EOF'
aws_region       = "eu-north-1"
project_name     = "ruhuna-projecthub"
instance_type    = "t3.micro"
key_name         = "projecthub-key"
allowed_ssh_cidr = "0.0.0.0/0"
EOF
