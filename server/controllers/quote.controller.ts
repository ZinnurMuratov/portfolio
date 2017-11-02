import { NextFunction, Request, Response } from 'express';
import * as requestLib from 'request';

import { config } from './../config/environment/config';

export function GetRandomQuote(req: Request, res: Response, next: NextFunction) {
  requestLib(config.urls.talaikis, { json: true }, (err: any, response: requestLib.RequestResponse, body: any) => {
    if (err) { return res.send({ data: err, success: false }); }
    return res.status(response.statusCode).json({
      data: body,
      success: response.statusCode >= 200 && response.statusCode <= 300,
    });
  });
}
