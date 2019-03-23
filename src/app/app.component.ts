import { IBooksResponse } from './ibooksresponse';
import { BooksApiService } from './books-api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookData: IBooksResponse;
  errorMessage:string;

  constructor(private _booksService: BooksApiService){

  }

  getBookDetails(bookName: string): boolean {
    this._booksService.getBookData(bookName).subscribe(bookData => {
      this.bookData = bookData;

      this.bookData.items.forEach(book => 
        console.log('getBookDetails: ' + book.volumeInfo.title));
    },
      error => this.errorMessage = <any>error);
    return false;
  }


}
