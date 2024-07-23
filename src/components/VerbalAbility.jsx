import React, { useState, useEffect } from 'react';
import './LearningModule.css';
import image1 from './icons/VR1.png';
import image2 from './icons/VR2.png';
import image3 from './icons/VR3.png';
import image4 from './icons/VR4.png';
import image5 from './icons/VR5.png';

function VerbalReasoning() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    { image: image1, title: "Syllogism: Type 1 - Some/All", video: 'https://www.youtube.com/watch?v=lW_tM1rBaEg&list=PLyV06iJG9PI_TjMwSXm9Y-GILYH__Gvsg&index=1&ab_channel=QuantGuru' },
    { image: image2, title: "Blood Relationship: PART A", video: 'https://www.youtube.com/watch?v=4Q4oqaIk_a4&list=PLyV06iJG9PI_TjMwSXm9Y-GILYH__Gvsg&index=2&ab_channel=QuantGuru' },
    { image: image3, title: "Logical Reasoning: Part-1", video: 'https://www.youtube.com/watch?v=J0PMnsFhqn4&list=PLyV06iJG9PI_TjMwSXm9Y-GILYH__Gvsg&index=4&ab_channel=QuantGuru' },
    { image: image4, title: "SEATING ARRANGEMENT: Linear & Circular", video: 'https://www.youtube.com/watch?v=tICldsOf3sg&list=PLyV06iJG9PI_TjMwSXm9Y-GILYH__Gvsg&index=5&ab_channel=QuantGuru' },
    { image: image5, title: "Syllogism: The most asked topic in Infosys and other MNCs", video: 'https://www.youtube.com/watch?v=7QpmYQON7dc&list=PLyV06iJG9PI_TjMwSXm9Y-GILYH__Gvsg&index=6&ab_channel=QuantGuru' }
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
    <div className="learning-module verbal-ability">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down">Verbal Reasoning</h1>
          <p className="animate-slide-up">"Unravel the Art of Verbal Reasoning: Mastering Words to Master the World."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CYJCRs2U23eD2FS70Sk_wH93R96f4G-ZHg&s'
            alt='Verbal Reasoning'
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

export default VerbalReasoning;