const net = require('net');

// 创建客户端
const client = net.connect({ port: 1234 }, function() {
  console.log('已链接到服务器');
  client.write('Hi!');
});

// data事件监听。收到数据后，断开连接
client.on('data', data => {
  console.log(data.toString());
  client.end();
});

// end事件监听，断开连接时会被触发
client.on('end', function() {
  console.log('已与服务器断开连接');
});
