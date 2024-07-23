import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineVerbalAbilityTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    { name: 'VerbalTest1', path: '/VerbalTest1' },
    { name: 'VerbalTest2', path: '/VerbalTest2' },
    { name: 'VerbalTest3', path: '/VerbalTest3' },
    { name: 'VerbalTest4', path: '/VerbalTest4' },
    { name: 'VerbalTest5', path: '/VerbalTest5' },
    { name: 'VerbalTest6', path: '/VerbalTest6' },
    { name: 'VerbalTest7', path: '/VerbalTest7' },
    { name: 'VerbalTest8', path: '/VerbalTest8' },
    { name: 'VerbalTest9', path: '/VerbalTest9' },
    { name: 'VerbalTest10', path: '/VerbalTest10' },
    { name: 'VerbalRandom', path: '/VerbalRandom' },
  ];

  return (<div className="test-topics">
    <h1>Online VerbalAbility test</h1>
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
