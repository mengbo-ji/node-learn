// // sub.js
// process.on('message', function(m) {
//   console.log('CHILD got message:', m);
// });

// process.send({ foo: 'bar' });


// process.on('message', function(m, server) {
//   if (m === 'server') {
//     server.on('connection', function(socket) {
//       socket.end('handled by child, pid is ' + process.pid + '\n');
//     });
//   }
// });


// child.js
const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('handled by child, pid is ' + process.pid + '\n');
});

process.on('message', function(m, tcp) {
  if (m === 'server') {
    tcp.on('connection', function(socket) {
      server.emit('connection', socket);
    });
  }
});

