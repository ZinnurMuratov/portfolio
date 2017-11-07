import * as compression from 'compression';
import { Application, Request, Response, static as ExpressStatic } from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { join, resolve } from 'path';

import { config } from './environment/config';
import { IndexRouter } from './routes/index';

export function startExpress(app: Application) {
  app.enable('trust proxy');
  app.set('view engine', 'ejs');

  if (!config.prod) {
    app.disable('etag');
    app.use(morgan('dev'));
  }

  if (config.prod) {
    app.use(helmet());
    app.use(compression());
    app.use(morgan('common'));
  }

  app.set('views', config.views_dir);
  app.use('/', ExpressStatic(config.client_assets_path));

  IndexRouter(app);
}
