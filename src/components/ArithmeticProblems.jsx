import React, { useState, useEffect } from 'react';
import './LearningModule.css';
import image1 from './icons/AP1.png';
import image2 from './icons/AP2.png';
import image3 from './icons/AP3.png';
import image4 from './icons/AP4.png';
import image5 from './icons/AP5.png';

function ArithmeticProblems() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    { image: image1, title: 'Trick 1', video: 'https://www.youtube.com/watch?v=X8mLL__9FmQ&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=1&ab_channel=QuantGuru' },
    { image: image2, title: 'Trick 2', video: 'https://www.youtube.com/watch?v=oixonnGEOxg&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=2&ab_channel=QuantGuru' },
    { image: image3, title: 'Sum of consecutive numbers', video: 'https://www.youtube.com/watch?v=EC8Qo4zHvdo&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=3&ab_channel=QuantGuru' },
    { image: image4, title: 'Ratio of a b c', video: 'https://www.youtube.com/watch?v=rpUdIImgH0s&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=4&ab_channel=QuantGuru' },
    { image: image5, title: 'Ratio of a b c d', video: 'https://www.youtube.com/watch?v=77jORSVyHp4&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=5&ab_channel=QuantGuru' },
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
          <h1 className="animate-slide-down">Speed Maths</h1>
          <p className="animate-slide-up">"Enhance math proficiency with our interactive online learning module, designed for effective skill mastery."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://e7.pngegg.com/pngimages/430/779/png-clipart-mathematical-equations-illustration-mathematics-formula-equation-mathematical-notation-mathematics-cdr-angle.png'
            alt='Mathematical equations'
            onClick={() => playVideo('https://www.youtube.com/watch?v=X8mLL__9FmQ&list=PLyV06iJG9PI_gfBXYMbYkMCnVLw0d-IOy&index=1&ab_channel=QuantGuru')}
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
                onClick={() => playVideo(item.video)}
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

export default ArithmeticProblems;