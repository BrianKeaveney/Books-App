import { PastBook } from './PastBook';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  userSearchHistory: AngularFirestoreCollection<PastBook>;
  searchHistory;


  constructor(private _afs: AngularFirestore) {
    this.userSearchHistory = _afs.collection<PastBook>("history_data");
   }

   getSearchHistory():Observable<PastBook[]>{
    this.searchHistory = this.userSearchHistory.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => ({$key:action.payload.doc.id, ...action.payload.doc.data()}))
      })
    );
      return this.searchHistory;
    }

    addBook(search:PastBook) {
      this.userSearchHistory.add(JSON.parse(JSON.stringify(search)));
     }

     removeBook(search:PastBook): void {
      this.userSearchHistory.doc(search.$key).delete().then(function() {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
     }
}
