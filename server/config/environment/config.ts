import { join, resolve } from 'path';
import { keys } from './secret';

export const config = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  prod: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  views_dir: resolve(__dirname, '..', '..', 'views'),
  client_assets_path: resolve(__dirname, '..', '..', '..', 'client'),
  port: process.env.PORT ? process.env.PORT : 3000,
  keys: {
    weather: keys.weather_api,
    flickr: keys.flickr_api,
  },
  urls: {
    dark_sky: 'https://api.darksky.net/forecast/',
    flickr: 'https://api.flickr.com/',
  },
};
