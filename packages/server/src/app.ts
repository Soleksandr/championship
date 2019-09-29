import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import router from './middlewares/routes';

const { NODE_ENV = 'development' } = process.env;

const app = new Koa();

app.env = NODE_ENV;

app.use(bodyParser());
app.use(router.routes());

app.on('error', err => {
  console.error('- Error - ', err);
});

export default app;
