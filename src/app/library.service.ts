import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  userLibraryCollection: AngularFirestoreCollection<Book>;
  libraryData;

  constructor(private _afs: AngularFirestore) {
    this.userLibraryCollection = _afs.collection<Book>("library_data");
   }

   getBookLibrary():Observable<Book[]>{
    this.libraryData = this.userLibraryCollection.valueChanges();

    this.userLibraryCollection.valueChanges().subscribe(data => console.log("getUserLibrary: " + JSON.stringify(data)));
    return this.libraryData;
   }

   addBook(book): void {
    this.userLibraryCollection.add(book);
   }


}
