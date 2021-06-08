const fs = require('fs');

const data = '测试写入';
fs.writeFileSync('./a.txt', data);

const data1 = Buffer.from('Hello, Node.js');
const data2 = 'Hello, Node.js';

const fd = fs.openSync('./test.txt', 'w');
console.log(fd);

fs.write(fd, data1, err => {
  if (err) throw err;
  console.log('data1 已被写入');
});

fs.write(fd, data2, err => {
  if (err) throw err;
  console.log('data2 已被写入');
});

setTimeout(() => {
  fs.close(fd, console.log);
}, 100);

fs.appendFile('./test.txt', data1, err => {
  if (!err) {
    fs.appendFile('./test.txt', data2, err => {
      if (!err) {
        console.log('文件追加成功');
      }
    });
  }
});
