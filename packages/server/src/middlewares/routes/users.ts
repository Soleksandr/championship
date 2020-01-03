import Router from 'koa-router';

import { userManager } from '../../managers';

const router = new Router({ prefix: '/users' });

router
  .get('/', async ctx => {
    ctx.body = ['user'];
  })

  .post('/', async ctx => {
    ctx.user;
    const email = await userManager.create(ctx.request.body);
    console.log('========================================= ', email);
    ctx.body = { email };
  });

export default router;
