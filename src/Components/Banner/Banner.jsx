import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='flex flex-col px-32 mt-3 md:justify-between lg:flex-row bg-bannerColor rounded-2xl'>
           <div className='flex flex-col items-start justify-center w-1/2 p-10 text-white '>
            <h3 className='mb-8 text-6xl font-bold text-black text-start'>Books to freshen up your bookshelf</h3>
           <Link to='/listed-books'> <button className='px-4 py-2 bg-orange-500 rounded'>View The List</button> </Link>
           </div>
           <div className='w-1/2 pl-10'>
            <img src="../images/banner.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;