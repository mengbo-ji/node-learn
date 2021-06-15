
const path = require('path');
const fs = require('fs');
// 文件操作在 Node.js 编程中使用频率很高，路径处理是文件操作的前提，Node.js 通过 path 模块提供了路径处理的基础 API
const appDirectory = fs.realpathSync(process.cwd());
console.log(appDirectory);

console.log(path.resolve(appDirectory, 'a/index.js'));
console.log(path.resolve('/foo/bar', 'tmp/file/'));
