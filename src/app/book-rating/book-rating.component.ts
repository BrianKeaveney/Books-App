import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  inputs: ['bookRating']
})
export class BookRatingComponent implements OnInit {
  @Input() bookRating: number;
  @Input() starPermission: boolean;
  @Output() passBookRating: EventEmitter<any> = new EventEmitter();
  value;

  constructor() {}

  resolveAfter1MilSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.bookRating);
      }, 1);
    });
  }
 
 async getValueWithAsync() {
  this.value = <number>await this.resolveAfter1MilSecond();
  this.sendBookRating(this.value);
}
  sendBookRating(bookRating:number) {
    this.passBookRating.emit(this.value);
  }

  ngOnInit() {
  }

}
