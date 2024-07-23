import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TopicsBar from './TopicsBar';
import Advertisement from './Advertisement';
import Announcement from './Announcement';
import VideoSlideshow from './VideoSlideshow';
import Reviews from './Reviews';
import Footer from './Footer';
import './MainContent.css';

const MainContent = ({ children }) => {
  const isTopicPage = Boolean(children);

  return (
    <div className="main-content">
      <Header />
      <main className="content-area">
        <TopicsBar />
        {children || (
          <>
            <Announcement />
            <Advertisement />
            <VideoSlideshow />
            <Reviews />
          </>
        )}
      </main>
      {!isTopicPage && (
        <div className="footer-area">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainContent;