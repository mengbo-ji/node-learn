// // sub.js
// process.on('message', function(m) {
//   console.log('CHILD got message:', m);
// });

// process.send({ foo: 'bar' });


process.on('message', function(m, server) {
  if (m === 'server') {
    server.on('connection', function(socket) {
      socket.end('handled by child\n');
    });
  }
});
