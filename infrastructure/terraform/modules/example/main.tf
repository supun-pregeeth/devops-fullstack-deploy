# modules/example/main.tf
# Minimal example module that defines a local value and exposes a name output.

variable "name" {
  type = string
}

locals {
  resource_name = var.name
}

# No cloud resources here — replace with real resources in your provider
