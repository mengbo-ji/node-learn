const http = require('http');

http.createServer((req, res) => {
  res.write('hello word');
  res.end();
})
  .listen(9527, () => {
    console.log('server start ......');
  });
