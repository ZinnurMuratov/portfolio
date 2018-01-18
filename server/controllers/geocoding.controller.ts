import { NextFunction, Request, Response } from 'express';
import * as requestLib from 'request';

import { config } from './../config/environment/config';

export function GetGeocode(req: Request, res: Response, next: NextFunction) {
  const formattedAddress = req.query.address.trim().replace(' ', '+');
  const geocodeRequestUrl = `${config.urls.geocode}${formattedAddress}&key=${config.keys.gGeocode}`;

  requestLib(geocodeRequestUrl, (error: any, respose: any, body: any) => {
    if (error) {
      return res.send({ data: error, success: false });
    }
    return res.status(respose.statusCode).json({
      data: JSON.parse(body),
      success: respose.statusCode >= 200 && respose.statusCode <= 300,
    });
  });
}
