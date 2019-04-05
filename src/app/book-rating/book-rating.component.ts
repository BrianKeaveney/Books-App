import { Component, OnInit, Input } from '@angular/core';
import {NgbModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css']
})
export class BookRatingComponent implements OnInit {
  @Input() bookRating;
  constructor() { }

  ngOnInit() {
  }

}
