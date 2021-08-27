const showMem = function() {
  const mem = process.memoryUsage();
  const format = function(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  };
  console.log('Process: heapTotal ' + format(mem.heapTotal) +
    ' heapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
  console.log('-----------------------------------------------------------');
};

const useMem = function() {
  const size = 200 * 1024 * 1024;
  const buffer = new Buffer(size);
  for (let i = 0; i < size; i++) {
    buffer[i] = 0;
  }
  return buffer;
};

const total = [];

for (let j = 0; j < 15; j++) {
  showMem();
  total.push(useMem());
}
showMem();
