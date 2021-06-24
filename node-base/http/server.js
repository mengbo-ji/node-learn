const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const mimeTypes = require('mime-types');

// const IMG_PATH = './assets/img';
// const VIDEO_PATH = './assets/video';

const server = http.createServer((req, res) => {
  // const imgPath = path.join(IMG_PATH, req.url);
  // fs.readFile(imgPath, (err, chunk) => {
  //   if (err) {
  //     res.writeHead(404, {
  //       'content-type': 'text/html',
  //     });
  //     res.end('文件不存在');
  //   } else {
  //     res.writeHead(200, {
  //       'content-type': mimeTypes.contentType(path.extname(req.url)),
  //     });
  //     res.end(chunk);
  //   }
  // });

  // const videoPath = path.join(VIDEO_PATH, req.url);
  // fs.access(videoPath, fs.constants.R_OK, err => {
  //   if (err) {
  //     res.writeHead(404, {
  //       'content-type': 'text/html',
  //     });
  //     res.end('<html><body><h1>Hello, World!</h1></body></html>');
  //   } else {
  //     res.writeHead(200, {
  //       'content-type': mimeTypes.contentType(path.extname(req.url)),
  //     });
  //     fs.createReadStream(videoPath).pipe(res);
  //   }
  // });

  if (req.method === 'GET' && req.url === '/demo') {
    // let body = [];
    // req.on('data', chunk => {
    //   body.push(chunk);
    // });
    // req.on('end', () => {
    //   body = Buffer.concat(body).toString();
    //   res.setHeader('Content-Type', 'application/json');
    //   res.end(body);
    // });
    req.on('error', err => {
      console.error(err);
      res.statusCode = 400;
      res.end();
    });
    req.on('error', err => {
      console.error(err);
    });
    res.setHeader('Content-type', 'text/html');
    res.write('<span>123</span>');
    req.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }

});

server.listen(9527, () => {
  console.log('Web Server started at port 9527');
});
