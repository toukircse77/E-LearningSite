import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaJsSquare, IconName } from "react-icons/fa";

const Course_Details = () => {
    const data=useLoaderData();
    const {image,name,description,rate,category,price, } = data;

    return (
        <div className='flex justify-center m-3'>
          <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={image} alt="image" /></figure>
          <div className="card-body">
            <h2 className="card-title bg-slate-400 rounded-lg p-3">
               Mentor : {name}
              <div className="badge badge-secondary  text-3xl">{rate}</div>
               </h2>
            <p className='bg-green-300 rounded-lg p-2'>{description}</p>
             <div className="card-actions justify-center ">
              <div className=" p-2 bg-yellow-300 rounded-2xl">Course Type : {category}</div> 
           <div className=" p-2 bg-yellow-300 rounded-2xl">Fees : ${price}</div>
            </div>
            <div>
              <Link to='/checkOut'><button className='bg-blue-600 text-white px-5 py-3 rounded-2xl'>Get Premiun Access</button></Link>
            </div>
          </div>
         </div>
         </div>
       
    );
};

export default Course_Details;