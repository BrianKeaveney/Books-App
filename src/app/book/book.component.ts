import { LibraryService } from './../library.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book;

  constructor(private _library: LibraryService) { }

  ngOnInit() {
  }

  addTheBook(title:string):boolean{
    console.log("function called");
    this._library.addBook({title});
    return false;
  }
}
