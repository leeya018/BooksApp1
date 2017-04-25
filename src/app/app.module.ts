import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';

//web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
//compoennts
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books.service';
import { BookDetailsComponent } from './book-details/book-details.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [//this for the modules
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  declarations: [//this for the comoponents
    AppComponent,
    BooksComponent,
    BookDetailsComponent
  ],

  providers: [BooksService],//the services I will use
  bootstrap: [AppComponent]//first component to load
})
export class AppModule { }
