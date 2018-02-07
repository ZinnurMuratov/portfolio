import * as bufferEQ from 'buffer-equal-constant-time';
import { spawn } from 'child_process';
import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { join } from 'path';

import { config } from './../config/environment/config';
import { debugLog as log } from './../config/services';

export function VerifyGithub(req: Request, res: Response, next: NextFunction) {
  log('HEADERS').debug(req.headers);
  const hubKey: string = config.keys.hubSignture;
  const ghEncryptedKey: any = req.headers['x-hub-signature'] || null;
  const encryptedKey: string = `sha1=${createHmac('sha1', hubKey).update(JSON.stringify(req.body)).digest('hex')}`;
  const bufferMatch: boolean = bufferEQ(Buffer.from(ghEncryptedKey), Buffer.from(encryptedKey));

  return bufferMatch ? next() : res.redirect('/');
}

export function RecordEvent(req: Request, res: Response, next: NextFunction) {
  const logsDirectory: string = '.logs';
  if (!existsSync(logsDirectory)) {
    mkdirSync(logsDirectory);
  }

  writeFile(`${logsDirectory}/${Date.now()}.json`, JSON.stringify(req.body, null, 2), (err) => {
    if (err) { return console.error(err); }
  });

  return next();
}

export function HandleDeploy(req: Request, res: Response, next: NextFunction) {
  if (req.body.ref && req.body.ref.includes('/heads/master')) {
    const npm = spawn('npm', ['run', config.prod ? 'rebuild' : 'buildTest'], { shell: true });
    npm.stdout.on('data', (d) => log('EXEC').debug('stdout: ' + d.toString()));
    npm.stderr.on('data', (e) => log('EXEC').error('stderr: ' + e.toString()));
    npm.on('close', (c) => log('EXEC').debug('done: ' + c.toString()));
  }

  return res.sendStatus(200);
}
