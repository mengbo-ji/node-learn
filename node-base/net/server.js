const net = require('net');

const server = net.createServer();

const port = 1234;
const host = 'localhost';
server.listen(port, host);

server.on('listening', () => {
  console.log(`服务端已经开启在 ${host}: ${port}`);
});

// 接收消息回写消息
server.on('connection', socket => {
  socket.on('data', chunk => {
    const msg = chunk.toString();
    console.log('server', msg);

    // 回数据
    socket.write(Buffer.from('您好' + msg));
  });
});

server.on('close', () => {
  console.log('服务端断开连接');
});

server.on('error', err => {
  if (err === 'EADDRINUSE') {
    console.log('地址正在被使用');
  }
  console.log(err);
});
