import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        let books = [
            { author: "roni", date: new Date(17, 3, 2), title: "MAMYAMI" },
            { author: "eden", date: new Date(14, 3, 4), title: "big PAPAA" }
        ];
        return {books};
    }
} 