#!/usr/bin/env node
const { program } = require('commander');
const { version } = require('../package.json');

// 配置信息
const options = {
  '-p --port <dir>': {
    description: 'init server port',
    example: 'my-server -p 1234',
  },
  '-d --directory <dir>': {
    description: 'init server directory',
    example: 'my-server -d c:',
  },
};

function formatConfig(configs, cb) {
  Object.entries(configs).forEach(([ key, value ]) => cb(key, value));
}

formatConfig(options, (cmd, val) => {
  program.option(cmd, val.description);
});

program.on('help', () => {
  console.log('Example: ');
  formatConfig(options, (cmd, val) => {
    console.log(val.example);
  });
});

program.version(version);
const cmdConfig = program.parse(process.argv);

const Server = require('../index');

new Server(cmdConfig).start();
