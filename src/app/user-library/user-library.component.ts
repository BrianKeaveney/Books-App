import { Book } from './../book';
import { LibraryService } from './../library.service';
import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.css'],
  providers: [LibraryService]
})
export class UserLibraryComponent implements OnInit {

  index:number;
  libraryData: Book[];
  yourBook:Book;
  constructor(private _library: LibraryService) { }

  ngOnInit() {
    this._library.getBookLibrary().subscribe(libraryData =>
      {this.libraryData = libraryData; this.libraryData = _.sortBy(this.libraryData, "dateAdded");
    this.libraryData.reverse();});
  }

}
