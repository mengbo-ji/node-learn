const fs = require('fs');

fs.readFileSync(__dirname, () => {
  // 0 1
  setTimeout(() => console.log('1'), 0);
  setImmediate(() => console.log('0'), 0);
});

setImmediate(console.log, 1);
setTimeout(console.log, 1, 2);
/** **************** microTask 分割线 ********************/
Promise.resolve(3).then(console.log); // microTask 分割线
/** **************** 下次 event loop tick 分割线 ********************/
process.nextTick(console.log, 4);
/** **************** 同步任务和异步任务的分割线 ********************/
console.log(5);
