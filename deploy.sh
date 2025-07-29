#!/bin/bash

# Adelante Landscapes - Production Deployment Script
# This script builds and deploys to GitHub Pages with correct baseurl

echo "🚀 Deploying Adelante Landscapes to GitHub Pages..."

# Kill any local development servers
echo "🧹 Stopping local development servers..."
pkill -f ruby.*httpd

# Build with production config (includes baseurl for GitHub Pages)
echo "🔨 Building site for production..."
bundle exec jekyll build --config _config.yml

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Production build successful!"
    
    # Add, commit, and push changes
    echo "📤 Committing and pushing to GitHub..."
    git add .
    git commit -m "Update site content - $(date)"
    git push origin main
    
    echo "✅ Deployed to GitHub Pages!"
    echo "🌐 Your site will be available at: https://benjination.github.io/AdelanteLandscapes/"
    echo "⏱️  Note: GitHub Pages may take a few minutes to update."
else
    echo "❌ Production build failed! Check the output above for errors."
    exit 1
fi
