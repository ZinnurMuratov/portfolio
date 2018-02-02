#!/usr/bin/env bash
echo "PROD TIME: $(date)" >> .logs/stamps/prod.js
git fetch --all && git checkout --force "origin/master" &&
rm -rf node_modules && yarn &&  npm run build
