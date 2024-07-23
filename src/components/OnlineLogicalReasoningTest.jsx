import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineLogicalReasoningTest = () => {
  const navigate = useNavigate();

  const testTopics = [
    // { name: 'RandomTest', path: '/RandomTest' },
    { name: 'LogicalReasoning1', path: '/LogicalReasoning1' },
    { name: 'LogicalReasoning2', path: '/LogicalReasoning2' },
    { name: 'LogicalReasoning3', path: '/LogicalReasoning3' },
    { name: 'LogicalReasoning4', path: '/LogicalReasoning4' },
    { name: 'LogicalReasoning5', path: '/LogicalReasoning5' },
    { name: 'LogicalReasoning6', path: '/LogicalReasoning6' },
    { name: 'LogicalReasoning7', path: '/LogicalReasoning7' },
    { name: 'LogicalReasoning8', path: '/LogicalReasoning8' },
    { name: 'LogicalReasoning9', path: '/LogicalReasoning9' },
    { name: 'LogicalReasoning10', path: '/LogicalReasoning10' },
    { name: 'LogicalReasoningRandom', path: '/LogicalReasoningRandom' },

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

export default OnlineLogicalReasoningTest;
