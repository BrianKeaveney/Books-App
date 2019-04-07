import { EventEmitter } from 'protractor';
import { LibraryService } from './../library.service';
import { Book } from './../book';
import { Component, OnInit, Input } from '@angular/core';
import { _ } from 'underscore';

@Component({
  selector: 'app-user-books-list',
  templateUrl: './user-books-list.component.html',
  styleUrls: ['./user-books-list.component.css']
})
export class UserBooksListComponent implements OnInit {

  @Input() libraryData: Book[];
  index:number;
  
  constructor(private _library: LibraryService) { }

  removeTheBook(event: Book){
    this.index = this.libraryData.findIndex(x => x === event);
    this.libraryData.splice(this.index, 1);
    this._library.removeBook(event);
  }

  ngOnInit() {
  }

}
