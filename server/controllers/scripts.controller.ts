import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
import { config } from './../config/environment/config';

export function HandleDeploy(req: Request, res: Response, next: NextFunction) {
  const hubSignature = config.keys.hubSignture;

  if (req.headers['x-hub-signature'] === hubSignature) {
    return res.sendFile(join(__dirname, '..', 'scripts', 'deploy.php'));
  } else {
    return res.redirect('/');
  }
}
