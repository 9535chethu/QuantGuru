import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserData(null);
    window.location.reload(); // Reload the page to reflect the logout state
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <button
        className="header-logo"
        onClick={handleLogoClick}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="icon-graduate" />
        Quant Guru
        <div className="header-logo-underline"></div>
      </button>
      <div className="header-controls">
        {/* <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search topics..."
            className="search-input"
          />
          {searchText && (
            <button
              className="cancel-button"
              onClick={() => setSearchText('')}
            >
              &#x2715;
            </button>
          )}
        </div> */}
        <div className="user-menu-container">
          {isAuthenticated && userData && (
            <div className="menu-item">Welcome, {userData.name}</div>
          )}
          <button
            className="user-icon"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <User />
          </button>
          {isUserMenuOpen && (
            <div className="user-menu">
              {!isAuthenticated ? (
                <button className="menu-item" onClick={() => navigate('/login')}>Login</button>
              ) : (
                <button className="menu-item" onClick={handleLogout}>Logout</button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
