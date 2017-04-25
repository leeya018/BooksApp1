import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/Http';

import { Book } from './Book';
import { BOOKS } from './mock-book';


@Injectable()
export class BooksService {


    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBook(title: string): Promise<Book> {
        return this.getBooks().then(books => books.find(book => book.title === title));
    }
}