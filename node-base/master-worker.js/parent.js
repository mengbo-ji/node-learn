// // parent.js
// const cp = require('child_process');
// const n = cp.fork(__dirname + '/sub.js');

// n.on('message', function(m) {
//   console.log('PARENT got message:', m);
// });

// n.send({ hello: 'world' });


// const child = require('child_process').fork(__dirname + '/sub.js');

// // Open up the server object and send the handle
// const server = require('net').createServer();
// server.on('connection', function(socket) {
//   socket.end('handled by parent\n');
// });
// server.listen(1337, function() {
//   child.send('server', server);
// });


// // parent.js
// const cp = require('child_process');
// const child1 = cp.fork(__dirname + '/sub.js');
// const child2 = cp.fork(__dirname + '/sub.js');

// // Open up the server object and send the handle
// const server = require('net').createServer();
// server.on('connection', function(socket) {
//   socket.end('handled by parent\n');
// });
// server.listen(1337, function() {
//   child1.send('server', server);
//   child2.send('server', server);
// });


// parent.js
const cp = require('child_process');
const child1 = cp.fork(__dirname + '/sub.js');
const child2 = cp.fork(__dirname + '/sub.js');

// Open up the server object and send the handle
const server = require('net').createServer();
server.listen(1337, function() {
  child1.send('server', server);
  child2.send('server', server);
  // 关掉
  server.close();
});
