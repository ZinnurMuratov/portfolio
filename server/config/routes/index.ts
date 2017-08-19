import { Application, Router } from 'express';

import * as baseController from './../../controllers/base';
import baseRouter from './base';

export function IndexRouter(app: Application) {
  const router = Router();

  app.use('/', baseRouter);

  router.route('*').get(baseController.HandleCatchall, baseController.SendRoot);
  app.use('', router);
}
