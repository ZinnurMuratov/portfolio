export class DailyWeatherData {
  public time: number;
  public summary: string;
  public icon: string;
  public sunriseTime: number;
  public sunsetTime: number;
  public moonPhase: number;
  public precipIntensity: number;
  public precipIntensityMax: number;
  public precipIntensityMaxTime: number;
  public precipProbability: number;
  public precipAccumulation: number;
  public precipType: string;
  public temperatureHigh: number;
  public temperatureHighTime: number;
  public temperatureLow: number;
  public temperatureLowTime: number;
  public apparentTemperatureHigh: number;
  public apparentTemperatureHighTime: number;
  public apparentTemperatureLow: number;
  public apparentTemperatureLowTime: number;
  public dewPoint: number;
  public humidity: number;
  public pressure: number;
  public windSpeed: number;
  public windGust: number;
  public windGustTime: number;
  public windBearing: number;
  public cloudCover: number;
  public uvIndex: number;
  public uvIndexTime: number;
  public visibility: number;
  public ozone: number;
  public temperatureMin: number;
  public temperatureMinTime: number;
  public temperatureMax: number;
  public temperatureMaxTime: number;
  public apparentTemperatureMin: number;
  public apparentTemperatureMinTime: number;
  public apparentTemperatureMax: number;
  public apparentTemperatureMaxTime: number;

  constructor(obj?: any) {
    this.time = obj && obj.time || null;
    this.summary = obj && obj.summary || null;
    this.icon = obj && obj.icon || null;
    this.sunriseTime = obj && obj.sunriseTime || null;
    this.sunsetTime = obj && obj.sunsetTime || null;
    this.moonPhase = obj && obj.moonPhase || null;
    this.precipIntensity = obj && obj.precipIntensity || null;
    this.precipIntensityMax = obj && obj.precipIntensityMax || null;
    this.precipIntensityMaxTime = obj && obj.precipIntensityMaxTime || null;
    this.precipProbability = obj && obj.precipProbability || null;
    this.precipAccumulation = obj && obj.precipAccumulation || null;
    this.precipType = obj && obj.precipType || null;
    this.temperatureHigh = obj && obj.temperatureHigh || null;
    this.temperatureHighTime = obj && obj.temperatureHighTime || null;
    this.temperatureLow = obj && obj.temperatureLow || null;
    this.temperatureLowTime = obj && obj.temperatureLowTime || null;
    this.apparentTemperatureHigh = obj && obj.apparentTemperatureHigh || null;
    this.apparentTemperatureHighTime = obj && obj.apparentTemperatureHighTime || null;
    this.apparentTemperatureLow = obj && obj.apparentTemperatureLow || null;
    this.apparentTemperatureLowTime = obj && obj.apparentTemperatureLowTime || null;
    this.dewPoint = obj && obj.dewPoint || null;
    this.humidity = obj && obj.humidity || null;
    this.pressure = obj && obj.pressure || null;
    this.windSpeed = obj && obj.windSpeed || null;
    this.windGust = obj && obj.windGust || null;
    this.windGustTime = obj && obj.windGustTime || null;
    this.windBearing = obj && obj.windBearing || null;
    this.cloudCover = obj && obj.cloudCover || null;
    this.uvIndex = obj && obj.uvIndex || null;
    this.uvIndexTime = obj && obj.uvIndexTime || null;
    this.visibility = obj && obj.visibility || null;
    this.ozone = obj && obj.ozone || null;
    this.temperatureMin = obj && obj.temperatureMin || null;
    this.temperatureMinTime = obj && obj.temperatureMinTime || null;
    this.temperatureMax = obj && obj.temperatureMax || null;
    this.temperatureMaxTime = obj && obj.temperatureMaxTime || null;
    this.apparentTemperatureMin = obj && obj.apparentTemperatureMin || null;
    this.apparentTemperatureMinTime = obj && obj.apparentTemperatureMinTime || null;
    this.apparentTemperatureMax = obj && obj.apparentTemperatureMax || null;
    this.apparentTemperatureMaxTime = obj && obj.apparentTemperatureMaxTime || null;
  }

}

export class DailyWeather {
  public data: DailyWeatherData[];
  public summary?: string;
  public icon?: string;

  constructor(obj?: any) {
    this.summary = obj && obj.summary || null;
    this.icon = obj && obj.icon || null;
    this.data = obj && obj.data.map((d: DailyWeatherData) => new DailyWeatherData(d)) || null;
  }
}
