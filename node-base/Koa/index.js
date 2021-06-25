const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log('一次请求的时间: ', ms);
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.use(async (ctx, next) => {
  console.log(5);
  next();
  console.log(6);
});

app.listen(9527);


require('./onionModel.js');
