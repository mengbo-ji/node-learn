const Events = require('events');
const server = new Events();
const callback = () => {
  console.log('已连接');
};
server.on('connection', callback);
server.emit('connection', callback);
// off 方法是 removeListener 方法的别名
server.off('connection', callback);
server.removeListener('connection', callback);

// removeListener() 最多只会从监听器数组中移除一个监听器。 如果监听器被多次添加到指定 eventName 的监听器数组中，则必须多次调用 removeListener() 才能移除所有实例
