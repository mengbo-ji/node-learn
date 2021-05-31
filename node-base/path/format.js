const path = require('path');

// path.format 方法从对象返回路径字符串，是 path.parse 的反操作

const res = path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt',
});

console.log('res', res); // /home/user/dir/file.txt
