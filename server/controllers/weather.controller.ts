import { NextFunction, Request, Response } from 'express';
import * as requestLib from 'request';

import { config } from './../config/environment/config';

export function GetWeather(req: Request, res: Response, next: NextFunction) {
  if (!req.query.long || !req.query.lat) {
    return res.status(400).json({ error: 'Must include latitutde and longitude' });
  }

  const WEATHER_API_KEY: string = process.env.WEATHER_API_KEY || config.keys.weather;

  const forecastURL = `${config.urls.dark_sky}${WEATHER_API_KEY}/${req.query.lat},${req.query.long}` +
    `?exclude=hourly,minutely&units=si`;

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
