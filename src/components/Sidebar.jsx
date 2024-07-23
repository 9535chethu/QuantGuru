import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faJava, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons'; // For C++ icon



const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const topics = [
    { name: 'PHP', icon: faPhp },
    { name: 'Java', icon: faJava },
    { name: 'C++', icon: faFileCode }, // C++ as generic code icon
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    // { name: 'PHP', icon: faPhp },
    // { name: 'Java', icon: faJava },
    // { name: 'C++', icon: faFileCode }, // C++ as generic code icon
    // { name: 'HTML', icon: faHtml5 },
    // { name: 'CSS', icon: faCss3 },
    // { name: 'JavaScript', icon: faJs },
  ];

  return (
    <nav className="sidebar">
     
      {topics.map((lang, index) => (
        <button
          key={lang.name}
          className={`nav-item ${selected === index ? 'selected' : ''}`}
          onClick={() => setSelected(index)}
        >
          <FontAwesomeIcon icon={lang.icon} className="icon" />
          <span className="name">{lang.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
