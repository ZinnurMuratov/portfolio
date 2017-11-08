import { Application, Router } from 'express';

import { HandleCatchall, HandleRobots, HandleSitemap, SendRoot } from './../../controllers';
import apiRoutes from './api';
import baseRoutes from './base';

export function IndexRouter(app: Application) {
  const router = Router();

  app.use('/robots.txt', HandleRobots);
  app.use('/sitemap.xml', HandleSitemap);

  app.use('/api', apiRoutes);
  app.use('/', baseRoutes);

  router.route('*').get(HandleCatchall, SendRoot);
  app.use('', router);
}
