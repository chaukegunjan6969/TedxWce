import React from 'react'

const VideoHomepage = () => {
  return (
    <div className='relative w-full h-screen' >

       {/* <video src='../HomepageSources/TedxOfficial.mp4' controls width="480" height="300" autoPlay></video> */}

       <video  controls autoPlay loop className='w-full h-full object-cover' >
        <source src='https://res.cloudinary.com/dbqg4wpkh/video/upload/v1691864062/TedxOfficial_lvkqq7.mp4' type='video/mp4'></source>
        your browser does not support the video tag
       </video>

       
    </div>
  )
}

export default VideoHomepage