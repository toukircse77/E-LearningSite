import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='flex justify-center items-center pt-8 mx-5'>
        <div className='flex flex-col max-w-md px-6 py-2 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'><span className='text-amber-700'>Sing in</span></h1>
            </div>
            <form 
                noValidate=''
                action=''
                className='space-y-2 ng-untouched ng-pristine ng-valid'
            >
                <div className='space-y-4'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Email address
                        </label>
                        <input
                            // onBlur={(event) => setUserEmail(event.target.value)}
                            type='email'
                            name='email'
                            id='email'
                            placeholder=' Your Email '
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                            required data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='Password'
                            id='password'
                            placeholder='your password'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                            required />
                    </div>
                </div>

                <p className='text-center text-red-400 text-sm pb-1'></p><p className='text-center text-green-500 text-xs pb-1'>{ }</p>

                <div>
                    <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                    >
                        Sign in
                    </button>
                </div>
            </form>
            {/* ------------form field ending------- */}
            <div className='space-y-1'>
                <button className='text-xs hover:underline text-gray-400'>
                    Forgot password?
                </button>
            </div>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Login with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div className='flex justify-center space-x-4'>

                <button  aria-label='Log in with Google' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                </button>

                <button aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                </button>
            </div>
            <p className='px-6 text-sm text-center text-gray-400'>
                Don't have an account yet?{' '}
                <Link to='/registration' href='#' className='hover:underline text-gray-600'>
                    Sign up
                </Link>
                .
            </p>
        </div>
    </div>
    );
};

export default Login;