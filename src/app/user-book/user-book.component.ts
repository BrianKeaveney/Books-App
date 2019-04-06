import { Book } from './../book';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.css']
})
export class UserBookComponent implements OnInit {

  @Input() bookData:Book;
  @Output() removeBookData: EventEmitter<any> = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  showSuccess(title:string) {
    this.toastr.success(`${title} removed from your library`);
  }

  removeTheBook() {
    this.removeBookData.emit(this.bookData);
    this.showSuccess(this.bookData.title)
  }

  ngOnInit() {
  }

}
