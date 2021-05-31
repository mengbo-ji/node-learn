// 当 Node.js 进程因以下原因之一即将退出时，则会触发 exit 事件：
// • 显式调用 process.exit() 方法
// • Node.js 事件循环不再需要执行任何其他工作
// 此时无法阻止退出事件循环，并且一旦所有 exit 事件的监听器都已完成运行时，Node.js 进程将终止

// uncaughtException
// 当前进程抛出一个没有被捕捉的错误时，会触发uncaughtException事件
process.on('uncaughtException', function(err) {
  console.error(err.stack);
});


// beforeExit
// 当 Node.js 清空其事件循环并且没有其他工作要安排时，会触发 beforeExit 事件。 通常 Node.js 进程将在没有调度工作时退出，但是在 beforeExit 事件上注册的监听器可以进行异步调用使 Node.js 进程继续

process.on('beforeExit', code => {
  console.log('进程 beforeExit 事件的代码: ', code);
});

process.on('exit', code => {
  console.log('进程 exit 事件的代码: ', code);
});

console.log('此消息最新显示');

// 打印:
// 此消息最新显示
// 进程 beforeExit 事件的代码: 0
// 进程 exit 事件的代码: 0


// message
// 如果使用 IPC 通道 fork Node.js 进程，子进程收到父进程使用 childprocess.send() 发送的消息，就会触发 message 事件
process.on('message', m => {
  console.log('子进程收到消息', m);
});

// process.nextTick(callback)
// process.nextTick() 方法将 callback 添加到下一个时间点的队列执行
