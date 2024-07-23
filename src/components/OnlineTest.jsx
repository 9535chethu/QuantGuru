import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineTest.css';

const OnlineTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    { name: 'Online Aptitude Test', path: '/online-aptitude-test' },
    { name: 'Online Verbal Ability Test', path: '/online-verbal-ability-test' },
    { name: 'Online Logical Reasoning Test', path: '/online-logical-reasoning-test' },
    { name: 'Online General Knowledge Test', path: '/online-general-knowledge-test' },
    { name: 'Online Verbal Reasoning Test', path: '/online-verbal-reasoning-test' },
    // { name: 'Online Non Verbal Reasoning Test', path: '/online-non-verbal-reasoning-test' },
    // { name: 'Online Data Interpretation Test', path: '/online-data-interpretation-test' },
    
  ];

  return (
    <div className="test-topics">
      <h1>Online Tests</h1>
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

export default OnlineTest;
