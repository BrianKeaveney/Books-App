import { Book } from './../book';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.css']
})
export class UserBookComponent implements OnInit {

  @Input() bookData:Book;
  @Output() removeBookData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  removeTheBook() {
    this.removeBookData.emit(this.bookData);
  }

  ngOnInit() {
  }

}
