import { CartComponent } from './cart/cart.component';
import { YourBooksComponent } from './your-books/your-books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/booksearch', pathMatch: 'full'},
  {path: 'booksearch', component: BookSearchComponent},
  {path: 'yourbooks', component: YourBooksComponent},
  {path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
