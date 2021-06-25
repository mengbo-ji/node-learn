
const fs = require('fs');
const path = require('path');
const etag = require('etag');

const { root, maxAge, enableEtag, enableLastModified } = require('./static-server-config');

function handleCache(req, res) {
  if (maxAge) {
    res.setHeader('Cache-Control', `max-age=${maxAge}`);
  }

  if (!enableEtag & !enableLastModified) {
    res.statusCode = 200;
  }

  const { url, headers } = req;
  const filePath = path.join(root, url);

  if (enableEtag) {
    const reqEtag = headers['if-none-match'];
    const resEtag = etag(fs.readFileSync(filePath));
    res.setHeader('Etag', resEtag);
    res.statusCode = reqEtag === resEtag ? 304 : 200;
  }

  if (enableLastModified) {
    const reqLastModified = headers['if-modified-since'];
    const mtime = fs.statSync(filePath).mtime.toUTCString();
    res.setHeader('Last-Modified', mtime);
    res.statusCode = reqLastModified === mtime ? 304 : 200;
  }
}

module.exports = handleCache;
