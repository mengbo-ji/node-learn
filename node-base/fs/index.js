const fs = require('fs');

// fs.statSync('.', (err, data) => {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('data', data);
//   }
// });

// 判断路径是否存在
if (fs.existsSync('./a.txt')) {
  console.log('路径存在');
} else {
  console.log('路径不存在');
}

// 不建议在在对文件操作前使用 fs.exists() 检查文件是否存在，这样做会引入竞态条件，因为其他进程可能会在两次调用之间更改文件的状态。相反应该直接对文件进行操作，如果文件不存在则处理引发的错误

// 不推荐使用方式
fs.exists('myfile', exists => {
  if (exists) {
    fs.open('myfile', 'r', err => {
      if (err) throw err;
      // readMyData(fd);
    });
  } else {
    console.error('myfile 不存在');
  }
});

// 推荐使用方式
fs.open('myfile', 'r', err => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile 不存在');
      return;
    }
    throw err;
  }
  // readMyData(fd);
});
