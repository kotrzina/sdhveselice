#!/usr/bin/env bash
set -euo pipefail

APP_PORT="${PORT:-3000}"

# Kill any existing process on the port
if pid=$(lsof -ti :"$APP_PORT" 2>/dev/null); then
  echo "Killing existing process on port $APP_PORT (PID: $pid)..."
  kill $pid 2>/dev/null || true
  sleep 1
fi

# Install dependencies if needed
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules ]; then
  echo "Installing dependencies..."
  npm ci
else
  echo "Dependencies up to date, skipping install."
fi

# Build the site
echo "Building site..."
npm run build

# Start serving detached
LOG_FILE="/tmp/sdhveselice.log"
nohup npx serve@latest out -l "$APP_PORT" > "$LOG_FILE" 2>&1 &
APP_PID=$!

# Wait for startup
echo "Waiting for server to start on port $APP_PORT..."
for i in $(seq 1 30); do
  if lsof -ti :"$APP_PORT" > /dev/null 2>&1; then
    echo ""
    echo "=== Server running ==="
    echo "URL: http://pi:$APP_PORT"
    echo "PID: $APP_PID"
    echo "Log: $LOG_FILE"
    echo "======================"
    exit 0
  fi
  sleep 1
done

echo "ERROR: Server failed to start within 30 seconds. Check $LOG_FILE"
exit 1
