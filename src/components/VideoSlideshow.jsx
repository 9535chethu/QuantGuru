import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const API_KEY = 'AIzaSyCnrVYZQAFn0L4dG5XfkhNwiQpT7KT4afo'; // Replace with your YouTube Data API key

const VideoSlideshow = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  const videoIds = [
    "WY3EkgQokeo",
    "7QpmYQON7dc",
    "4Jc5TkPx1Xk",
    "DAHRY7aHtcY",
    "FQxeCd2jqLw",
    "FQxeCd2jqLw",
    "FQxeCd2jqLw",
  ];

  useEffect(() => {
    const fetchVideoDetails = async () => {
      setLoading(true);
      try {
        const ids = videoIds.join(',');
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${API_KEY}&part=snippet`);
        const data = await response.json();
        setVideoDetails(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideoDetails();
  }, []);

  const handleThumbnailClick = (videoId) => {
    setCurrentVideo(videoId);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const truncateDescription = (description, maxLength = 150) => {
    if (description.length <= maxLength) return description;
    return description.substr(0, maxLength) + '...';
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading videos: {error.message}</div>;

  return (
    <div className="video-slideshow-container">
      <div className="headline">Explore Our Video Library</div>
      <div className="video-slideshow">
        <div className="video-container" ref={scrollContainerRef}>
          {videoDetails.map((video) => (
            <div key={video.id} className="video-item">
              <div className="thumbnail-container">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  onClick={() => handleThumbnailClick(video.id)}
                />
                <button className="play-button" onClick={() => handleThumbnailClick(video.id)} aria-label="Play video">
                  <Play size={24} />
                </button>
              </div>
              <div className="video-description">
                {truncateDescription(video.snippet.description)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentVideo && (
        <div className="video-player">
          <button className="close-button" onClick={handleCloseVideo} aria-label="Close video">
            &times;
          </button>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="scroll-buttons-container">
        <button className="scroll-button left" onClick={() => handleScroll('left')} aria-label="Scroll left">
          <ChevronLeft size={24} />
        </button>
        <button className="scroll-button right" onClick={() => handleScroll('right')} aria-label="Scroll right">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoSlideshow;