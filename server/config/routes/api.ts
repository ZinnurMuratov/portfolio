import { Router } from 'express';

import {
  GetFlickrImage, GetGeolocation, GetRandomQuote, GetWeather,
} from './../../controllers';

const API_ROUTES = Router();

API_ROUTES.get('/geoLocation', GetGeolocation);
API_ROUTES.get('/getWeather', GetWeather);
API_ROUTES.get('/getImages', GetFlickrImage);
API_ROUTES.get('/getQuote', GetRandomQuote);

export default API_ROUTES;
