import React, { useState, useEffect } from 'react';
import './LearningModule.css';
import image1 from './icons/TCS.png';
import image2 from './icons/Wipro2.png';
import image3 from './icons/cognizant3.png';
import image4 from './icons/cognizant4.png';
import image5 from './icons/cognizant5.png';
import image6 from './icons/infosys6.png';

function AcePlacements() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.content-block').forEach((block, index) => {
      block.dataset.index = index;
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

  const contentBlocks = [
    {
      image: image1,
      video: 'https://www.youtube.com/watch?v=Dz6CcnFaUa8&list=PLyV06iJG9PI-0oM0v6p0ZmN0hRQYxVOiO&ab_channel=QuantGuru',
      title: 'TCS Specific Training for 2022 batch',
      subtitle: 'Company Specific Training'
    },
    {
      image: image2,
      video: 'https://www.youtube.com/watch?v=9IVyEoesTEM&ab_channel=QuantGuru',
      title: 'Wipro Hiring fresher 2022,21',
      subtitle: 'Company Specific Training'
    },
    {
      image: image3,
      video: 'https://www.youtube.com/watch?v=DgclDt4nJks&ab_channel=QuantGuru',
      title: 'Cognizant Hiring 2021,20 pass outs',
      subtitle: 'Company Specific Training'
    },
    {
      image: image4,
      video: 'https://www.youtube.com/watch?v=LNz0A_C4r40&ab_channel=QuantGuru',
      title: 'Digital Nurture 2.0: GenC Pro',
      subtitle: 'Cognizant'
    },
    {
      image: image5,
      video: 'https://www.youtube.com/watch?v=FQxeCd2jqLw&ab_channel=QuantGuru',
      title: 'Digital Nurture 2.0: GenC',
      subtitle: 'Cognizant for 2023 Batch'
    },
    {
      image: image6,
      video: 'https://www.youtube.com/watch?v=_keXDIULc1Y&ab_channel=QuantGuru',
      title: 'Off-campus Recruitment Drive',
      subtitle: 'Infosys hiring!!!!'
    }
  ];

  return (
    <div className="learning-module company-specific-training">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down"><b>Company Specific Training</b></h1>
          <p className="animate-slide-up">
            "Empower your future with customized training designed just for you! Unlock your potential and excel in your studies with personalized programs crafted for student success."
          </p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://create.microsoft.com/_next/image?url=https%3A%2F%2Fdsgrcdnblobprod5u3.azureedge.net%2Fcmsassets%2FLogoDesign-02-Logos.webp&w=1920&q=75'
            alt='Company Specific Training'
          />
        </div>
      </div>
      <div className="content-container">
        {contentBlocks.map((block, index) => (
          <div 
            className={`content-block ${visibleItems.includes(index.toString()) ? 'animate-fade-in' : ''}`}
            key={index}
            data-index={index}
          >
            <div className='content-image'>
              <img
                src={block.image}
                alt={block.title}
                onClick={() => playVideo(block.video)}
              />
            </div>
            <div className='content-text'>
              <p>{block.title}
                <a href="#">{block.subtitle}</a>
              </p>
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

export default AcePlacements;