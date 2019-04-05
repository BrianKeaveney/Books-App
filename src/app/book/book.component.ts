import { ToastrService } from 'ngx-toastr';
import { Book } from './../book';
import { LibraryService } from './../library.service';
import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  current = 8;
  @Input() book;

  constructor(private _library: LibraryService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSucces(title:string) {
    this.toastr.success(`${title} added to your library`);
  }

  addTheBook(title:string, author:string, thumbnail:string):boolean{
    let tempBook = new Book(title, Date.now(), author, thumbnail)
    this.showSucces(title);
    this._library.addBook(tempBook);
    return false;
  }
}
