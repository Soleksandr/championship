import path from 'path';
import fs from 'fs';
import Router from 'koa-router';
import users from './users';

const router = new Router();

router.use('/api', users.routes());
router.get('*', async ctx => {
  ctx.response.set('Content-Type', 'text/html');
  ctx.body = fs.readFileSync(path.resolve(__dirname, '..', '..', '..', '..', 'public', 'index.html'));
});

export default router;
