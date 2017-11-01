import { Router } from 'express';

import { GetFlickrImage, GetGeolocation, GetWeather } from './../../controllers';

const API_ROUTES = Router();

API_ROUTES.get('/geoLocation', GetGeolocation);
API_ROUTES.get('/getWeather', GetWeather);
API_ROUTES.get('/getImages', GetFlickrImage);

export default API_ROUTES;
