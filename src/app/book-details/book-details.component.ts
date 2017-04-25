import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
   book: Book; 

  constructor(
    private booksService: BooksService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params:Params)=>
    {
      var log = console.log;
      log(params);// first obbj  = > Object {title: "MAMYAMI"}
      return this.booksService.getBook(params['title'])}).
      subscribe(book=>this.book = book);
      //switchMap - make the Promise that should return ftom the BookService to a Obsevable, so we can use subscribe 
      //            and in there wee init out book property
      // we sending the getBook function the title from params - params['title']
  }

  goBack(): void {
    this.location.back();
  }
}
