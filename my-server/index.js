const http = require('http');
const path = require('path');
const fs = require('fs').promises;
const url = require('url');
const mime = require('mime');
const ejs = require('ejs');
const { promisify } = require('util');
const { createReadStream } = require('fs');

function mergeConfig(config) {
  return {
    port: 1234,
    directory: process.cwd(),
    ...config,
  };
}

class Server {
  constructor(config) {
    this.config = mergeConfig(config);
  }
  start() {
    const server = http.createServer(this.serverHandler.bind(this));
    server.listen(this.config.port, () => {
      console.log('服务端启动了......');
    });
  }
  async serverHandler(req, res) {
    let { pathname } = url.parse(req.url);
    pathname = decodeURIComponent(pathname);
    const absPath = path.join(this.config.directory, pathname);
    try {
      const stat = await fs.stat(absPath);
      if (stat.isFile()) {
        this.fileHandler(req, res, absPath);
      } else {
        let dirs = await fs.readdir(absPath);
        dirs = dirs.map(v => {
          return {
            path: path.join(pathname, v),
            name: v,
          };
        });
        const renderFile = promisify(ejs.renderFile);
        const parentPath = path.dirname(pathname);
        const ret = await renderFile(path.resolve(__dirname, 'template.html'), {
          arr: dirs,
          parent: pathname !== '/',
          parentPath,
          title: path.basename(pathname) || 'Index',
        });
        res.end(ret);
      }
    } catch (error) {
      this.errorHandler(req, res, error);
    }
    console.log(absPath);
  }
  errorHandler(req, res, error) {
    console.log(error);
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.end('Not Found');
  }
  fileHandler(req, res, absPath) {
    res.statusCode = 200;
    res.setHeader('Content-type', `${mime.getType(absPath)};charset=utf-8`);
    createReadStream(absPath).pipe(res);
  }
}

module.exports = Server;
