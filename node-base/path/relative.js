const path = require('path');

// path.relative 方法根据当前工作目录返回 from 到 to 的相对路径
const res = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');

console.log('res', res); // ../../impl/bbb
