
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const Links=<>
    
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
    <li><NavLink to="/page-read">Pages to Read</NavLink></li>
    </>
    return (
        <div>
            <div className="bg-teal-200 rounded-md navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {Links}
        
      </ul>
    </div>
   <Link to="/"> 
   <h1 className="text-2xl font-bold">Book Zone</h1>
   </Link>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      {Links}
    </ul>
  </div>
  <div className="gap-5 navbar-end">
    <button className='p-3 btn btn-circle'>Sign In</button>
    <button className='btn btn-circle '>Sign Up</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;