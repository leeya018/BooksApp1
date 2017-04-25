import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'details/:title', component: BookDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // creating a sigelton using forRoot()
  exports: [RouterModule]
})
export class AppRoutingModule { }
