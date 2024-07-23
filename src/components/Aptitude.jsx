import React, { useState, useEffect } from 'react';
import './LearningModule.css'; 
import image1 from './icons/QA1.png';
import image2 from './icons/QA2.png';
import image3 from './icons/QA3.png';
import image4 from './icons/QA4.png';
import image5 from './icons/QA5.png';
import image6 from './icons/QA6.png';
import image7 from './icons/QA7.png';
import image8 from './icons/QA8.png';
import image9 from './icons/QA9.png';
import image10 from './icons/QA10.png';
import image11 from './icons/QA11.png';

function Aptitude() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    { image: image1, title: 'Multiplication of Numbers: Shortcut', url: 'https://www.youtube.com/watch?v=2ji5sNRpyvA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=1&ab_channel=QuantGuru' },
    { image: image2, title: 'Square of Numbers ending with 5', url: 'https://www.youtube.com/watch?v=5vNH-yE3MUI&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=2&ab_channel=QuantGuru' },
    { image: image3, title: 'Beautiful Maths Sum', url: 'https://www.youtube.com/watch?v=l_3D_L3zdSM&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=3&ab_channel=QuantGuru' },
    { image: image4, title: 'Square of Number ending with 5', url: 'https://www.youtube.com/watch?v=_-ZWwgddrTA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=4&ab_channel=QuantGuru' },
    { image: image5, title: 'Square of Number: Speed Maths', url: 'https://www.youtube.com/watch?v=e8JzJ_OX4hw&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=5&ab_channel=QuantGuru' },
    { image: image6, title: 'Syllogism: Type 1 - Some/All', url: 'https://www.youtube.com/watch?v=lW_tM1rBaEg&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=6&ab_channel=QuantGuru' },
    { image: image7, title: 'Blood Relationship: PART A', url: 'https://www.youtube.com/watch?v=4Q4oqaIk_a4&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=7&ab_channel=QuantGuru' },
    { image: image8, title: 'Calendar', url: 'https://www.youtube.com/watch?v=FI6W88NvWyc&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=8&ab_channel=QuantGuru' },
    { image: image9, title: 'Live Aptitude Session for Sinhgad Group by GTT Foundation', url: 'https://www.youtube.com/watch?v=3mrqze4hG_A&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=9&ab_channel=QuantGuru' },
    { image: image10, title: 'Permutation: From Beginning to Expert', url: 'https://www.youtube.com/watch?v=PclZYvqjREo&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=10&ab_channel=QuantGuru' },
    { image: image11, title: 'Placement Paper Sums on AGE', url: 'https://www.youtube.com/watch?v=LDTYOWU21cQ&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=11&ab_channel=QuantGuru' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, Number(entry.target.dataset.index)]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.content-block').forEach((block) => {
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  const playVideo = (url) => {
    const videoId = url.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    setVideoUrl(embedUrl);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoUrl('');
  };

  return (
    <div className="learning-module arithmetic-problems">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down">Quantitative Aptitude</h1>
          <p className="animate-slide-up">"Empower Your Numerical Mastery: Unleashing Potential Through Quantitative Aptitude."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqKTzIe4DyQOWlUxNAHyywYysWgrNh2ssHA&s'
            alt='Quantitative Aptitude'
          />
        </div>
      </div>
      <div className="content-container">
        {contentItems.map((item, index) => (
          <div 
            className={`content-block ${visibleItems.includes(index) ? 'animate-fade-in' : ''}`} 
            key={index}
            data-index={index}
          >
            <div className='content-image'>
              <img
                src={item.image}
                alt={item.title}
                onClick={() => playVideo(item.url)}
              />
            </div>
            <div className='content-text'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {showVideo && (
        <div className="video-popup animate-fade-in">
          <div className="video-popup-content animate-scale-in">
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
    </div>
  );
}

export default Aptitude;
