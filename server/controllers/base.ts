import { NextFunction, Request, Response } from 'express';

export function RenderApplication(req: Request, res: Response, next: NextFunction) {
  return res.render('application');
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
