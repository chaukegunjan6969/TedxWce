import React from 'react'
const VideoHomepage = () => {
  return (
    <div className='VideoHomepage'>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/N-l1xtCMnpw" title="Official TEDx Intro Video" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; display:block" allowfullscreen ></iframe> */}
        {/* <iframe src="https://player.vimeo.com/video/853382493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="TED – Intro Animation"></iframe> */}
        <video width="560" height="315" controls autoPlay>
          <source src="../assets/videos/test_video.mp4 " type="video/mp4"/>
        </video>
    </div>
  )
}

export default VideoHomepage