import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    AppRoutingModule],

  imports: [
    BrowserModule,
    FormsModule
    // HttpModule
  ],
  exports: [RouterModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
