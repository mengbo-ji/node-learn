const path = require('path');

// path.join 使用操作系统规定的分隔符将参数中的 path 片段连接，并且规范化

const res = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

console.log('res', res); // /foo/bar/baz/asdf

