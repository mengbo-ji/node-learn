const path = require('path');
const compressible = require('compressible');
const mime = require('mime-types');
const accepts = require('accepts');
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const txtPath = '/node-base/http/assets/text';

const handleCache = require('./config/cache.js');

http.createServer((req, res) => {
  const { url } = req;
  const filePath = path.join(process.cwd(), txtPath, url);
  const contentType = mime.contentType(path.extname(url));
  let compression;

  if (compressible(contentType)) {
    const encodings = accepts(req).encodings();
    const serverCompatibleCompressions = [
      { method: 'gzip', stream: zlib.createGzip() },
      { method: 'deflate', stream: zlib.createDeflate() },
      { method: 'br', stream: zlib.createBrotliCompress() },
    ];

    // 按照浏览器指定优先级在服务器选择压缩方式
    for (let i = 0; i < encodings.length; i++) {
      compression = serverCompatibleCompressions.find(com => com.method === encodings[i]);
      if (compression) {
        break;
      }
    }
  }

  handleCache(req, res);

  if (res.statusCode === 304) {
    if (compression) {
      res.writeHead(200, {
        'Content-Type': contentType,
        // 指定服务器使用的压缩方式，浏览器使用对应的解压方式
        'Content-Encoding': compression.method,
      });
      fs.createReadStream(filePath).pipe(compression.stream).pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
      });
      fs.createReadStream(filePath).pipe(res);
    }
  } else {
    res.end('');
  }

}).listen(9527);
