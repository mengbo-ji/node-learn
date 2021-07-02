const Koa = require('koa');
// const KoaRouter = require('koa-router');

const app = new Koa();
// const router = new KoaRouter();

// router.get('/', async (ctx, next) => {
//   console.log('/');
//   ctx.body = 'index';
//   await next();
// });

// app.use(router.routes());

const { Router } = require('./util');
const router = new Router();
router
  .get(/^\/file\/.+/, async (ctx, next) => {
    await next();
    const { path } = ctx;
    ctx.body = `get file: ${path}`;
  })
  .get(/^\/data\/.+/, async (ctx, next) => {
    await next();
    const { path } = ctx;
    ctx.body = `get data: ${path}`;
  })
  .get('./', async (ctx, next) => {
    await next();
    const { path } = ctx;
    ctx.body = `error: ${path}`;
  });


app.listen(9527);

