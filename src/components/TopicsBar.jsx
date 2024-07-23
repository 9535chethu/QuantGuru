import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TopicsBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTopic, setActiveTopic] = useState("");

  const topics = [
    { name: "Arithmetic Problems", path: "/arithmetic-problems" },
    { name: "Verbal Ability", path: "/verbal-ability" },
    { name: "Aptitude", path: "/aptitude" },
    { name: "Ace Placements", path: "/ace-placements" },
    { name: "Career Success", path: "/career-success" },
    { name: "Marketing", path: "/marketing" },
    { name: "Online Test", path: "/online-test" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTopic("");
    }
  }, [location]);

  const handleTopicClick = (path, name) => {
    navigate(path);
    setActiveTopic(name);
  };

  return (
    <div className="topics-bar">
      {topics.map((topic) => (
        <button
          key={topic.name}
          className={`topic-button ${activeTopic === topic.name ? "active" : ""}`}
          onClick={() => handleTopicClick(topic.path, topic.name)}
        >
          {topic.name}
        </button>
      ))}
    </div>
  );
};

export default TopicsBar;
