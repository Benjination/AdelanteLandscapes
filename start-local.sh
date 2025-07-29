#!/bin/bash

# Adelante Landscapes - Local Development Server
# This script ensures CSS and assets work properly in local development

echo "🌱 Starting Adelante Landscapes local development server..."
echo "📁 Working directory: $(pwd)"

# Kill any existing Jekyll processes
echo "🧹 Cleaning up any existing processes..."
pkill -f jekyll
pkill -f ruby.*httpd

# Build with local config (no baseurl issues)
echo "🔨 Building site with local configuration..."
bundle exec jekyll build --config _config.yml,_config_local.yml

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Start local server
    echo "🚀 Starting local server on http://localhost:4005..."
    cd _site
    ruby -run -e httpd . -p 4005 &
    SERVER_PID=$!
    
    # Wait a moment for server to start
    sleep 2
    
    echo "✅ Server running at: http://localhost:4005"
    echo "📝 Consultation page: http://localhost:4005/consultation/"
    echo "📞 Contact page: http://localhost:4005/contact/"
    echo ""
    echo "🛑 To stop the server, press Ctrl+C or run: kill $SERVER_PID"
    
    # Keep script running to maintain server
    wait $SERVER_PID
else
    echo "❌ Build failed! Check the output above for errors."
    exit 1
fi
