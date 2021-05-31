/**
 * Windows 与 POSIX 对比
  path 模块在不同操作系统处理会有所差异， 当在 Windows 操作系统上运行时， path 模块会假定正被使用的是 Windows 风格的路径（C:\\temp\\myfile.html），而在 POSIX 操作系统会默认使用 POSIX 的路径风格（/tmp/myfile.html），路径风格和操作系统不一致会出现意外的结果
*/

const path = require('path');

// basename方法用于返回一个路径的 basename
const res = path.basename('C:\\temp\\myfile.html');
console.log('res', res); // C:\temp\myfile.html
// 如果希望在不同操作系统都返回指定系统的结果，需要使用
// path.win32.method
// path.posix.method

const res1 = path.basename('/目录1/目录2/文件.html');
console.log('res1', res1); // 文件.html

const res2 = path.basename('/目录1/目录2/文件.html', '.html');
console.log('res2', res2); // 文件

const res3 = path.basename('/目录1/目录2/文件.Html', '.html');
console.log('res3', res3); // 文件.Html
