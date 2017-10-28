import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';
import { address as selfIP } from 'ip';
import * as requestLib from 'request';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export function GetGeolocation(req: Request, res: Response, next: NextFunction) {
  const clientIP: string = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  const IP_ADDRESS = process.env.NODE_ENV === 'production' ? clientIP : selfIP();
  return res.json(geoLookup(IP_ADDRESS));
}

export function GetWeather(req: Request, res: Response, next: NextFunction) {
  if (!req.query.long || !req.query.lat) {
    return res.status(400).json({ error: 'Must include latitutde and longitude' });
  }

  const forecastURL = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${req.query.lat},${req.query.long}?exclude=hourly,minutely`;

  requestLib(forecastURL, { json: true }, (error: any, response: any, body: any) => {
    if (error) {
      return res.send({ data: error, success: false });
    }
    return res.status(response.statusCode).json({
      data: body,
      success: response.statusCode >= 200 && response.statusCode <= 300,
    });
  });
}
