const Events = require('events');
const server = new Events();

// 移除指定的 eventName 事件的 listener，如果没有指定 eventName，则移除事件对象的所有 listener。可以通过 emitter.eventNames() 获取事件对象上的 eventName 数组
server.on('foo', () => {});
server.on('bar', () => { });
console.log(server.eventNames());
server.eventNames().forEach(eventName => server.removeAllListeners(eventName));
console.log(server.eventNames());

