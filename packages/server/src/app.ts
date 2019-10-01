import path from 'path';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

import router from './middlewares/routes';

const { NODE_ENV = 'development' } = process.env;

const app = new Koa();

app.env = NODE_ENV;

app.use(serve(path.resolve(__dirname, '..', '..', 'public')));
app.use(bodyParser());
app.use(router.routes());

app.on('error', err => {
  console.error('- Error - ', err);
});

export default app;
