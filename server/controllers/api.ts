import { NextFunction, Request, Response } from 'express';
import { lookup as geoLookup } from 'geoip-lite';
import { get } from 'https';
import { address as selfIP } from 'ip';
import { URL } from 'url';

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
  const forecastURL = new URL(`https://api.darksky.net/forecast/${WEATHER_API_KEY}/${req.query.lat},${req.query.long}`);

  return get({
    hostname: forecastURL.hostname,
    path: forecastURL.pathname,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }, (getRes) => {
    getRes.setEncoding('utf8');
    const resChunks = [];

    getRes.on('data', (data) => {
      resChunks.push(data);
    });

    getRes.on('end', () => {
      const json = JSON.parse(resChunks.toString());
      return res.send(json);
    });

    getRes.on('error', (error) => {
      return res.send(error);
    });
  });
}
