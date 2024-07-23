import React, { useState } from 'react';
import './AptitudePage.css'; // Ensure the CSS file is correctly imported
// import image from './image.jpg'; // Import the image
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png';
import image11 from './image11.png';

function Aptitudepage () {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const playVideo = (url) => {
    // Extract the video ID from the YouTube watch URL
    const videoId = url.split('v=')[1].split('&')[0];
    // Construct the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    setVideoUrl(embedUrl);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoUrl(''); // Reset video URL
  };

  return (
    <>
      <div className='hblock'>
        <div className='text-container'>
          <h1>Quantitative Aptitude</h1>
          <p>"Empower Your Numerical Mastery: Unleashing Potential Through Quantitative Aptitude."</p>
        </div>
        <div className='image-container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqKTzIe4DyQOWlUxNAHyywYysWgrNh2ssHA&s'
            alt='Description'
          />
        </div>
      </div>
      <div className="container">
        <div className='block'>
          <div className='img1'>
            <img
              src={image1}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=2ji5sNRpyvA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=1&ab_channel=QuantGuru')}
            />
          </div>
          <div className='text1'>
            <p>Multiplication of Numbers: Shortcut</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image2}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=5vNH-yE3MUI&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=2&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Square of Numbers ending with 5</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image3}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=l_3D_L3zdSM&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=3&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Beautiful Maths Sum</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image4}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=_-ZWwgddrTA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=4&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Square of Number Number ending with 5</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image5}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=e8JzJ_OX4hw&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=5&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Square of Number: Speed Maths</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image6}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=lW_tM1rBaEg&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=6&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Syllogism: Type 1 - Some/All</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image7}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=4Q4oqaIk_a4&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=7&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Blood Relationship: PART A</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image8}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=FI6W88NvWyc&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=8&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Calendar</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image9}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=3mrqze4hG_A&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=9&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Live Aptitude Session for Sinhgad Group by GTT Foundation</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image10}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=PclZYvqjREo&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=10&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Permutation: From Beginning to Expert</p>
          </div>
        </div>
        <div className='block'>
          <div className='img1'>
            <img 
              src={image11}
              alt=''
              onClick={() => playVideo('https://www.youtube.com/watch?v=LDTYOWU21cQ&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=11&ab_channel=QuantGuru')} />
          </div>
          <div className='text1'>
            <p>Placement Paper Sums on AGE</p>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="video-popup">
          <div className="video-popup-content">
            <span className="close" onClick={closeVideo}>&times;</span>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Aptitudepage ;
