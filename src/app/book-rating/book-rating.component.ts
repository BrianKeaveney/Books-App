import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css']
})
export class BookRatingComponent implements OnInit {
  @Input() bookRating: number;
  @Input() starPermission: boolean;
  @Output() passBookRating: EventEmitter<number> = new EventEmitter();

  constructor() { }

  sendBookRating() {
    this.passBookRating.emit(this.bookRating);
  }
  ngOnInit() {
  }

}
