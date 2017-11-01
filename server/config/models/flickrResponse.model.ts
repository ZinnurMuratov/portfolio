export class FlickrResponse {
  public photos?: FlickrPhotosResponse;
  public stat: string;

  constructor(obj?: any) {
    this.photos = obj && new FlickrPhotosResponse(obj.photos) || null;
    this.stat = obj && obj.stat || null;
  }
}

export class FlickrPhotosResponse {
  public page: number;
  public pages: number;
  public perpage: number;
  public total: number;
  public photo: FlickrPhotos[];

  constructor(obj?: any) {
    this.page = obj && obj.page || null;
    this.pages = obj && obj.pages || null;
    this.perpage = obj && obj.perpage || null;
    this.total = obj && obj.total || null;
    this.photo = obj && obj.photo.map((p) => new FlickrPhotos(p)) || [];
  }

}

export class FlickrPhotos {
  public id: string;
  public owner: string;
  public secret: string;
  public server: string;
  public farm: string;
  public title: string;
  public ispublic: string;
  public isfriend: string;
  public isfamily: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.owner = obj && obj.owner || null;
    this.secret = obj && obj.secret || null;
    this.server = obj && obj.server || null;
    this.farm = obj && obj.farm || null;
    this.title = obj && obj.title || null;
    this.ispublic = obj && obj.ispublic || null;
    this.isfriend = obj && obj.isfriend || null;
    this.isfamily = obj && obj.isfamily || null;
  }
}
