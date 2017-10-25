import * as compression from 'compression';
import { Application, Request, Response, static as ExpressStatic } from 'express';

import { config } from './environment/config';
import { IndexRouter } from './routes/index';

export function startExpress(app: Application) {
  app.set('view engine', 'ejs');
  app.set('views', config.views_dir);
  app.use(ExpressStatic(config.client_assets_path));

  if ( !config.prod) {
    app.disable('etag');
  }

  if (config.prod) {
    app.use(compression());
  }

  IndexRouter(app);
}
