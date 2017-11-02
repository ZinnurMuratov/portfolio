import { VueResourceModel } from './../../core/models';

export class RandomQuoteService extends VueResourceModel {
  public getQuote() {
    return this.$http.get('/api/getQuote').then((data) => {
      if (!data) { return { success: false }; }
      return data.json();
    }, (err) => err);
  }
}
