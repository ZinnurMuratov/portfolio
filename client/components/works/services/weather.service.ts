import { VueResourceModel } from './../../core/models';

export class WeatherService extends VueResourceModel {
  public getWeather(geolocation?: GeoLocation | null) {
    const getWeatherOptions = {
      params: {
        lat: geolocation ? geolocation.lat : null,
        long: geolocation ? geolocation.long : null,
      },
      method: 'GET',
      url: '/api/getWeather',
    };

    return this.$http(getWeatherOptions).then((weatherData) => {
      if (!weatherData) { return { success: false }; }
      return weatherData.json();
    }, (err) => err);
  }
}

export interface GeoLocation {
  lat: number;
  long: number;
}
