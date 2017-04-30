import { Application, static as ExpressStatic, Request, Response } from 'express';
import { join, resolve } from 'path';

import { IndexRouter } from './routes/index';

const ENV = process.env.NODE_ENV || 'development';
const VIEWS_DIR = resolve(__dirname, '..', 'views');
const CLIENT_ASSETS_PATH = ENV === 'production' ? resolve(__dirname, '..', '..', 'app') : resolve(__dirname, '..', '..', 'client');

export function startExpress(app: Application) {
  app.set('view engine', 'ejs');
  app.set('views', VIEWS_DIR);
  app.use( ExpressStatic(CLIENT_ASSETS_PATH) );

  if (ENV === 'development') {
    app.disable('etag');
  }

  IndexRouter(app);
}
