import { Request } from 'express';

export interface GeoLookupRequest extends Request {
  geolookup: GeoLookup;
  clientIP: string;
}

export interface GeoLookup {
  range: number[];
  country: string;
  region: string;
  city: string;
  ll: number[]; // [0]: latitute [1]: longitude
  metro?: number;
  zip?: number;
}
