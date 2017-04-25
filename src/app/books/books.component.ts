import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book';
import { BooksService } from '../books.service';
// import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;


  constructor(
    private router: Router,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().then((books) => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  gotoDetail(): void {
    this.router.navigate(['/details',this.selectedBook.title]);//navigate to other component
    //if it was "/books" before so now it  will be "detail/<title> on the browser"
  }
}
