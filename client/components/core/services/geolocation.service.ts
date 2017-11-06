import { UserPosition, VueResourceModel } from './../models';

export class GeoLocatorService extends VueResourceModel {
  public permissionBasedGeoLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location) => {
          const position: UserPosition = new UserPosition(Object.assign(location, { success: true }));
          return resolve(position);
        }, (err) => {
          return reject(Object.assign(err, { success: false }));
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
