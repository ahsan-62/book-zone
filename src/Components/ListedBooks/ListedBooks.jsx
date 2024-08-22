import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAllData } from '../../Utility/localStorage';

const ListedBooks = () => {

    const readBooks=useLoaderData();
    const [readBook,setReadBook]=useState([]);

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
        
       
        console.log(readBook);
    }
    
   },[])

   



    return (
        <div>
         
         {readBook.map(()=><ListedBooks key={readBook.bookId} book={readBook} ></ListedBooks>)}

        </div>
    );
};

export default ListedBooks;