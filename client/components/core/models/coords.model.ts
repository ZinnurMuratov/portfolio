export class UserCoordinates implements Coordinates {
  public accuracy: number;
  public altitude: number | null;
  public altitudeAccuracy: number | null;
  public heading: number | null;
  public latitude: number;
  public longitude: number;
  public speed: number | null;

  constructor(obj?: any) {
    this.accuracy = obj && obj.accuracy || null;
    this.altitude = obj && obj.altitude || null;
    this.altitudeAccuracy = obj && obj.altitudeAccuracy || null;
    this.heading = obj && obj.heading || null;
    this.latitude = obj && obj.latitude || null;
    this.longitude = obj && obj.longitude || null;
    this.speed = obj && obj.speed || null;
  }
}
