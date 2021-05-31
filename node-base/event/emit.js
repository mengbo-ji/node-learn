/**
 * 在浏览器环境中开发者事件相关的大部分工作是订阅事件，也就是绑定事件处理函数 listener，在 Node.js 事件编程中经常需要创建事件对象，在合理实际触发事件。使用 emit 方法可以按照 listener 注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数
*/
const EventEmitter = require('events');
const myEmitter = new EventEmitter();


myEmitter.on('nextTickEvent', () => {
  process.nextTick(() => {
    console.log('nextTick异步的触发');
  });
});
myEmitter.emit('nextTickEvent');


myEmitter.on('setImmediateEvent', () => {
  setImmediate(() => {
    console.log('setImmediate异步的触发');
  });
});
myEmitter.emit('setImmediateEvent');

myEmitter.on('event', () => {
  console.log('第一个监听器');
});

myEmitter.on('event', (arg1, arg2, arg3) => {
  console.log(`第二个监听器中的事件有参数 ${arg1}、${arg2}、${arg3}`);
});

myEmitter.on('event', (...args) => {
  const parameters = args.join(', ');
  console.log(`第三个监听器中的事件有参数 ${parameters}`);
});

myEmitter.listeners('event');
myEmitter.emit('event', 1, 2, 3, 4, 5);


// 方法可以传任意数量的参数到 listener， this 关键词会被指向 listener 所绑定的 EventEmitter 实例
myEmitter.on('event1', function(a, b) {
  console.log(a, b, this === myEmitter);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event1', 'a', 'b');

// 也可以使用 ES6 的箭头函数作为监听器。但 this 关键词不会指向 EventEmitter 实例：
myEmitter.on('event1', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});
myEmitter.emit('event1', 'a', 'b');

