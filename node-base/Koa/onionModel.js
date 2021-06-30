const compose = require('./util');

const middleware = [];

middleware.push(async (ctx, next) => {
  console.log('第1个中间件 next 前');
  await next();
  console.log('第1个中间件 next 后');
});

middleware.push(async (ctx, next) => {
  console.log('第2个中间件 next 前');
  // 中间的中间件不调用next函数 后面的中间件就不会执行
  await next();
  console.log('第2个中间件 next 后');
});

middleware.push(async (ctx, next) => {
  console.log('第3个中间件 next 前');
  await next();
  console.log('第3个中间件 next 后');
});

const ctx = {};

compose(middleware)(ctx);

