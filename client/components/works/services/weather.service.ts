import { VueResourceModel } from './../../core/models';

export class WeatherService extends VueResourceModel {
  // make this call dependent on geolocation
  public getWeather(geolocation: GeoLocation) {
    const getWeatherOptions = {
      params: {
        lat: geolocation.lat,
        long: geolocation.long,
      },
      method: 'GET',
      url: '/api/getWeather',
    };

    return this.$http(getWeatherOptions).then((weatherData) => {
      if (!weatherData) { return { success: false }; }
      return weatherData.json();
    }, (err) => {
      return err;
    });
  }
}

export interface GeoLocation {
  lat: number;
  long: number;
}
