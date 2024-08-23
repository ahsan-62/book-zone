import React from 'react';
import { Link } from 'react-router-dom';

const listedBookAll = ({book}) => {

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;


    
    return (
        <div className='mt-10'>
            <div className="shadow-xl card bg-base-100 h-96 w-96">
       
       <figure  className="px-10 pt-10">
       <img
       src={image}
       alt="Shoes"
       className="rounded-xl " />
       </figure>
       <div className="card-body">
       <div>
        <p>{tags?.map(tag => <span key={tag} className="mr-8 text-green-500">{tag}</span>)}</p>
       </div>
       <p className="text-3xl font-bold">{bookName}</p>
       <p className="text-base font-medium">by: {author}</p>
       <div className="flex mt-5 justify-stretch">
       <p>{category}</p>
       <p>{rating} ⭐</p>
       </div>
       <Link to={`/book-details/${book.bookId}`}>
       <button className="btn btn-primary">View Details</button>
       </Link>
       </div>
       </div>
        </div>
    );
};

export default listedBookAll;