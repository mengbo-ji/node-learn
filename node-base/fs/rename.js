const fs = require('fs');

fs.rename('目标文件1.txt', 'new目标文件1.txt', err => {
  if (!err) {
    console.log('文件名称修改成功');
  }
});
