import * as bufferEQ from 'buffer-equal-constant-time';
import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
import { config } from './../config/environment/config';

export function VerifyGithub(req: Request, res: Response, next: NextFunction) {
  const hubKey: string = config.keys.hubSignture;
  const ghEncryptedKey: string = req.headers['x-hub-signature'] || null;
  const encryptedKey: string = `sha1=${createHmac('sha1', hubKey).update(JSON.stringify(req.body)).digest('hex')}`;
  const bufferMatch: boolean = bufferEQ(Buffer.from(ghEncryptedKey), Buffer.from(encryptedKey));

  return bufferMatch ? next() : res.redirect('/');
}

export function HandleDeploy(req: Request, res: Response, next: NextFunction) {
  return res.sendFile(join(__dirname, '..', 'scripts', 'deploy.php'));
}
