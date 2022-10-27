import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';


const Register = () => {
    const {createUsers, updateDetails, emailVerification, googleLogIn,gitHubLogIn, user,} = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const navigate = useNavigate();

    const handleRegisterForm = (event) =>{
        event.preventDefault();
        const userName = event.target.Username.value;
        const profilePhoto = event.target.Photo.value;
        const password = event.target.Password.value;
        const email = event.target.email.value;
        const confirmPassword = event.target.confirmPassword.value;
        const upper = /[A-Z]/;

        if (password.length <= 6) {
            return setError(" Minimum 6 characters required")
        }
        else if (!upper.test(password)) {
            return setError(" make sure your password includes an uppercase letter.")
        }
        else if(password !== confirmPassword){
            return setError('please match your password')
        }
        
        else {
            setSuccess("Your Registration successfull")
        }
        createUsers(email,password)
        .then(result =>{
            console.log(result.user)
            navigate('/login');
            updateDetails(userName, profilePhoto)
            .then(result =>{
                alert('update your information')

                emailVerification()
                .then(result=>{
                    alert('please verify the mail from your mail inbox')
                }).catch(error => console.error(error))
            }).catch(error => console.error(error))
        }).catch(error=>console.error(error))
        
    }
        const googleBtnLogin = () =>{
            googleLogIn()
            .then(result =>{
                navigate('/courses')
            }).catch(error => console.error(error))
        }

        const gitHubBtnLogin = () =>{
            gitHubLogIn()
            .then(result =>{
                navigate('/courses')
            }).catch(error => console.error(error))
        }

    return (
        <div className='reGistration flex justify-center items-center pt-5 mx-5'>
        <div className='flex flex-col max-w-md  rounded-md sm:px-10 px-7 sm:py-3 py-1 bg-gray-100 text-gray-900'>
            <div className='mb-3 text-center'>
                <h1 className='mb-1 mt-1 text-4xl font-bold text-gray-900'><span className='text-amber-800'>Register</span></h1>
                <p className='text-sm text-gray-400'>Create a new account</p>
            </div>
            <form
                onSubmit={handleRegisterForm}
                noValidate=''
                action=''
                className='space-y-1 ng-untouched ng-pristine ng-valid'
            >
                <div className='space-y-3'>
                    <div className='flex justify-between gap-2'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Full Name
                            </label>
                            <input
                                type='text'
                                name='Username'
                                id='name'
                                placeholder=' Your Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required />
                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm text-center'>
                              photo Link
                            </label>
                            <input
                                type='text'
                                name='Photo'
                                id='name'
                                placeholder='.png, .jpg'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                                required />
                        </div>
                    </div>


                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Email address
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder=' Your Email '
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                            required />
                    </div>
                    <div>
                        <div className='flex justify-between mb-2'>
                            <label htmlFor='password' className='text-sm'>
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
                    <div>
                        <div className='flex justify-between mb-2'>
                            <label htmlFor='confirm' className='text-sm'>
                                Confirm-password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='confirmPassword'
                            id='password'
                            placeholder='confirm password'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                            required />
                    </div>
                    <p className='text-center text-red-400 text-xs pb-1'>{error}</p><p className='text-center text-green-500 text-xs pb-1'>{success}</p>
                </div>
                <div className='space-y-2'>
                    <div>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-orange-400 hover:bg-orange-300 hover:text-white text-gray-100'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Signup with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div className='flex justify-center space-x-4'>
                <button onClick={googleBtnLogin} aria-label='Log in with Google' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                </button>
                <button onClick={gitHubBtnLogin} aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                    <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                </button>
            </div>
            <p className='px-6 text-sm text-center text-gray-400 pb-3'>
                Already have an account yet?{' '}
                <Link to='/login' href='#' className='hover:underline text-gray-600'>
                    Sign In
                </Link>
                .
            </p>
        </div>
    </div>
    );
};

export default Register;