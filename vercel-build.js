import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 删除 package-lock.json 如果存在
try {
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
    console.log('Removed package-lock.json');
  }
} catch (err) {
  console.error('Error removing package-lock.json:', err);
}

// 清理 node_modules
try {
  execSync('rm -rf node_modules');
  console.log('Cleaned node_modules');
} catch (err) {
  console.error('Error cleaning node_modules:', err);
}

// 安装依赖并忽略完整性检查
try {
  console.log('Installing dependencies...');
  execSync('npm install --no-package-lock --no-audit --no-fund --legacy-peer-deps', { stdio: 'inherit' });
  
  // 确保安装了postcss和autoprefixer
  console.log('Ensuring PostCSS and other required dependencies are installed...');
  execSync('npm install --no-package-lock --save postcss autoprefixer tailwindcss', { stdio: 'inherit' });
  
  console.log('Dependencies installed');
} catch (err) {
  console.error('Error installing dependencies:', err);
  process.exit(1);
}

// 运行 Next.js 构建
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed');
} catch (err) {
  console.error('Error during build:', err);
  process.exit(1);
} 