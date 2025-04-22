#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# verify that middlewares directory exists
if [ ! -d "middlewares" ]; then
    echo "Error: middlewares directory not found!"
    exit 1
fi 