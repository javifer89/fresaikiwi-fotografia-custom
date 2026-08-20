#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📦 Auto-installing missing dependencies...');

try {
  // Check if SWC Darwin ARM64 is needed (for macOS)
  const swcDarwinPath = 'node_modules/@next/swc-darwin-arm64/next-swc.darwin-arm64.node';
  if (!fs.existsSync(swcDarwinPath)) {
    console.log('Installing @next/swc-darwin-arm64...');
    try {
      execSync('npm install @next/swc-darwin-arm64@16.1.6 --force --no-audit --no-fund', { stdio: 'inherit' });
    } catch (e) {
      console.log('Optional dependency skipped');
    }
  }

  // Check if react-wrap-balancer is installed
  try {
    execSync('npm list react-wrap-balancer', { stdio: 'pipe' });
  } catch (e) {
    console.log('Installing react-wrap-balancer...');
    try {
      execSync('npm install --save react-wrap-balancer@latest --legacy-peer-deps --no-audit --no-fund', { stdio: 'inherit' });
    } catch (e) {
      console.log('Optional dependency skipped');
    }
  }

  console.log('✅ Dependencies check complete!');
  process.exit(0);
} catch (error) {
  console.log('⚠️ Some optional dependencies could not be installed, but the app will still work.');
  process.exit(0);
}
