import { NextFunction, Request, Response } from 'express';
import * as requestLib from 'request';

import { config } from './../config/environment/config';
import { GeoLookup, GeoLookupRequest } from './../config/interfaces';

const WEATHER_API_KEY: string = process.env.WEATHER_API_KEY || config.keys.weather;
const forecastURL = (lat: string | number, long: string | number): string => {
  return `${config.urls.dark_sky}${WEATHER_API_KEY}/${lat},${long}?exclude=hourly,minutely&units=si`;
};

export function GetWeather(req: GeoLookupRequest, res: Response, next: NextFunction) {
  const geolookup: GeoLookup = req.geolookup;
  const coordinates: Coordinates = {
    lat: geolookup ? geolookup.ll[0] : req.query.lat || null,
    long: geolookup ? geolookup.ll[1] : req.query.long || null,
  };

  if (!coordinates.lat || !coordinates.long) {
    return res.status(400).json({ error: 'Coordintates are incorrect' });
  }

  requestLib(forecastURL(coordinates.lat, coordinates.long), {
    json: true,
  }, (error: any, response: any, body: any) => {
    const load: any = {
      data: null,
      success: false,
      geolookup: geolookup ? geolookup : null,
    };

    if (error) {
      load.data = error;
      return res.send(load);
    }

    load.data = body;
    load.success = response.statusCode >= 200 && response.statusCode <= 300;
    return res.status(response.statusCode).json(load);
  });
}

export interface Coordinates {
  lat: string | number;
  long: string | number;
}
