import { Router } from 'express';

import { GetGeolocation, GetWeather } from './../../controllers';

const API_ROUTES = Router();

API_ROUTES.get('/geoLocation', GetGeolocation);
API_ROUTES.get('/getWeather', GetWeather);

export default API_ROUTES;
