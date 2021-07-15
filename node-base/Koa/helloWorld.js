const Koa = require('koa');

const app = new Koa();


app.use(async ctx => {
  console.log('ctx', ctx);
  ctx.body = 'hello koa';
});

app.listen(3000);

