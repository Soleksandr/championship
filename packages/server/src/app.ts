import path from 'path';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import jwt from 'koa-jwt';

import router from './middlewares/routes';
import { error } from './middlewares/error';

const { NODE_ENV = 'development', JWT_SECRET } = process.env;

const app = new Koa();

app.env = NODE_ENV;

app.use(error);
app.use(serve(path.resolve(__dirname, '..', '..', 'client', 'dist')));
app.use(bodyParser());
app.use(jwt({ secret: JWT_SECRET }).unless({ path: [/(.*)\/sign_in/, /(.*)\/sign_up/] }));
app.use(router.routes());

app.on('error', err => {
  console.error('- Error - ', err);
});

export default app;
