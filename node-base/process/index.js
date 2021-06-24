// title 进程名称，默认值 node，程序可以修改，可以让错误日志更清晰
console.log(process.title); // node

// pid 当前进程的pid
console.log(process.pid);

// ppid 当前父进程的ppid
console.log(process.ppid);

// platform 运行进程的操作系统（aix、drawin、freebsd、linux、openbsd、sunos、win32）
console.log(process.platform);

// version：Node版本
console.log(process.version);

// versions, 当前node运行所依赖的所有库的版本
// console.log(process.versions);

// env 当前Shell的所有环境变量
// console.log(process.env);

// 一行代码实现用户输入什么就输出什么
// process.stdin.pipe(process.stdout);
// process.stdin.resume();
// process.stdin.on('data', function(chunk) {
//   process.stdout.write('进程接收到数据: ' + chunk);
// });

// execPath: 属性返回执行当前脚本的 Node 二进制文件的绝对路径
console.log(process.execPath); // /Users/jimengbo/.nvm/versions/node/v12.18.3/bin/node
console.log(process.arch);
console.log(process.platform);
console.log(process.title);
console.log(process.uptime());
console.log(process.versions);
console.log(process.versions.node);
console.log(process.version);
