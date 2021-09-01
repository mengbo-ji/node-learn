const cp = require('child_process');
cp.spawn('node', [ 'worker.js' ]);
cp.exec('node worker.js', function() {
  // some code
});
cp.execFile('worker.js', function() {
  // some code
});
cp.fork('./worker.js');
