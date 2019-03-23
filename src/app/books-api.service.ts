import { Booksresponse } from './booksresponse';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = 'AIzaSyB52oBdf6YJ4h3vNVFiBfB7el25hXXCUOA';

  constructor(private _http: HttpClient) { }

  getBookData(bookName): Observable<Booksresponse> {
    console.log("URL: "+this._siteURL+bookName+this._key);
    return this._http.get<Booksresponse>(this._siteURL+bookName+this._key).pipe(
      tap(data => console.log("All " +JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log("BooksApiService: " + err.message);
    return Observable.throw(err.message);
  }
}
