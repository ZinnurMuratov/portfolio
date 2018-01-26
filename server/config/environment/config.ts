import { join, resolve } from 'path';

const clientRoutes = require('./clientRoutes.json').routes;
import { keys } from './secret';

export const config = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  prod: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  views_dir: resolve(__dirname, '..', '..', 'views'),
  client_assets_path: resolve(__dirname, '..', '..', '..', 'client'),
  spaRoutes: clientRoutes,
  port: process.env.PORT ? process.env.PORT : 3000,
  keys: {
    weather: keys.weather_api,
    flickr: keys.flickr_api,
    gGeocode: keys.geocode,
    hubSignture: keys.hubSignature,
  },
  urls: {
    // https://darksky.net/dev/account
    dark_sky: 'https://api.darksky.net/forecast/',
    // https://www.flickr.com/services/api/
    flickr: 'https://api.flickr.com/',
    // http://quotes.stormconsultancy.co.uk/api
    quotes: 'http://quotes.stormconsultancy.co.uk/quotes/',
    // https://developers.google.com/maps/documentation/geocoding/start
    geocode: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
  },
};
