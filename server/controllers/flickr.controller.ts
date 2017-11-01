import { NextFunction, Request, Response } from 'express';
import { parse, stringify, unescape } from 'querystring';
import * as requestLib from 'request';

import { config } from './../config/environment/config';
import { FlickrResponse } from './../config/models';

export function GetFlickrImage(req: Request, res: Response, next: NextFunction) {
  if (!req.query.tags) {
    return res.status(400).json({ error: 'Must include tags for search' });
  }

  const flickerRequestOptions = Object.assign(req.query, {
    api_key: process.env.FLICKR_API_KEY || config.keys.flickr,
    method: 'flickr.photos.search',
    format: 'json',
    nojsoncallback: '1',
  });

  const parsedflickrURL = `${config.urls.flickr}services/rest/${unescape('?')}${stringify(flickerRequestOptions)}`;

  requestLib(parsedflickrURL, (error: any, response: any, body: any) => {
    if (error) {
      return res.send({ data: error, success: false });
    }
    return res.status(response.statusCode).json({
      data: new FlickrResponse(JSON.parse(body)),
      success: response.statusCode >= 200 && response.statusCode <= 300,
    });
  });

}
