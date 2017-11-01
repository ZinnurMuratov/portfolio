import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';
import { address as selfIP } from 'ip';

export function GetGeolocation(req: Request, res: Response, next: NextFunction) {
  const clientIP: string = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  const IP_ADDRESS: string = process.env.NODE_ENV === 'production' ? clientIP : selfIP();
  return res.json(geoLookup(IP_ADDRESS));
}
