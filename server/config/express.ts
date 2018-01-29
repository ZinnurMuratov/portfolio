import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { Application, Request, Response, static as ExpressStatic } from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { join, resolve } from 'path';
import * as prerender from 'prerender-node';
import * as requestIp from 'request-ip';

import { config } from './environment/config';
import { IndexRouter } from './routes/index';

export function startExpress(app: Application) {
  app.set('trust proxy', (ip: string) => ip === '127.0.0.1' || ip === '123.123.123.123');
  app.set('view engine', 'ejs');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(requestIp.mw({ attributeName: 'clientIP' }));
  if (!config.prod) {
    app.disable('etag');
    app.use(morgan('dev'));
  }

  if (config.prod) {
    app.use(helmet());
    app.use(compression());
    app.use(morgan('common'));
    app.use(prerender);
  }

  app.set('views', config.views_dir);
  app.use('/', ExpressStatic(config.client_assets_path));

  IndexRouter(app);
}
