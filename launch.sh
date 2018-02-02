#!/usr/bin/env bash
# git fetch --all && git checkout --force "origin/master" &&
# rm -rf node_modules && yarn &&  npm run build 

mkdir -p .logs/stamps &&
touch .logs/stamps/prod.js &&
echo "PROD TIME: $(date)" >> .logs/stamps/prod.js
