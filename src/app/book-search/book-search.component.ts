import { Component, OnInit } from '@angular/core';
import { IBooksResponse } from './../ibooksresponse';
import { BooksApiService } from './../books-api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  bookData: IBooksResponse;
  errorMessage:string;
  
  constructor(private _booksService: BooksApiService) { }

  ngOnInit() {
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
