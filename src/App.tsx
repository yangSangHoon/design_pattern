import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BookShelfIterator } from './service/iterator/BookShelfIterator';
import { BookShelf } from './service/iterator/BookShelf';
import { Book } from './service/iterator/Book';
import { Iterator } from './service/iterator/Iterator';
import { PrintBanner } from './service/adapter/case1/PrintBanner';
import { PrintBanner as PrintBanner2} from './service/adapter/case2/PrintBanner';
import { Print } from './service/adapter/case1/Print';
import { Print as Print2} from './service/adapter/case2/Print';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const gogo = () => {
        const bookShelf:BookShelf = new BookShelf(4);
        bookShelf.appendBook(new Book('1'));
        bookShelf.appendBook(new Book('2'));
        bookShelf.appendBook(new Book('3'));
        bookShelf.appendBook(new Book('4'));

        const it: Iterator = bookShelf.iterator();

        while(it.hasNext()) {
            const book: Book = it.next() as Book;
            console.log(book.name)
        }
    }

    const runAdaptor = () => {
        const print: Print = new PrintBanner('Hello');
        print.printStrong();
        print.printWeak();

        const print2: Print2 = new PrintBanner2('Hello2');
        print2.printStrong();
        print2.printWeek();
    }

    return (
        <div className="App">
            <button onClick={gogo}>ㅇㅣ터레이터</button>
            <button onClick={runAdaptor}>runAdaptor</button>
        </div>
    );
}

export default App;
