import Router from 'koa-router';

import { userManager } from '../../managers';

const router = new Router({ prefix: '/users' });

router
  .get('/', async ctx => {
    ctx.body = ['user'];
  })

  .post('/sign_up', async ctx => {
    ctx.user;
    const token = await userManager.create(ctx.request.body);
    ctx.body = { token };
  })

  .post('/sign_in', async ctx => {
    ctx.user;
    const token = await userManager.login(ctx.request.body);
    ctx.body = { token };
  });

export default router;
