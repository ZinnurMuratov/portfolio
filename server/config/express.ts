import { Application, Request, Response, static as ExpressStatic } from 'express';
import * as morgan from 'morgan';
import { join, resolve } from 'path';

import { IndexRouter } from './routes/index';

const ENV = process.env.NODE_ENV || 'development';
const VIEWS_DIR = resolve(__dirname, '..', 'views');
const CLIENT_ASSETS_PATH = resolve(__dirname, '..', '..', 'client');

export function startExpress(app: Application) {
  app.enable('trust proxy');
  app.set('view engine', 'ejs');
  app.set('views', VIEWS_DIR);
  app.use(ExpressStatic(CLIENT_ASSETS_PATH));

  if (ENV === 'production') {
    app.use(morgan('common'));
  } else {
    app.disable('etag');
    app.use(morgan('dev'));
  }

  IndexRouter(app);
}
