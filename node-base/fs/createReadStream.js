const fs = require('fs');

const readStream = fs.createReadStream('./test.txt', { start: 9, end: 20 });

readStream.on('open', fd => {
  console.log(`文件描述符 ${fd} 已分配`);
});

readStream.on('ready', () => {
  console.log('文件已准备好');
});

readStream.on('data', chunk => {
  console.log('读取的数据:', chunk.toString());
});

readStream.on('end', () => {
  console.log('文件读取结束');
});

readStream.on('close', () => {
  console.log('文件已经关闭');
});

readStream.on('error', err => {
  console.log('读取出错:', err);
});
