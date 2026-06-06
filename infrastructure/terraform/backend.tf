# backend.tf
# By default this uses local state. For remote state (S3/azurerm/gcs) replace with appropriate backend.

terraform {
  required_version = ">= 1.2.0"

  backend "local" {
    path = "terraform.tfstate"
  }

  # Example remote backend (AWS S3):
  # backend "s3" {
  #   bucket = "my-terraform-state-bucket"
  #   key    = "project/terraform.tfstate"
  #   region = "us-east-1"
  # }
}
