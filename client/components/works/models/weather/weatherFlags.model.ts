export class WeatherFlags {
  public sources: string[];
  public 'isd-stations': string[];
  public units: string;

  constructor(obj?: any) {
    this.sources = obj && obj.sources.map((s: string) => s) || [];
    this['isd-stations'] = obj && obj['isd-stations'].map((s: string) => s) || [];
    this.units = obj && obj.units || null;
  }
}
