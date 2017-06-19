import * as express from 'express';

import { startExpress } from './config/express';

const APP = express();
const PORT = process.env.PORT ||  3000;
const ENV  = process.env.NODE_ENV || 'development';

startExpress(APP);

APP.listen(PORT, () => {
  console.log(`looking for revenge, @port: ${PORT}, @ENV: ${ENV}`);
});
