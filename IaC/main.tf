terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
}

provider "aws" {
    region = "us-east-1"
    profile = "goggins-admin"
}

resource "aws_s3_bucket" "my_bucket" {
    bucket = "push-up-challenge234895763253742"
}

# resource "aws_cloudfront_distribution" "s3_distribution" {
#     origin {
#         domain_name = 
#         origin_access_control_id = 
#         origin_id =
#     }

#     enabled = true
#     is_ipv6_enabled = true
#     default_root_object = "index.html"
# }