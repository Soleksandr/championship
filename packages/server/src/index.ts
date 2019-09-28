import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import router from './middlewares/routes';

const { PORT = 4444, NODE_ENV = 'development' } = process.env;

const app = new Koa();

app.env = NODE_ENV;

app.use(bodyParser());
app.use(router.routes());

app.on('error', err => {
  console.error('- Error - ', err);
});

app.listen(PORT);

console.log(`Server is running on ${PORT} port in ${app.env} mode`);
