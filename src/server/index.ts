import Koa from 'koa';

const {
  PORT = 4444,
  NODE_ENV = 'development'
} = process.env;

const app = new Koa();

app.env = NODE_ENV;

app.use(async ctx => {
  ctx.body = { isServerRunning: true };
});

app.on('error', (err) => {
  console.error('- Error - ', err);
});

app.listen(PORT);

console.log(`Server is running on ${PORT} port in ${app.env} mode`);
