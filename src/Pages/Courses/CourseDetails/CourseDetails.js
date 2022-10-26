import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({catagory}) => {
    const {name,title,image,id} = catagory;
    return (
        <div className=''>
           <div className="card w-70 bg-yellow-500 shadow-xl">
  <figure className='h-50'><img src={image} alt="image" /></figure>
  <div className="card-body bg-blue-300">
    <h2 className="card-title">{title}</h2>
    <p>Mentor: {name}</p>
    <div className="card-actions justify-end">
    <Link to={`/catagory/${id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseDetails;