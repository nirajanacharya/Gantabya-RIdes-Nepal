#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm install -g nodemon

# Verify directory structure
if [ ! -d "Middlewares" ]; then
    echo "Error: Middlewares directory not found!"
    exit 1
fi

# Verify auth.middleware.js exists
if [ ! -f "Middlewares/auth.middleware.js" ]; then
    echo "Error: Middlewares/auth.middleware.js not found!"
    exit 1
fi

echo "Build verification successful!" 