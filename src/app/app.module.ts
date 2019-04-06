import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { UserLibraryComponent } from './user-library/user-library.component';
import { BookComponent } from './book/book.component';
import { environment } from 'src/environments/environment';
import { UserBooksListComponent } from './user-books-list/user-books-list.component';
import { UserBookComponent } from './user-book/user-book.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookListComponent,
    UserLibraryComponent,
    BookComponent,
    UserBooksListComponent,
    UserBookComponent,
    BookRatingComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 1500, positionClass: 'toast-bottom-center',preventDuplicates: true,}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
