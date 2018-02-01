#!/usr/bin/env bash
mkdir -p .logs/stamps
touch .logs/stamps/test.js
echo "TIME: $(date)" >> .logs/stamps/test.js
