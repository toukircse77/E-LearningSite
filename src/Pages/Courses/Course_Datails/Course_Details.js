import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';

const Course_Details = () => {
    const data=useLoaderData();
    const {image,name,description,rate,category,price,title } = data;
    const pdfGenarator = () =>{
      var doc = new jsPDF('landscape', 'px', 'a4', 'false');
      doc.addImage(image, 'JPEG', 0, 20, 80, 80);
      doc.setFont('Helvertica', 'bold')
      doc.addPage()
      doc.text(20, 20, "Name : " + title, )
      doc.text(20, 30, "Details information : " + description,)
      doc.save('file.pdf')
    }

    return (
        <div className='flex justify-center m-3'>
        
          <div className="card w-96 text-center bg-base-100 shadow-xl">
            <button onClick={pdfGenarator} className=' btn'><FaDownload></FaDownload></button>
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
              <Link to='/checkout'><button className='bg-blue-600 text-white px-5 py-3 rounded-2xl'>Get Premiun Access</button></Link>
            </div>
          </div>
         </div>
         </div>
       
    );
};

export default Course_Details;