import { NextFunction, Request, Response } from 'express';
import { lookup } from 'geoip-lite';
import { get } from 'http';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export function GetGeolocation(req: Request, res: Response, next: NextFunction) {
  const ipAddress: string = (req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress).split(',')[0];

  const geoLocation = lookup(ipAddress); // lookup(ipAddress);

  return res.json(geoLocation);
}

export function GetWeather(req: Request, res: Response, next: NextFunction) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&appid=${WEATHER_API_KEY}`;

  return get(url, (httpRes) => {
    httpRes.on('data', (data) => {
      data = data.toString();
      return res.json(data);
    });
  }).on('error', (err) => {
    console.error(err);
    return res.json({ sucess: false });
  });

}
