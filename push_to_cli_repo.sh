#!/bin/bash

# Script to push CLI files to the cli.apescasio.fr repository

echo "Setting up git repository for CLI files..."

# Navigate to the CLI directory
cd /var/www/apescasio.fr/public/cli

# Initialize a new git repository (this will be separate from the parent repo)
git init

# Add all files in the current directory
git add .

# Create initial commit
git commit -m "Initial commit: CLI portfolio files"

# Add the remote repository
git remote add origin git@github.com:apescasio/cli.apescasio.fr.git

# Set the default branch name to main (GitHub's default)
git branch -M main

# Push to the remote repository
git push -u origin main

echo "Files successfully pushed to git@github.com:apescasio/cli.apescasio.fr.git"
