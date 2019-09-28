import Router from 'koa-router';

const router = new Router({ prefix: '/users' });

router
  .get('/', async ctx => {
    ctx.body = ['user'];
  })

  .post('/', async ctx => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
  });

export default router;
