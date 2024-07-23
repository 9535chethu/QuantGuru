import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "The product of two numbers is 2028 and their H.C.F. is 13. The number of such pairs is:",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
    },
    {
        question: "What will be the least number which when doubled will be exactly divisible by 12, 18, 21 and 30?",
        options: [
            "196",
            "630",
            "1260",
            "2520"
        ],
    },
    {
        question: "The sum of the digits of a two-digit number is 15 and the difference between the digits is 3. What is the two-digit number?",
        options: [
            "69",
            "78",
            "96",
            "Cannot be determined",
            "None of these"
        ],
    },
    {
        question: "A number consists of two digits. If the digits interchange places and the new number is added to the original number, then the resulting number will be divisible by:",
        options: [
            "3",
            "5",
            "9",
            "11"
        ],
    },
    {
        question: "The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 36. What is the difference between the two digits of that number?",
        options: [
            "3",
            "4",
            "9",
            "Cannot be determined",
            "None of these"
        ],
    },
    {
        question: "If m and n are whole numbers such that m^n = 121, the value of (m - 1)^(n + 1) is:",
        options: [
            "1",
            "10",
            "121",
            "1000"
        ],
    },
    {
        question: "A shopkeeper sells some toys at Rs. 250 each. What percent profit does he make? To find the answer, which of the following information given in Statements I and II is/are necessary?. I. Number of toys sold.II. Cost price of each toy.",
        options: [
            "Only I is necessary",
            "Only II is necessary",
            "Both I and II are necessary",
            "Either I or II is necessary",
            "None of these"
        ],
    },
    {
        question: "A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?",
        options: [
            "230 m",
            "240 m",
            "260 m",
            "320 m",
            "None of these"
        ],
    },
    {
        question: "A train 108 m long moving at a speed of 50 km/hr crosses a train 112 m long coming from opposite direction in 6 seconds. The speed of the second train is:",
        options: [
            "48 km/hr",
            "54 km/hr",
            "66 km/hr",
            "82 km/hr"
        ],
    },
    {
        question: "What is the length of a running train crossing another 180 metre long train running in the opposite direction?",
        options: [
            "I. The relative speed of the two trains was 150 kmph.",
            "II. The trains took 9 seconds to cross each other.",
            "I alone sufficient while II alone not sufficient to answer",
            "II alone sufficient while I alone not sufficient to answer",
            "Either I or II alone sufficient to answer"
        ],
        direction:"Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements andGive answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question.Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question.Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question.Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question.Give answer(E) if the data in both Statements I and II together are necessary to answer the question."
    },
    {
        question: "Which of the following statements is not correct?",
        options: [
            "log10 10 = 1",
            "log (2 + 3) = log (2 x 3)",
            "log10 1 = 0",
            "log (1 + 2 + 3) = log 1 + log 2 + log 3"
        ],
    },
    {
        question: "The ratio between the perimeter and the breadth of a rectangle is 5 : 1. If the area of the rectangle is 216 sq. cm, what is the length of the rectangle?",
        options: [
            "16 cm",
            "18 cm",
            "24 cm",
            "Data inadequate",
            "None of these"
        ],
    },
    {
        question: "A rectangular park 60 m long and 40 m wide has two concrete crossroads running in the middle of the park and rest of the park has been used as a lawn. If the area of the lawn is 2109 sq. m, then what is the width of the road?",
        options: [
            "2.91 m",
            "3 m",
            "5.82 m",
            "None of these"
        ],
    },
    {
        question: "A boat having a length 3 m and breadth 2 m is floating on a lake. The boat sinks by 1 cm when a man gets on it. The mass of the man is:",
        options: [
            "12 kg",
            "60 kg",
            "72 kg",
            "96 kg"
        ],
    },
    {
        question: "A can run 22.5 m while B runs 25 m. In a kilometre race B beats A by:",
        options: [
            "100 m",
            "111.1/9 m",
            "25 m",
            "50 m"
        ],
    },
    {
        question: "In how many different ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?",
        options: [
            "810",
            "1440",
            "2880",
            "50400",
            "5760"
        ],
    },
    {
        question: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
        options: [
            "1/3",
            "3/4",
            "7/19",
            "8/21",
            "9/21"
        ],
    },
    {
        question: "Find the odd man out:",
        options: [
            "3, 5, 7, 12, 17, 19",
            "19",
            "17",
            "5",
            "12"
        ],
    },
    {
        question: "Find out the wrong number in the given sequence of numbers:",
        options: [
            "6, 13, 18, 25, 30, 37, 40",
            "25",
            "30",
            "37",
            "40"
        ],
    },
    {
        question: "Find out the wrong number in the series:",
        options: [
            "3, 7, 15, 39, 63, 127, 255, 511",
            "7",
            "15",
            "39",
            "63"
        ],
    }
];

const AptitudeTest8 = () => {
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

  
  export default AptitudeTest8;