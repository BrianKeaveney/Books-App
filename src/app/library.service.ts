import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Book } from './book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

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
    this.libraryData = this.userLibraryCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => ({$key:action.payload.doc.id, ...action.payload.doc.data()}))
      })
    );

    return this.libraryData;
   }

   addBook(book: Book): void {
    this.userLibraryCollection.add(JSON.parse(JSON.stringify(book)));
   }

   removeBook(book): void {
    this.userLibraryCollection.doc(book.$key).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
   }

   updateBook(book): void {
     this.userLibraryCollection.doc(book.$key).update(book).then(function(){
       console.log("Document successfully updated!");
     }).catch(function(error){
       console.error("Error updating document: ", error)
     });
   }

}
