const { promises, constants } = require('fs');
const { copyFile } = promises;

// 默认情况下将创建或覆盖目标文件。
copyFile('a.txt', '目标文件.txt')
  .then(() => console.log('源文件已拷贝到目标文件'))
  .catch(() => console.log('该文件无法拷贝'));

// 通过使用 COPYFILE_EXCL，如果目标文件存在，则操作将失败。
copyFile('a.txt', '目标文件1.txt', constants.COPYFILE_EXCL)
  .then(() => console.log('源文件已拷贝到目标文件'))
  .catch(() => console.log('该文件无法拷贝'));
