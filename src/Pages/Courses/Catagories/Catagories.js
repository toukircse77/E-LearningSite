import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data =>setCatagories(data))
    },[])
    return (
        
        <div className='grid  grid-cols-3 gap-4 '>
            {
                catagories.map(catagory => <CourseDetails
                catagory = {catagory}
                key={catagory.id}>
                </CourseDetails>)
            }
        </div>
    );
};

export default Catagories;