// 初识 Stream
const fs = require('fs');
const zlib = require('zlib');
const rns = fs.createReadStream('./transform/ex.txt');
const z = zlib.createGzip();
const wns = fs.createWriteStream('./test.txt.gz');

rns.pipe(z).pipe(wns);
