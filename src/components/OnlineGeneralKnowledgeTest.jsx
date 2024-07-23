import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineVerbalAbilityTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    { name: 'GeneralKnowledge1', path: '/GeneralKnowledge1' },
    { name: 'GeneralKnowledge2', path: '/GeneralKnowledge2' },
    { name: 'GeneralKnowledge3', path: '/GeneralKnowledge3' },
    { name: 'GeneralKnowledge4', path: '/GeneralKnowledge4' },
    { name: 'GeneralKnowledge5', path: '/GeneralKnowledge5' },
    { name: 'GeneralKnowledge6', path: '/GeneralKnowledge6' },
    { name: 'GeneralKnowledge7', path: '/GeneralKnowledge7' },
    { name: 'GeneralKnowledge8', path: '/GeneralKnowledge8' },
    { name: 'GeneralKnowledge9', path: '/GeneralKnowledge9' },
    { name: 'GeneralKnowledge10', path: '/GeneralKnowledge10' },

  ];

  return (<div className="test-topics">
    <h1>Online General Knowledge Test</h1>
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

export default OnlineVerbalAbilityTest;
