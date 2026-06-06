output "ec2_public_ip" {
  value = aws_instance.app.public_ip
}

output "ssh_command" {
  value = "ssh -i <your-key>.pem ubuntu@${aws_instance.app.public_ip}"
}
