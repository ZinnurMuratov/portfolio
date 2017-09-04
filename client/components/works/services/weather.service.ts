import { VueResourceModel } from './../../core/models';
import { GeoLocatorService } from './../../core/services';

export class WeatherService extends VueResourceModel {
  private geolocationService = new GeoLocatorService();

  public getWeather() {
    return this.geolocationService.getLocation().then((res) => {
      if (!res) { return null; }

      const getWeatherOptions = {
        params: {
          lat: res.ll[0],
          long: res.ll[1],
        },
        method: 'GET',
        url: '/api/getWeather',
      };

      return this.$http(getWeatherOptions).then((weatherData) => {
        if (!weatherData) { return null; }
        return weatherData.json();
      }, (err) => {
        return err;
      });

    });
  }
}

export interface GeoLocation {
  lat: number;
  long: number;
}
