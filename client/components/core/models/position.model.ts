import { UserCoordinates } from './index';

export class UserPosition implements Position {
  public success: boolean;
  public coords: UserCoordinates;
  public timestamp: number;

  constructor(obj?: any) {
    this.success = obj && obj.success || false;
    this.coords = obj && new UserCoordinates(obj.coords) || null;
    this.timestamp = obj && obj.timestamp || null;
  }
}
