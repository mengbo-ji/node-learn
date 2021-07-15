const path = require('path');
const Koa = require('koa');
const staticServer = require('koa-static');


const app = new Koa();
const root = path.join(__dirname, './public');

app.use(staticServer(root, {}));

app.listen(3000);
