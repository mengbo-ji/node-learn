const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router.get('/', async (ctx, next) => {
  console.log('/');
  ctx.body = 'index';
  await next();
});

app.use(router.routes());

app.listen(9527);

