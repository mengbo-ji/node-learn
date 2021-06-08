const fs = require('fs');

fs.watch('./test.txt', (eventType, filename) => {
  if (filename) {
    console.log('filename', filename);
  }
  console.log('eventType', eventType);
});

fs.watchFile('./test.txt', { interval: 100 }, (curr, prev) => {
  console.log('当前的最近修改时间是: ' + curr.mtime);
  console.log('之前的最近修改时间是: ' + prev.mtime);
});

const tid = setInterval(() => {
  fs.appendFile('./test.txt', 'Hello, world!\n', err => {
    if (err) throw err;
    console.log('文件修改完成');
  });
}, 300);

setTimeout(() => {
  clearInterval(tid);
  fs.unwatchFile('./test.txt');
}, 2000);
