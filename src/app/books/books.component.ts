import { Component, OnInit } from '@angular/core';


import { Book } from '../book';
import { BooksService } from '../books.service';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;


  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
     this.booksService.getBooks().then((books) => this.books = books);
  }

  onSelect(book:Book){
    this.selectedBook = book;
  }
}
