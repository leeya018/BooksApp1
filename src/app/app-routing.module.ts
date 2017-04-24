import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';


const routs = [
  { path: '', directTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'details/:title', component: BookDetailsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routs)], // creating a sigelton using forRoot()
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
