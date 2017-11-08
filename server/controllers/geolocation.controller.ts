import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';
import { v4 as ipV4 } from 'public-ip';

import { GeoLookupRequest } from './../config/interfaces';

export function GetGeolocation(req: GeoLookupRequest, res: Response, next: NextFunction) {
  if (req.query.lat && req.query.long) {
    return next();
  }

  // req.geolookup = geoLookup('205.186.0.10');
  // return next();
  ipV4().then((userIp: string) => {
    if (userIp) {
      console.log('userIp:', userIp);
      req.geolookup = geoLookup(userIp);
    }
    return next();
  }).catch((e: any) => next());
}
