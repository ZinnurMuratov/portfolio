import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';
import { v4 as ipV4 } from 'public-ip';

import { GeoLookupRequest } from './../config/interfaces';

export function GetGeolocation(req: GeoLookupRequest, res: Response, next: NextFunction) {
  if (req.query.lat && req.query.long) {
    return next();
  }

  ipV4().then((userIp: string) => {
    if (userIp) {
      req.geolookup = geoLookup(userIp);
    }
    return next();
  });
}
