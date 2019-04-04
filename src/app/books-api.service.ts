import { IBooksResponse } from './ibooksresponse';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyB52oBdf6YJ4h3vNVFiBfB7el25hXXCUOA';

  constructor(private _http: HttpClient) { }

  getBookData(bookName): Observable<IBooksResponse> {
    console.log("URL: "+this._siteURL+bookName+this._key);
    return this._http.get<IBooksResponse>(this._siteURL+bookName+this._key).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log("BooksApiService: " + err.message);
    return Observable.throw(err.message);
  }
}
