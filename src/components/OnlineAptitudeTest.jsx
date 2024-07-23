import React from 'react';

import { useNavigate } from 'react-router-dom';

const OnlineAptitudeTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    { name: 'RandomTest', path: '/RandomTest' },
    { name: 'AptitudeTest1', path: '/AptitudeTest1' },
    { name: 'AptitudeTest2', path: '/AptitudeTest2' },
    { name: 'AptitudeTest3', path: '/AptitudeTest3' },
    { name: 'AptitudeTest4', path: '/AptitudeTest4' },
    { name: 'AptitudeTest5', path: '/AptitudeTest5' },
    { name: 'AptitudeTest6', path: '/AptitudeTest6' },
    { name: 'AptitudeTest7', path: '/AptitudeTest7' },
    { name: 'AptitudeTest8', path: '/AptitudeTest8' },
    { name: 'AptitudeTest9', path: '/AptitudeTest9' },
    { name: 'AptitudeTest10', path: '/AptitudeTest10' },
  ];

  return (<div className="test-topics">
    <h1>Online Aptitude test</h1>
    <ul>
      {testTopics.map((topic) => (
        <li key={topic.name}>
          <button onClick={() => navigate(topic.path)}>
            {topic.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default OnlineAptitudeTest;
