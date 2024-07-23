import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
  {
    question: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
    options: ["200 m", "225 m", "245 m", "250 m"],
  },
  {
    question: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
    options: ["120 m", "240 m", "300 m", "360 m"],
  },
  {
    question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    options: ["0", "1", "10", "19"],
  },
  {
    question: "A and B together can complete a work in 12 days. A alone can complete it in 20 days. If B does the work only for half a day daily, then in how many days A and B together will complete the work?",
    options: ["8 days", "10 days", "12 days", "16 days"],
  },
  {
    question: "A shopkeeper sold a T.V. set for Rs.17,940 with a discount of 8% and earned a profit of 19.6%. What would have been the percentage of profit earned if no discount was offered?",
    options: ["24.8%", "25%", "26.4%", "28%"],
  },
  {
    question: "Find the average of all the numbers between 6 and 34 which are divisible by 5.",
    options: ["18", "20", "22", "24"],
  },
  {
    question: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
    options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
  },
  {
    question: "A boat covers 20 km upstream and 60 km downstream in 6 hours, while it covers 30 km upstream and 80 km downstream in 8 hours. The speed of the boat in still water is:",
    options: ["5 km/hr", "7 km/hr", "8 km/hr", "10 km/hr"],
  },
  {
    question: "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?",
    options: ["Rs. 4462.50", "Rs. 8032.50", "Rs. 8900", "Rs. 8925"],
  },
  {
    question: "What is the probability of getting a sum of 8 from two throws of a dice?",
    options: ["1/6", "2/16", "5/36", "1/8"],
  },
  {
    question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
    options: ["4", "7", "9", "13"],
  },
  {
    question: "The least number which when divided by 5, 6, 7 and 8 leaves a remainder 3, but when divided by 9 leaves no remainder, is:",
    options: ["1677", "1683", "2523", "3363"],
  },
  {
    question: "617 + 6.017 + 0.617 + 6.0017 = ?",
    options: ["6.2963", "62.965", "629.6357", "None of these"],
  },
  {
    question: "If 144 = 14.4, then the value of x is:",
    options: ["0.144x", "0.0144", "1.44", "14.4"],
  },
  {
    question: "3 - (1/3)^2 simplifies to:",
    options: ["3", "4", "3.5", "4.5"],
  },
  {
    question: "The captain of a cricket team of 11 members is 26 years old and the wicket keeper is 3 years older. If the ages of these two are excluded, the average age of the remaining players is one year less than the average age of the whole team. What is the average age of the team?",
    options: ["23 years", "24 years", "25 years", "None of these"],
  },
  {
    question: "The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).",
    options: ["8, 20, 28", "16, 28, 36", "20, 35, 45", "None of these"],
  },
  {
    question: "Divya is twice as old as Shruti. What is the difference in their ages?",
    options: ["Five years hence, the ratio of their ages would be 9 : 5.", "Ten years back, the ratio of their ages was 3 : 1.", "Either I or II alone sufficient to answer", "Both I and II are necessary to answer"],
  },
  {
    question: "(256)^0.16 x (256)^0.09 = ?",
    options: ["4", "16", "64", "256.25"],
  },
  {
    question: "A starts business with Rs. 3500 and after 5 months, B joins with A as his partner. After a year, the profit is divided in the ratio 2 : 3. What is B's contribution in the capital?",
    options: ["Rs. 7500", "Rs. 8000", "Rs. 8500", "Rs. 9000"],
  },
  {
    question: "Three partners shared the profit in a business in the ratio 5 : 7 : 8. They had partnered for 14 months, 8 months and 7 months respectively. What was the ratio of their investments?",
    options: ["5 : 7 : 8", "20 : 49 : 64", "38 : 28 : 21", "None of these"],
  },
];


