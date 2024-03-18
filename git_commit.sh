#!/bin/bash

# Pull the latest changes from the remote repository
git pull

# Add all changes to the staging area
git add .

# Prompt the user to input the commit message
echo "Enter commit message:"
read commit_message

# Commit changes with the provided message
git commit -m "$commit_message"

# Push changes to the remote repository
git push --set-upstream origin romain

