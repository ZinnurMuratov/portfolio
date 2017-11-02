import { VueResourceModel } from './../../core/models';

export class FlickrService extends VueResourceModel {
  public getImages(searchOptions?: any) {
    return this.$http.get('/api/getImages', {
      params: searchOptions,
    }).then((imagesData) => {
      if (!imagesData) { return { success: false }; }
      return imagesData.json();
    }, (err) => err);
  }
}
