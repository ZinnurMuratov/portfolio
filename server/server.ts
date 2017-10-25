import * as express from 'express';

import { config } from './config/environment/config';
import { startExpress } from './config/express';

const APP = express();

startExpress(APP);

APP.listen(config.port, () => {
  if (!config.prod) {
    console.info(`looking for revenge, @port: ${config.port}, @ENV: ${config.env}`);
  }
});
