import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="https://as1.ftcdn.net/v2/jpg/03/32/35/64/1000_F_332356447_PO9YOkBRZ6uQhfW0Tr1PK2ye2qG1duwt.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">E-Learning Advantages To Support Your LMS Business Case
    
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">With International Internet Day coming up on Oct. 29, the award-winning online language school celebrates the advantages of e-learning
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        
            <Link to='/courses' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">About More</Link>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Home;