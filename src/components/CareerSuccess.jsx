import React, { useState, useEffect } from 'react';
import './LearningModule.css';
import image1 from './icons/ST1.png';
import image2 from './icons/ST2.png';
import image3 from './icons/ST3.png';

function CareerSuccess() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    {
      image: image1,
      title: "Session on \"Role of Story Telling in Student's Success\" for 1st Year Engineering Students at RLJIT",
      video: 'https://www.youtube.com/watch?v=0zCgX_HlXUU&list=PLyV06iJG9PI8PA-btSBVH_QDJx3VRwfLx&ab_channel=QuantGuru'
    },
    {
      image: image2,
      title: "Expert Tips for Answering Common Interview Questions - Part 1",
      video: 'https://www.youtube.com/watch?v=D7VHqzrk-i8&ab_channel=QuantGuru'
    },
    {
      image: image3,
      title: "5 Success Principles for Successful Life",
      video: 'https://www.youtube.com/watch?v=hXuO4qRkkK8&ab_channel=QuantGuru'
    }
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
    <div className="learning-module career-success">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down"><b>Story Telling For 1st Year Engineering Students</b></h1>
          <p className="animate-slide-up">"Let each narrative fuel your ambition and guide your path towards success in your first year and beyond."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFwvPs421lQOnvJ6-sAAruMvGNajaMD6WXQ&s'
            alt='Career Success'
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

export default CareerSuccess;