// docs: https://www.flickr.com/services/api/flickr.photos.search.html
export interface FlickrOptions {
  user_id?: string;
  tags?: string;
  tag_mode?: string;
  text?: string;
  min_upload_date?: string;
  max_upload_date?: string;
  min_taken_date?: string;
  max_taken_date?: string;
  license?: string;
  sort?: string;
  privacy_filter?: string;
  bbox?: string;
  accuracy?: string;
  safe_search?: string;
  content_type?: string;
  machine_tags?: string;
  machine_tag_mode?: string;
  group_id?: string;
  contacts?: string;
  woe_id?: string;
  place_id?: string;
  media?: string;
  has_geo?: string;
  geo_context?: string;
  lat?: string;
  lon?: string;
  radius?: string;
  radius_units?: string;
  is_commons?: string;
  in_gallery?: string;
  is_getty?: string;
  extras?: string;
  per_page?: string;
  page?: string;
}