const AptitudeTest7 = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1200); // 20 minutes in seconds
  const [timerStopped, setTimerStopped] = useState(true);
  const [popupAcknowledged, setPopupAcknowledged] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
      if (!popupAcknowledged) {
          const userAcknowledged = window.confirm("You have 20 minutes to answer 20 questions. Your time starts now.");
          if (userAcknowledged) {
              setPopupAcknowledged(true);
              setTimerStopped(false);
          }
      }
  }, [popupAcknowledged]);

  useEffect(() => {
      if (!timerStopped) {
          const timer = setInterval(() => {
              setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
          }, 1000);
          return () => clearInterval(timer);
      }
  }, [timerStopped]);

  useEffect(() => {
      if (remainingTime === 0 && !timerStopped) {
          handleSubmit();
      }
  }, [remainingTime, timerStopped]);

  const handleOptionChange = (questionIndex, option) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = option;
      setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
      setTimeTaken(1200 - remainingTime);
      calculateScore();
      setShowScore(true);
      setTimerStopped(true);
  };

  const calculateScore = () => {
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    window.alert(`Your score is ${newScore} out of ${questions.length}. Time taken: ${formatTime(timeTaken)}.`);
  };  

  const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes} minutes ${seconds} seconds`;
  };

  const getAnswerColor = (index, option) => {
      if (showScore) {
          const correctAnswer = questions[index].answer;
          if (correctAnswer === option) {
              return 'green';
          } else if (selectedOptions[index] === option) {
              return 'red';
          }
      }
      return 'inherit';
  };

  const handleRetryTest = () => {
      setShowScore(false);
      setSelectedOptions(Array(questions.length).fill(''));
      setScore(0);
      setRemainingTime(1200);
      setTimerStopped(false);
  };

  return (
      <Container>
          <div className="timer-container">
              <Typography variant="h6">Time Remaining: {formatTime(remainingTime)}</Typography>
          </div>
          {showScore ? (
              <div>
                  <Typography variant="h5">Your score is {score} out of {questions.length}</Typography>
                  {questions.map((question, index) => (
                      <Card key={index} className="question-card">
                          <CardContent>
                              <Typography variant="h5">{question.question}</Typography>
                              {question.direction && (
                                  <Typography variant="body1" style={{ marginBottom: '10px', fontStyle: 'italic' }}>
                                      {question.direction}
                                  </Typography>
                              )}
                              <RadioGroup>
                                  {question.options.map((option, i) => (
                                      <FormControlLabel
                                          key={i}
                                          control={
                                              <Radio
                                                  checked={selectedOptions[index] === option}
                                                  disabled
                                              />
                                          }
                                          label={
                                              <Typography style={{ color: getAnswerColor(index, option) }}>
                                                  {option}
                                              </Typography>
                                          }
                                      />
                                  ))}
                              </RadioGroup>
                              <Typography variant="body2" style={{ marginTop: '10px' }}>
                                  <strong>Answer:</strong> {questions[index].answer}
                              </Typography>
                              <Typography variant="body2">
                                  <strong>Explanation:</strong> {questions[index].explanation}
                              </Typography>
                          </CardContent>
                      </Card>
                  ))}
                  <div className="score-card">
                      <Typography variant="h6">Time Taken: {formatTime(timeTaken)}</Typography>
                  </div>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={handleRetryTest}
                  >
                      Retry Test
                  </Button>
              </div>
          ) : (
              <div>
                  {questions.map((question, index) => (
                      <Card key={index} className="question-card">
                          <CardContent>
                              <Typography variant="h5">{question.question}</Typography>
                              {question.direction && (
                                  <Typography variant="body1" style={{ marginBottom: '10px', fontStyle: 'italic' }}>
                                      {question.direction}
                                  </Typography>
                              )}
                              <RadioGroup
                                  value={selectedOptions[index]}
                                  onChange={(e) => handleOptionChange(index, e.target.value)}
                              >
                                  {question.options.map((option, i) => (
                                      <FormControlLabel
                                          key={i}
                                          control={
                                              <Radio
                                                  disabled={remainingTime === 0}
                                              />
                                          }
                                          label={option}
                                          value={option}
                                      />
                                  ))}
                              </RadioGroup>
                          </CardContent>
                      </Card>
                  ))}
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      disabled={remainingTime === 0}
                  >
                      Submit
                  </Button>
              </div>
          )}
      </Container>
  );
};

export default AptitudeTest7;
