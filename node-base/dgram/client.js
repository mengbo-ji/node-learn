const dgram = require('dgram');

const message = new Buffer('深入浅出Node.js');
const client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 41234, 'localhost', function() {
  client.close();
});
