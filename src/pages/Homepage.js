import React from 'react';
import Infosection from '../pages/Homepage/Infosection';
import  Speaketphoto from '../pages/Homepage/Speakerpht';
import VideoHomepage from './Homepage/VideoHome';
import  '../assets/home/homepage.css'
import Form from './form';

const Homepage = () => {
  return (
    <div className='Homepage'> 
    <Infosection></Infosection>
    <VideoHomepage></VideoHomepage>
    <Speaketphoto></Speaketphoto>
    <Form></Form>
    </div>
  )
}

export default Homepage;