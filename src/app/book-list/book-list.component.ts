import { Component, OnInit, Input } from '@angular/core';
import { IBooksResponse } from '../ibooksresponse';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() bookData: IBooksResponse;

  constructor() { }

  ngOnInit() {
  }

}
