
const CustomReadable = require('../readable/customReadable');
const CustomWritable = require('./customWritable');

const rns = new CustomReadable(100);
const rws = new CustomWritable({
  highWaterMark: 8, // 降低下水位，默认16还是大的
});

rns.on('data', chunk => {
  if (rws.write(chunk) === false) {
    console.log('pause: 暂停数据的读取');
    rns.pause(); // 暂停数据的读取
  }
});

rws.on('drain', () => {
  console.log('resume: 恢复数据的读取');
  rns.resume(); // 恢复数据的读取
});

