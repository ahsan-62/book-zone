import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAllData, getWishListData } from '../../Utility/localStorage';
import ListedBookAll from '../listedBookAll/listedBookAll';
import WishListBookAll from '../WishListBookAll/WishListBookAll';

const ListedBooks = () => {

    const readBooks=useLoaderData();
    const [readBook,setReadBook]=useState([]);
    const [wishListBook,setWishListBook]=useState([]);

   useEffect(()=>{

    const readBookAll=getAllData();

    const allreadBooks=[];

    if(readBookAll.length>0){
        for(const id of readBookAll){
            const book=readBooks.find(book=>book.bookId===id);
            if(book){
                allreadBooks.push(book);
            }
            setReadBook(allreadBooks);
        }
        
    }
    
   },[])

   useEffect(()=>{

    const wishListData=getWishListData();

    const allWishlistBooks=[];

    if(wishListData.length>0){
        for(const id of wishListData){
            const book=readBooks.find(book=>book.bookId===id);
            if(book){
                allWishlistBooks.push(book);
            }
            setWishListBook(allWishlistBooks);
        }
        
    }
    
   },[])

   



    return (
        <div>
            <div className='flex justify-around my-4'>
            <h3 className='text-3xl font-bold text-center'>Read Book</h3>
            <h3 className='text-3xl font-bold text-center'>WishList</h3>
            </div>
     <div className='grid grid-cols-2 bg-slate-200 '>
 
        <div className='mt-5' >

        {readBook.map((books)=><ListedBookAll key={books.bookId} book={books} ></ListedBookAll>)}
        </div>

        <div className='mt-5'>
          
        {wishListBook.map((books)=><WishListBookAll key={books.bookId} book={books} ></WishListBookAll>)}
        </div>

        </div>
        </div>
        
    );
};

export default ListedBooks;