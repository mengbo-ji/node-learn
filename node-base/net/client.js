const net = require('net');

const client = net.createConnection({
  port: 1234,
  host: '127.0.0.1',
});

client.on('connect', () => {
  client.write('客户端🔗了');
});

client.on('data', chunk => {
  console.log('client', chunk.toString());
});

client.on('error', err => {
  console.log(err);
});

client.on('close', () => {
  console.log('客户端断开连接');
});
