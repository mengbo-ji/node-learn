const Koa = require('koa');
const middlewares = require('koa-middlewares');

const app = new Koa();
const router = middlewares.router();

router.get('/', function *() {
  this.body = 'hello koa-middlewares';
});

app.use(middlewares.bodyParser());
app.use(middlewares.conditional());
app.use(middlewares.etag());
app.use(middlewares.compress());
middlewares.csrf(app);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
