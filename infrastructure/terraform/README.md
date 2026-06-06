Terraform directory structure and usage

Structure:
- modules/: reusable modules (example provided)
- envs/: environment var files (dev/prod tfvars)
- main.tf, providers.tf, variables.tf, outputs.tf: root config
- backend.tf: remote/local backend configuration

Quick start:
1. Edit `providers.tf` to configure your provider(s).
2. Set variables in `envs/dev.tfvars` or `envs/prod.tfvars`.
3. Run `terraform init` then `terraform plan -var-file=envs/dev.tfvars` then `terraform apply -var-file=envs/dev.tfvars`.
