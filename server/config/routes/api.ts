import { Router } from 'express';

import {
  GetFlickrImage,
  GetGeocode,
  GetGeolocation,
  GetRandomQuote,
  GetWeather,
} from './../../controllers';

const API_ROUTES = Router();

API_ROUTES.post('/getGeocode', GetGeocode);
API_ROUTES.get('/getWeather', GetGeolocation, GetWeather);
API_ROUTES.get('/getImages', GetFlickrImage);
API_ROUTES.get('/getQuote', GetRandomQuote);

export default API_ROUTES;
