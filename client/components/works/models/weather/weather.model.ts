import { CurrentWeather, DailyWeather, WeatherFlags } from './index';

export class Weather {
  public latitude: number;
  public longitude: number;
  public timezone: string;
  public currently: CurrentWeather;
  public daily: DailyWeather;
  public flags: WeatherFlags;
  public offset: number;
  public success: boolean;

  constructor(obj?: any) {
    this.latitude = obj && obj.latitude || null;
    this.longitude = obj && obj.longitude || null;
    this.timezone = obj && obj.timezone || null;
    this.currently = obj && new CurrentWeather(obj.currently) || null;
    this.daily = obj && new DailyWeather(obj.daily) || null;
    this.flags = obj && new WeatherFlags(obj.flags) || null;
    this.offset = obj && obj.offset || null;
    this.success = obj && obj.success || null;
  }
}
