import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    const bookIdInt=parseInt(bookId);
    const book = useLoaderData();
    const bookAll = book.find((book, index) => book.bookId === bookIdInt);
    console.log(bookAll);

    return (
        <div>
            <h3>Book Details</h3>
            <p>{bookAll.bookName}</p>
            
        </div>
    );
};

export default BookDetails;