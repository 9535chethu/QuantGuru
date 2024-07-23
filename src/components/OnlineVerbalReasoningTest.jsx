import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineVerbalReasoningTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    { name: 'VerbalReasoningTest1', path: '/VerbalReasoningTest1' },
    { name: 'VerbalReasoningTest2', path: '/VerbalReasoningTest2' },
    { name: 'VerbalReasoningTest3', path: '/VerbalReasoningTest3' },
    { name: 'VerbalReasoningTest4', path: '/VerbalReasoningTest4' },
    { name: 'VerbalReasoningTest5', path: '/VerbalReasoningTest5' },
    { name: 'VerbalReasoningTest6', path: '/VerbalReasoningTest6' },
    { name: 'VerbalReasoningTest7', path: '/VerbalReasoningTest7' },
    { name: 'VerbalReasoningTest8', path: '/VerbalReasoningTest8' },
    { name: 'VerbalReasoningTest9', path: '/VerbalReasoningTest9' },
    { name: 'VerbalReasoningTest10', path: '/VerbalReasoningTest10' },


  ];

  return (<div className="test-topics">
    <h1>Online Verbal Reasoning Test</h1>
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

export default OnlineVerbalReasoningTest;
