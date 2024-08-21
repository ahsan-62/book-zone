

const Banner = () => {
    return (
        <div className='flex justify-between px-32 mt-3 bg-bannerColor rounded-2xl'>
           <div className='flex flex-col items-start justify-center w-1/2 p-10 text-white '>
            <h3 className='mb-8 text-6xl font-bold text-black text-start'>Books to freshen up your bookshelf</h3>
            <button className='px-4 py-2 bg-orange-500 rounded'>View The List</button>
           </div>
           <div className='w-1/2 pl-10'>
            <img src="../images/banner.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;