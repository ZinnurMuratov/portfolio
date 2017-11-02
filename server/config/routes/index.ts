import { Application, Router } from 'express';

import { HandleCatchall, SendRoot } from './../../controllers';
import apiRouter from './api';
import baseRouter from './base';

export function IndexRouter(app: Application) {
  const router = Router();

  app.use('/api', apiRouter);
  app.use('/', baseRouter);

  router.route('*').get(HandleCatchall, SendRoot);
  app.use('', router);
}
