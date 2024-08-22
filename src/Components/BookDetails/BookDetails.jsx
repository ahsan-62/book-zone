import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setAllData, setWishListData } from '../../Utility/localStorage';

const BookDetails = () => {
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId, 10);
    const books = useLoaderData();
    const bookDetails = books.find(book => book.bookId === bookIdInt);

    if (!bookDetails) {
        return <p className="text-center text-red-500">Book not found</p>;
    }

    const readBook=()=>{
        const readBookAll=JSON.parse(localStorage.getItem('bookData')) || [];

        if(readBookAll.includes(bookDetails.bookId)){
            toast.error('Book Already Read',{autoClose:1000})
            return;
        }

        const existWishList=JSON.parse(localStorage.getItem('wishListData')) || [];
        if(existWishList.includes(bookDetails.bookId)){
            toast.error('Book Already In WishList',{autoClose:1000})
            return;
        }
        else{
            setAllData(bookIdInt);  
            toast.success('Book Read',{autoClose:1000})   
        }
        

    }
    const wishList=()=>{
        const wishListAll=JSON.parse(localStorage.getItem('wishListData')) || [];
        if(wishListAll.includes(bookDetails.bookId)){   
            toast.error('Book Already In WishList',{autoClose:1000})
            return;
        }

        const existRead=JSON.parse(localStorage.getItem('bookData')) || [];
        if(existRead.includes(bookDetails.bookId)){
            toast.error('Book Already Read',{autoClose:1000})
            return;
        }
        else{
            setWishListData(bookIdInt);
            toast.success('Book Added To WishList',{autoClose:1000})
        }
    }

    return (
        <div className="flex flex-col items-start gap-4 p-6 m-4 bg-white rounded-lg shadow-lg md:flex-row">
            {/* Image Section */}
            <div className="w-full mb-6 md:w-1/3 md:mb-0">
                <img 
                    src={bookDetails.image} 
                    alt={bookDetails.bookName} 
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Book Details Section */}
            <div className="w-full md:w-2/3 md:ml-8">
                <h2 className="mb-4 text-3xl font-bold">{bookDetails.bookName}</h2>
                <p className="mb-2 text-lg"><strong>Author:</strong> {bookDetails.author}</p>
                <p className="mb-2 text-lg"><strong>Category:</strong> {bookDetails.category}</p>
                <p className="mb-2 text-lg"><strong>Review:</strong> {bookDetails.review}</p>
                <p className="mb-2 text-lg"><strong>Tags:</strong> {bookDetails.tags.join(', ')}</p>
                <p className="mb-2 text-lg"><strong>Total Pages:</strong> {bookDetails.totalPages}</p>
                <p className="mb-2 text-lg"><strong>Publisher:</strong> {bookDetails.publisher}</p>
                <p className="mb-2 text-lg"><strong>Year of Publishing:</strong> {bookDetails.yearOfPublishing}</p>
                <p className="mb-4 text-lg"><strong>Rating:</strong> {bookDetails.rating} / 5</p>

                {/* Buttons */}
                <div className="mt-6">
                    <button onClick={readBook} className="mr-4 btn btn-primary">Read</button>
                    <button onClick={wishList} className="btn btn-secondary">Wishlist</button>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default BookDetails;
