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
  index:number;

  constructor(private _afs: AngularFirestore) {
    this.userLibraryCollection = _afs.collection<Book>("library_data");
   }

   getBookLibrary():Observable<Book[]>{
    this.libraryData = this.userLibraryCollection.valueChanges();

    return this.libraryData;
   }

   addBook(book: Book): void {
    this.userLibraryCollection.add(JSON.parse(JSON.stringify(book)));
   }

  //  removeBook(book): void {
  //   this.userLibraryCollection.doc(book.doc).delete().then(function() {
  //     console.log("Document successfully deleted!");
  //   }).catch(function(error) {
  //       console.error("Error removing document: ", error);
  //   });
  //  }

}
