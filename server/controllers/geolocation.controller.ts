import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';

import { GeoLookupRequest } from './../config/interfaces';

export function GetGeolocation(req: GeoLookupRequest, res: Response, next: NextFunction) {
  if (req.query.lat && req.query.long) {
    return next();
  }

  if (req.clientIP) {
    req.geolookup = geoLookup(req.clientIP);
  }
  return next();
}
