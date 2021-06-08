
// 可读流
// 可读流是生产数据用来供程序消费的流。常见的数据生产方式有读取磁盘文件、读取网络请求内容等，看一下前面介绍什么是流用的例子：
// const rs = fs.createReadStream(filePath);
// rs 就是一个可读流，其生产数据的方式是读取磁盘的文件，控制台 process.stdin 也是一个可读流：
process.stdin.pipe(process.stdout);
// 通过简单的一句话可以把控制台的输入打印出来，process.stdin 生产数据的方式是读取用户在控制台的输入。
// 回头再看一下对可读流的定义：可读流是生产数据用来供程序消费的流。
const CustomReadable = require('./customReadable');

const rns = new CustomReadable(5);
// rns.pipe(process.stdout);

// rns.on('data', chunk => {
//   console.log(chunk.toString());
// });

rns.on('end', () => {
  console.log('done');
  process.exit();
});

rns.on('error', err => {
  console.log('err', err);
});

// NodeJS 提供了一个 readable 的事件，事件在可读流准备好数据的时候触发，也就是先监听这个事件，收到通知有数据了再去读取就好了：
rns.on('readable', () => {
  let chunk;
  while ((chunk = rns.read()) !== null) {
    console.log('chunk', chunk.toString());
  }
});
