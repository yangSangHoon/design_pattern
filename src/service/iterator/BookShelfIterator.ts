import { Book } from './Book';
import { BookShelf } from './BookShelf';
import {Iterator} from './Iterator';
export class BookShelfIterator implements Iterator {
    #bookShelf: BookShelf;
    #index: number;

    constructor(bookShelf: BookShelf) {
        this.#bookShelf = bookShelf;
        this.#index = 0;
    }

    hasNext(): boolean {
        if(this.#index < this.#bookShelf.getLength()) {
            return true;
        }

        return false;
    }

    next(): object {
        const book: Book = this.#bookShelf.getBookAt(this.#index);
        this.#index++;

        return book;
    }

}