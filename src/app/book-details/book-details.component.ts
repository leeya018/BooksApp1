import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book: Book;

  constructor() { }

}
