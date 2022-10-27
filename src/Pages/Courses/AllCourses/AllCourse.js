import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../AllCourses/CourseCard';

const AllCourse = () => {
    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])
    return (
        <div className='flex'>
            {/* <div>Hello {courses.length}</div> */}
            {/* ---------card------ */}
            <div className="container  mt-6 mx-5">
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {
                        courses.map(courses => <CourseCard course={courses} key={courses._id}></CourseCard>)
                    }

                </div>
            </div>
            {/* -----------Right side nav--------------- */}

            <div className='bg-gray-800 text-white px-5 lg:px-10'>
                {
                    courses.map(coursess =>
                        <button key={coursess.id} className="  block py-3 my-1 rounded-sm mx-auto">
                            <Link key={courses.id} className='text-decoration-none text-white' to={`/catagory/${coursess.id}`}>
                                {coursess.title}</Link>
                        </button>

                    )
                }


            </div>

        </div>

    );
};

export default AllCourse;