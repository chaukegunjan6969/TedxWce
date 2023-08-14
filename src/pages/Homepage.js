import React from 'react';
import Infosection from '../pages/Homepage/Infosection';
import  Speaketphoto from '../pages/Homepage/Speakerpht';
import VideoHomepage from './Homepage/VideoHomepage';
import  '../pagescss/Homepage.css'


const Homepage = () => {
  return (
    

    <div className='Homepage'> 

    {/* <Infosection></Infosection> */}

    <VideoHomepage></VideoHomepage>  

    {/* css done  of VideoHomepage*/}

    <Infosection></Infosection>
    
    {/* {Css Done of Infosection} */}


    <div className='flex flex-col md:flex-row justify-evenly border-2  border-gray-950 p-8'>

    <div className='flex-shrink-0 p-4 component'> <Speaketphoto Link = '/PERsonal'></Speaketphoto> </div> 
     <div className='flex-shrink-0 p-4 component'> <Speaketphoto Link = '/speakerone'></Speaketphoto></div> 
   <div className='flex-shrink-0 p-4 component'> <Speaketphoto Link = '/speakertwo'></Speaketphoto></div>
   <div className='flex-shrink-0 p-4 component'> <Speaketphoto Link = '/speakerthree'></Speaketphoto></div>
    <div className='flex-shrink-0 p-4 component'><Speaketphoto Link = '/speakerfour'></Speaketphoto></div>
    {/* <div className='flex-shrink-0 p-4 component'><Speaketphoto Link = '/speakerfive'></Speaketphoto></div> */}

    </div>

    


    </div>
  )
}

export default Homepage;