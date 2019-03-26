import { BookSearchComponent } from './book-search/book-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UserLibraryComponent } from './user-library/user-library.component';

const routes: Routes = [
  {path: '', redirectTo: '/booksearch', pathMatch: 'full'},
  {path: 'booksearch', component: BookSearchComponent},
  {path: 'user-library', component: UserLibraryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
