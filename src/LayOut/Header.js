import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const logOutBtn = () =>{
        logOut()
        .then(result =>{

        }).catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-amber-500 lg:px-10">
       
        <div className="navbar-start ">
        
            <div className='hidden lg:block'>
                <div className='flex'>
                    <Link to='/' className=" normal-case text-xl lg:w-20">
                        <img className='w-full rounded-circle' style={{height:'50px'}} src='https://upload.wikimedia.org/wikipedia/commons/e/e2/Elogo.png' alt="" />
                    </Link>
                    <Link to='/' className='flex items-center font-bold text-2xl text-white text-amber-500'>Etech</Link>
                </div>
            </div>
            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle text-white mr-2">
                    <svg xmlns="" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="lg-header hiside menu menu-compact dropdown-content text-white p-2  shadow bg-slate-700  rounded-box w-60  lg:hidden">
                    <Link to='/' className='btn '>Home</Link>
                    <Link to='/courses' className='btn'> Courses</Link>
                    <Link to='/faq' className='btn'>FAQ</Link>
                    <Link to='/block' className='btn '>Block</Link>
                </ul>
            </div>
        </div>
        
        <div className="navbar-center">
        </div>

        <div className="navbar-end">


            <div className="hidden lg:block">

                <ul className="lg-header menu menu-horizontal p-0">
                    <Link to='/' className='btn '>Home</Link>
                    <Link to='/courses' className='btn'>Courses</Link>
                    <Link to='/faq' className='btn'>FAQ</Link>
                    <Link to='/block' className='btn '>Block</Link>

                    <label htmlFor="Toggle1" className="inline-flex ml-5 items-center space-x-4 cursor-pointer text-gray-100">
                        <span className='text-1xl text-white text-bold'>Light</span>
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-100 peer-checked:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                        <span className='text-white'>Dark</span>
                    </label>
                </ul>
            </div>
            <ul className="lg-header menu menu-horizontal p-0">
                    {
                        user?.uid ?
                            <Link to='/' onClick={logOutBtn} id='logout' className='btn mx-1'>Log out</Link>
                            :
                            <>
                                <Link to='/registration' className='btn ml-3 mr-2'>signUP</Link>
                                 <Link to='/login' className='btn mr-3'>Login</Link>
                            </>
                    }
                    </ul>
           
                    {
                user?.uid ? <img className='w-10  rounded-full' title={user.displayName} src={user?.photoURL} /> : <><FaUser className='mr-1'></FaUser></>
            }

        </div>
    </div>
    );
};

export default Navbar;