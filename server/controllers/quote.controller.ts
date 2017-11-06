import { NextFunction, Request, Response } from 'express';
import * as requestLib from 'request';

import { config } from './../config/environment/config';

export function GetRandomQuote(req: Request, res: Response, next: NextFunction) {
  const randomNumber: number = Math.floor(Math.random() * 43) + 1; // avoids id of 0

  requestLib(`${config.urls.quotes}${randomNumber}.json`, {
    json: true,
  }, (err: any, response: requestLib.RequestResponse, body: any) => {
    if (err) { return res.send({ data: err, success: false }); }
    return res.status(response.statusCode).json({
      data: body,
      success: response.statusCode >= 200 && response.statusCode <= 300,
    });
  });
}
