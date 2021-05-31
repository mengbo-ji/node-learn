const path = require('path');

// path.normalize 方法规范化给定的 path，解析 .. 和 .
const res = path.normalize('/foo/bar//baz/asdf/quux/..');

console.log('res', res); // /foo/bar/baz/asdf
