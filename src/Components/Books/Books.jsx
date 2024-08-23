import React, { useEffect,useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/bookdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 gap-3 p-2 mt-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;