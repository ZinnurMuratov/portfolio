import { VueResourceModel } from './../models';

export class GeoLocatorService extends VueResourceModel {

  public getLocation() {
    return this.$http.get('/api/geoLocation').then((res) => {
      return res.json();
    }, (err) => {
      return err;
    });
  }

  public permissionBasedGeoLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location) => {
          console.log('get current', location);
          return resolve(location);
        }, (err) => {
          return reject(err);
        }, {
            enableHighAccuracy: true,
            timeout: 5500,
            maximumAge: 0,
          },
        );
      } else {
        return reject({ success: false });
      }
    });
  }

}
