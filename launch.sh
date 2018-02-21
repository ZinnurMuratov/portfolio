#!/usr/bin/env bash
mkdir -p .logs/stamps &&
echo "'PROD TIME: $(date)'" >> .logs/stamps/prod.js && 
git checkout . &&
rm -rf node_modules &&
yarn install --production=false &&
yarn build
