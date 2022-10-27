import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const {image,name,title,rate} = course;
    return (
        <div className="card w-65 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3>Mentor : {name}</h3>
          <p>views : {rate}</p>
          <div className="card-actions justify-end">
          <Link to={`/catagory/${course.id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;