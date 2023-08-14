 import React from 'react'
 import Spepageper from './SubHomepages/Spepageper'
 import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
 
 const Speakerpht = (props) => {

  const gunjan = props.Link;
  


  console.log("gunajn");
  console.log(gunjan);



   return (
     <div className='border-2 border-gray-950 flex flex-col justify-between items-center h-96 w-auto ' >
        
        <div className="flex justify-center items-center h-1/2 w-36 overflow-hidden   ">
            

            <img src='https://res.cloudinary.com/dbqg4wpkh/image/upload/v1691861400/tanjiro_rhrrne.jpg' className='object-cover' />
           
        </div>
        
        <div className='border-4 '>
          <p>gunjana9pujeihjieaodvcij</p>
        </div>
       
        <button  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg sm:py-3 sm:px-6" >
        <NavLink to= {gunjan} >personalInfo</NavLink>
        </button>
          
      

        <Outlet></Outlet>

       
     
     

     </div>

     
   )
 }
 
 export default Speakerpht