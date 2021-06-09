const fs = require('fs');

const rs = fs.createReadStream('./w.js');
const ws = fs.createWriteStream('./w-copy.js');

rs.on('data', chunk => {
  ws.write(chunk);
});
