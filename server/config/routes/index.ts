import { Application, Router } from 'express';

import baseRouter from './base';

export function IndexRouter(app: Application){
  const router = Router();

  app.use('/', baseRouter);
}
