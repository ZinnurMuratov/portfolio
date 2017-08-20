import { VueResourceModel } from './../../core/models';
import { GeoLocatorService } from './../../core/services';

export class WeatherService extends VueResourceModel {
  private geolocation: GeoLocation;
  private geolocationError: any;
  private geolocationService = new GeoLocatorService();

  public getWeather() {
    return this.geolocationService.getLocation().then((res) => {
      if (!res) { // needs: fix
        this.geolocationService.permissionBasedGeoLocation().then((res) => {
          this.geolocation = res;
        }).catch((err) => {
          this.geolocationError = err;
        });
      } else {
        this.geolocation = {
          lat: res.ll[0],
          long: res.ll[1],
        };
      }

      const getWeatherOptions = {
        params: this.geolocation,
        method: 'GET',
        url: '/api/getWeather',
      };

      return this.$http(getWeatherOptions).then((res) => {
        return res.json();
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