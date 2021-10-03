
// cluster.js
// const cluster = require('cluster');

// cluster.setupMaster({
//   exec: 'worker.js',
// });

// const cpus = require('os').cpus();
// for (let i = 0; i < cpus.length; i++) {
//   cluster.fork();
// }

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
