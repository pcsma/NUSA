#!/bin/bash

# Ask for custom message
read -p "Enter commit message: " msg

# Add timestamp
timestamp=$(date "+%Y-%m-%d %H:%M:%S")

# Full commit message
full_msg="$msg - $timestamp"

# Git commit flow
git add .
git commit -m "$full_msg"
git push

# Build and deploy
npm run build
npm run deploy
