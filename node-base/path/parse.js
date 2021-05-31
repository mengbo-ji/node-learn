const path = require('path');

// path.parse 方法用来解析文件路径，返回 对应的元信息对象
const res = path.parse('/home/user/dir/file.txt');

console.log('res', res);
/**
  {
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  }
*/
