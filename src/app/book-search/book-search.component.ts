import { SearchHistoryService } from './../search-history.service';
import { PastBook } from './../PastBook';
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
  show:boolean = false;
  searchHistory:PastBook[] = [];
  bookName:string;
  
  constructor(private _booksService: BooksApiService, private _historyService: SearchHistoryService) {
   }

  ngOnInit() {
  }

  getBookDetails(bookName: string): boolean {
    this.show = true;
    this.bookName = bookName;

    this._booksService.getBookData(bookName).subscribe(bookData => {
      this.bookData = bookData; console.log(this.bookData);
      this.addSearchHistroy();
    },
      error => this.errorMessage = <any>error);
    return false;
    
  }

  addSearchHistroy(){
    let tempBook:PastBook = new PastBook(this.bookName, this.bookData.items[0].volumeInfo.imageLinks.thumbnail);
    this._historyService.addBook(tempBook);
  }
}
