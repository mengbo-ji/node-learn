const fs = require('fs');

fs.statSync('.', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('data', data);
  }
});

const stats = fs.statSync(__dirname + '/../path');
console.log(stats.isDirectory()); // 是否是文件夹
console.log(stats.isFile()); // 是否是文件
console.log(stats.isSymbolicLink()); // 判断文件是否是软链接
console.log(stats.size); // 获取文件字节数
