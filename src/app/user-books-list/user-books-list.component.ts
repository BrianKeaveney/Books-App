import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-books-list',
  templateUrl: './user-books-list.component.html',
  styleUrls: ['./user-books-list.component.css']
})
export class UserBooksListComponent implements OnInit {

  @Input() libraryData;
  constructor() { }

  ngOnInit() {
  }

}
