const fs = require('fs');

// 删除常规文件或软链接，不能用于目录
fs.unlink('./new目标文件1.txt', err => {
  if (!err) {
    console.log('文件已删除');
  }
});
