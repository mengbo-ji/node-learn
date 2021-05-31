const path = require('path');

// path.resolve 方法将路径或路径片段的序列解析为绝对路径
const res1 = path.resolve('/foo/bar', './baz');
console.log('res1', res1); // /foo/bar/baz

const res2 = path.resolve('/foo/bar', '/tmp/file/');
console.log('res2', res2); // /tmp/file

const res3 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log('res3', res3); // /Users/jimengbo/Desktop/learn/node-learn/wwwroot/static_files/gif/image.gif
