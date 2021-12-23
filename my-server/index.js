const http = require('http');

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
  serverHandler(req, res) {
    console.log('有请求进来了');
  }
}

module.exports = Server;
