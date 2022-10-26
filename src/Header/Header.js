import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div>
        <div className="navbar bg-yellow-400">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
   <NavLink className={({isActive})=> isActive ? 'active' : 'undefined'} to={'/home'}><li><a>Home</a></li></NavLink> 
   <NavLink to={'/catagories'}><li><a>Course</a></li></NavLink> 
   <NavLink to={'/blog'}><li><a>Blog</a></li></NavLink> 
   <NavLink to={'/login'}><li><a>Login</a></li></NavLink> 
   <NavLink to={'/register'}><li><a>Register</a></li></NavLink> 
   <NavLink to={'/home'}><li><a>LogOut</a></li></NavLink>
  </ul>
</div>
<a className="btn btn-ghost normal-case text-xl">Talent Hunt</a>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal p-0">
<NavLink className={({isActive})=> isActive ? 'active' : 'undefined'} to={'/home'}><li><a>Home</a></li></NavLink>
<NavLink to={'/catagories'}><li><a>Course</a></li></NavLink>
<NavLink to={'/blog'}><li><a>Blog</a></li></NavLink>
<NavLink to={'/login'}><li><a>Login</a></li></NavLink>
<NavLink to={'/Register'}><li><a>Register</a></li></NavLink>
<NavLink to={'/home'}><li><a>LogOut</a></li></NavLink>
</ul>
</div>
</div>
    </div>
    );
};

export default Header;