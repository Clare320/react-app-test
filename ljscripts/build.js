const path = require('path');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
/**
 * 接收到参数-----> [
  '/usr/local/bin/node',
  '/Users/lingjie/Desktop/Test/react-app-test/scripts/build.js',
  '--test'
]
 */
console.log('接收到参数----->', process.argv);

// 检查文件是否存在
// 文件路径要绝对路径
if (!checkRequiredFiles([
    path.resolve('public/index.html'),
    path.resolve('src/index.js'),
    ])
) {
    process.exit(1);    
} else {
    console.log('----->all sure');
}