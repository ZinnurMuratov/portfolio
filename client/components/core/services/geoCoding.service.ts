import { VueResourceModel } from './../models';

export class GeoCodingService extends VueResourceModel {
  public getGeocode(address: string) {
    return this.$http.post('/api/getGeocode', null, {
      params: { address },
    }).then((data) => {
      if (!data) { return { success: false }; }
      return data.json();
    }, (err) => err);
  }
}
