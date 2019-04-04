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
  constructor() { }

  ngOnInit() {
  }

}
