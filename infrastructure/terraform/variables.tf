variable "aws_region" {
  type    = string
  default = "eu-north-1"
}

variable "project_name" {
  type    = string
  default = "ruhuna-projecthub"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "key_name" {
  type        = string
  description = "Existing AWS EC2 Key Pair name"
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "Your IP/32 is best. 0.0.0.0/0 allows anyone"
  default     = "0.0.0.0/0"
}

variable "repo_url" {
  type    = string
  default = "https://github.com/supun-pregeeth/devops-fullstack-deploy.git"
}
