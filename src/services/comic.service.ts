import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comic } from '../models/comic';

@Injectable()
export class ComicService {
  private comicsUrl = 'http://gateway.marvel.com/v1/public/comics';  // URL to web api
  private comicsApiKey = '657e820baddaed7c4b951854ca8aaccd&hash=9998ee47210a7a315608fc37f89874e7&ts=1';
  constructor(private http: Http) { }

  getComics(): Promise<Comic[]> {
    const url = `${this.comicsUrl}?apikey=${this.comicsApiKey}`;
    return this.http.get(`${this.comicsUrl}?apikey=${this.comicsApiKey}`)
               .toPromise()
               .then(response => response.json().data.results as Comic[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getComic(id: number): Promise<Comic> {
    const url = `${this.comicsUrl}/${id}?apikey=${this.comicsApiKey}`
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data.results as Comic)
      .catch(this.handleError);
  }
}