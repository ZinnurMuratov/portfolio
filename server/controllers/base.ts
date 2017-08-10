import { NextFunction, Request, Response } from 'express';

export function RenderApplication(req: Request, res: Response, next: NextFunction) {
  return res.render('application');
}

export function CatchAll(req: Request, res: Response, next: NextFunction) {
  return res.render('application');
}
