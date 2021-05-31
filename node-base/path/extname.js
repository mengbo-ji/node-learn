const path = require('path');

// extname方法 返回路径的拓展名（jquery.min.js 拓展名是 .js）
console.log(path.extname('jquery.min.js')); // .js
console.log(path.extname(__filename)); // .js
