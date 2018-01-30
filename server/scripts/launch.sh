#!/usr/bin/env bash
git fetch --all && 
git checkout --force "origin/master" && 
rm -rf node_modules && 
yarn && 
npm run build 
