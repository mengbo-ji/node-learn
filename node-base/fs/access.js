const fs = require('fs');

const pkg = '../../package.json';

// 检查当前目录中是否存在该文件
fs.access(pkg, fs.constants.F_OK, err => {
  console.log(`${pkg} ${err ? '不存在' : '存在'}`);
});

// 检查文件是否可读
fs.access(pkg, fs.constants.R_OK, err => {
  console.log(`${pkg} ${err ? '不可读' : '可读'}`);
});

// 检查文件是否可写
fs.access(pkg, fs.constants.W_OK, err => {
  console.log(`${pkg} ${err ? '不可写' : '可写'}`);
});

// 检查当前目录中是否存在该文件，以及该文件是否可写
fs.access(pkg, fs.constants.F_OK | fs.constants.W_OK, err => {
  if (err) {
    console.error(
      `${pkg} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
  } else {
    console.log(`${pkg} 存在，且它是可写的`);
  }
});
