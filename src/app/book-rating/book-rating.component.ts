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

  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.bookRating);
      }, 5);
    });
  }
 
 async getValueWithAsync() {
  this.value = <number>await this.resolveAfter2Seconds();
  console.log(`async result: ${this.value}`);
}
  sendBookRating(bookRating:number) {
    // console.log(bookRating);
    // console.log(this.bookRating);
    // while(true)
    // {
    //   console.log(this.bookRating);

    // }
    this.passBookRating.emit(bookRating);
  }

  ngOnInit() {
  }

}
