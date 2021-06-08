const fs = require('fs');

const rs = fs.createReadStream('./a.txt');
const ws = fs.createWriteStream('./copyA.txt');

rs.pipe(ws);

// process.stdin.pipe(process.stdout);
