export class CurrentWeather {
  public time: number;
  public summary: string;
  public icon: string;
  public nearestStormDistance: number;
  public precipIntensity: number;
  public precipProbability: number;
  public temperature: number;
  public apparentTemperature: number;
  public dewPoint: number;
  public humidity: number;
  public pressure: number;
  public windSpeed: number;
  public windGust: number;
  public windBearing: number;
  public cloudCover: number;
  public uvIndex: number;
  public visibility: number;
  public ozone: number;

  constructor(obj?: any) {
    this.time = obj && obj.time || null;
    this.summary = obj && obj.summary || null;
    this.icon = obj && obj.icon || null;
    this.nearestStormDistance = obj && obj.nearestStormDistance || null;
    this.precipIntensity = obj && obj.precipIntensity || null;
    this.precipProbability = obj && obj.precipProbability || null;
    this.temperature = obj && obj.temperature || null;
    this.apparentTemperature = obj && obj.apparentTemperature || null;
    this.dewPoint = obj && obj.dewPoint || null;
    this.humidity = obj && obj.humidity || null;
    this.pressure = obj && obj.pressure || null;
    this.windSpeed = obj && obj.windSpeed || null;
    this.windGust = obj && obj.windGust || null;
    this.windBearing = obj && obj.windBearing || null;
    this.cloudCover = obj && obj.cloudCover || null;
    this.uvIndex = obj && obj.uvIndex || null;
    this.visibility = obj && obj.visibility || null;
    this.ozone = obj && obj.ozone || null;
  }

  public fahrenheitUnits(temp: number): string {
    return `${((temp * 9 / 5) + 32).toFixed(1)} °F`;
  }

  public celciusUnits(temp: number): string {
    return `${(temp).toFixed(1)} °C`;
  }

}
