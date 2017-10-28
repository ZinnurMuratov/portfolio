import { Weather } from './weather';

export class WeatherData {
  public success: boolean;
  public data: Weather;

  constructor(obj?: any) {
    this.success = obj && obj.success || false;
    this.data = obj && new Weather(obj.data) || null;
  }

}
