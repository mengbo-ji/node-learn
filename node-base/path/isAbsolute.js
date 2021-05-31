const path = require('path');

// isAbsolute 检测路径是否是绝对路径
console.log(path.isAbsolute(__dirname)); // true
console.log(path.isAbsolute('./c')); // false
