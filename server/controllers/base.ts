import { NextFunction, Request, Response } from 'express';
import { createSitemap } from 'sitemap';
import { config } from './../config/environment/config';

export function RenderApplication(req: Request, res: Response, next: NextFunction) {
  return res.render('application');
}

export function HandleSitemap(req: Request, res: Response, next: NextFunction) {
  createSitemap({
    hostname: 'https://dannys.io',
    cacheTime: 600000,
    urls: config.spaRoutes,
  }).toXML((err: any, xml: any) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
}

export function HandleRobots(req: Request, res: Response, next: NextFunction) {
  res.type('text/plain');
  res.send(`User-agent: * \nDisallow: /api/*`);
}

export function HandleCatchall(req: Request, res: Response, next: NextFunction) {
  if (req.headers.accept && req.headers.accept.indexOf('text/html') !== -1) {
    return next();
  } else {
    return res.render('404');
  }
}

export function SendRoot(req: Request, res: Response, next: NextFunction) {
  return res.render('application');
}
