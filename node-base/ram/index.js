const os = require('os');
console.log('process.memoryUsage()', process.memoryUsage());

// rss: 18370560,        rss是resident set size的缩写，即进程的常驻内存部分
// heapTotal: 4509696,   已申请到的堆内存
// heapUsed: 2361112,    当前使用的量
// external: 773680,
// arrayBuffers: 9382

console.log('os.totalmem', os.totalmem()); // 17179869184 系统总内存
console.log('os.freemem', os.freemem()); // 3702767616 系统闲置内存
