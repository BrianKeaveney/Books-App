import { Booksresponse } from './ibooksresponse';
import { BooksApiService } from './books-api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookData;
  errorMessage:string;

  constructor(private _booksService: BooksApiService){

  }

  getBookDetails(bookName: string): boolean {
    this._booksService.getBookData(bookName).subscribe(bookData => {
      this.bookData = this.bookData;
      console.log('getBookDetails ' + this.bookData.items[0].id);
    },
      error => this.errorMessage = <any>error);
    return false;
  }


}
