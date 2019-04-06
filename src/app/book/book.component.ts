import { ToastrService } from 'ngx-toastr';
import { Book } from './../book';
import { LibraryService } from './../library.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book;

  constructor(private _library: LibraryService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  showSuccess(title:string) {
    this.toastr.success(`${title} added to your library`);
  }

  addTheBook(title:string, author:string, thumbnail:string, averageRating: number):boolean{
    let tempBook = new Book(title, Date.now(), author, thumbnail, averageRating)
    this.showSuccess(title);
    this._library.addBook(tempBook);
    return false;
  }
}
