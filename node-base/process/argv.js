
// 1.process.argv[0]执行当前脚本的 Node 二进制文件的绝对路径
// 2.process.argv[1]当前执行文件绝对路径

console.log('argv', process.argv);

// process.execArgv 属性返回一个数组，成员是命令行下执行脚本时，在 Node 可执行文件与脚本文件之间的命令行参数

// node --inspect node-base/process/argv.js
console.log(process.execArgv); // [ '--inspect' ]
