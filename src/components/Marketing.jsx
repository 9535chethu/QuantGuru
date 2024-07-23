import React, { useState, useEffect } from 'react';
import './LearningModule.css';
import image1 from './icons/Marketing1.png';

function Marketing() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    {
      image: image1,
      title: "Welcome session Marketing",
      video: 'https://www.youtube.com/watch?v=PpD2repQ3gU&list=PLyV06iJG9PI-_g_l12lTRx6IiljTvdjES&ab_channel=QuantGuru'
    }
    // You can add more content items here as needed
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
    <div className="learning-module marketing">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down"><b>Marketing</b></h1>
          <p className="animate-slide-up">"Boost your brand's online presence with dynamic strategies and innovative techniques, transforming visitors into loyal customers with engaging experiences."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg'
            alt='Marketing'
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

export default Marketing;