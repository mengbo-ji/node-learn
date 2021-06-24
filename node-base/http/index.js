const http = require('http');

http.createServer((req, res) => {
  const { url, method, headers } = req;
  res.setHeader('content-type', 'text/html');

  res.write(`请求 URL: ${url}\n`);
  res.write(`请求方法: ${method}\n`);
  res.write(`请求 headers：${JSON.stringify(headers, null, '  ')}`);

  res.end('\n');

})
  .listen(9527, () => {
    console.log('Web Server started at port 9527');
  });
