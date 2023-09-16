#!/bin/bash
yum update -y && \
yum install -y ruby wget curl zip unzip && \
yum install -y amazon-linux-extras && \
amazon-linux-extras enable php8.1 && \
yum clean metadata && \
amazon-linux-extras install -y php8.1 && \
yum install -y php-mbstring php-xml php-gd php-zip php-bcmath php-pgsql && \
yum remove -y httpd && \
amazon-linux-extras install -y nginx1 && \
amazon-linux-extras install -y epel && \
yum install -y supervisor && \

service php-fpm restart
service nginx restart
