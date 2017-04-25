import { OnInit, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/Http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/catch';

import { Book } from './Book';




@Injectable()
export class BooksService {
    private booksUrl = 'api/books';

    constructor(private http: Http) { }

    // getBooks(): Promise<Book[]> {
    //     return this.http.get(this.booksUrl).toPromise().then((response) => 
    //     {
    //         var log = console.log;
    //         log(response);
    //         return response.json().data as Book[];
    //     }
    //     )
    //         .catch(this.handleError);
    // }


    getBooks(): Promise<Book[]> {
        return this.http.get(this.booksUrl).toPromise().then(response => response.json().data as Book[]).catch(this.handleError);
    }



    handleError(error: any): Promise<any> {
        console.error("this is the err : ", error);
        return Promise.reject(error || error.massage);
    }


    getBook(title: string): Promise<Book> {
       const url = `${this.booksUrl}${title}`;
        return this.http.get(url).toPromise().then(Response=>Response.json().data as Book).catch(this.handleError);
    }

}