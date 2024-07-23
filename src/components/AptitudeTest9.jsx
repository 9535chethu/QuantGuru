import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:",
        options: [
            "4",
            "5",
            "6",
            "8"
        ],
        answer: "4",
        explanation: "N = H.C.F. of (4665 - 1305), (6905 - 4665) and (6905 - 1305) = H.C.F. of 3360, 2240 and 5600 = 1120. Sum of digits in N = (1 + 1 + 2 + 0) = 4"
    },
    {
        question: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
        options: [
            "76 kg",
            "76.5 kg",
            "85 kg",
            "Data inadequate",
            "None of these"
        ],
        answer: "85 kg",
        explanation: "Total weight increased = (8 x 2.5) kg = 20 kg. Weight of new person = (65 + 20) kg = 85 kg."
    },
    {
        question: "The difference between a two-digit number and the number obtained by interchanging the digits is 36. What is the difference between the sum and the difference of the digits of the number if the ratio between the digits of the number is 1 : 2?",
        options: [
            "4",
            "8",
            "16",
            "None of these"
        ],
        answer: "8",
        explanation: "Let ten's and unit's digits be 2x and x respectively. (10 * 2x + x) - (10x + 2x) = 36 => 9x = 36 => x = 4. Required difference = (2x + x) - (2x - x) = 2x = 8."
    },
    {
        question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        options: [
            "12 years",
            "14 years",
            "18 years",
            "20 years"
        ],
        answer: "20 years",
        explanation: "Let the present ages of son and father be x and (60 - x) years respectively. (60 - x) - 6 = 5(x - 6) => 54 - x = 5x - 30 => 6x = 84 => x = 14. Son's age after 6 years = (x + 6) = 20 years."
    },
    {
        question: "Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?",
        options: [
            "57%",
            "60%",
            "65%",
            "90%"
        ],
        answer: "57%",
        explanation: "Total number of votes polled = (1136 + 7636 + 11628) = 20400. Required percentage = (11628 / 20400) x 100% = 57%."
    },
    {
        question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        options: [
            "30%",
            "70%",
            "100%",
            "250%"
        ],
        answer: "70%",
        explanation: "Let C.P. = Rs. 100. Profit = Rs. 320, S.P. = Rs. 420. New C.P. = 125% of Rs. 100 = Rs. 125. New S.P. = Rs. 420. Profit = Rs. (420 - 125) = Rs. 295. Required percentage = (295 / 420) x 100% ≈ 70%."
    },
    {
        question: "If the cost of x metres of wire is d rupees, then what is the cost of y metres of wire at the same rate?",
        options: [
            "Rs. (xy/d)",
            "Rs. (xd)",
            "Rs. (yd)",
            "Rs. (yd/x)"
        ],
        answer: "Rs. (yd/x)",
        explanation: "Cost of x metres = Rs. d. Cost of 1 metre = Rs. (d / x). Cost of y metres = Rs. (d / x) * y = Rs. (yd / x)."
    },
    {
        question: "A flagstaff 17.5 m high casts a shadow of length 40.25 m. The height of the building, which casts a shadow of length 28.75 m under similar conditions will be:",
        options: [
            "10 m",
            "12.5 m",
            "17.5 m",
            "21.25 m"
        ],
        answer: "12.5 m",
        explanation: "Let the height of the building be x metres. 40.25 : 28.75 :: 17.5 : x => 40.25 * x = 28.75 * 17.5 => x = (28.75 * 17.5) / 40.25 => x = 12.5."
    },
    {
        question: "A 6% stock yields 8%. The market value of the stock is:",
        options: [
            "Rs. 75",
            "Rs. 96",
            "Rs. 133.33",
            "Rs. 150"
        ],
        answer: "Rs. 75",
        explanation: "For an income of Rs. 8, investment = Rs. 100. For an income of Rs. 6, investment = (100 * 6) / 8 = Rs. 75. Market value of Rs. 100 stock = Rs. 75."
    },
    {
        question: "A box contains 2 white balls, 3 black balls and 4 red balls. In how many ways can 3 balls be drawn from the box, if at least one black ball is to be included in the draw?",
        options: [
            "48",
            "64",
            "96",
            "None of these"
        ],
        answer: "64",
        explanation: "We may have (1 black and 2 non-black) or (2 black and 1 non-black) or (3 black). Required number of ways = (3C1 x 6C2) + (3C2 x 6C1) + (3C3) = 3 x (6 x 5) / 2 + 3 x 6 + 1 = 45 + 18 + 1 = 64."
    },
    {
        question: "Find the odd man out: 3, 5, 7, 12, 17, 19",
        options: [
            "3",
            "5",
            "7",
            "12",
            "17",
            "19"
        ],
        answer: "12",
        explanation: "All numbers except 12 are prime numbers."
    },
    {
        question: "Find out the wrong number in the given sequence of numbers: 6, 13, 18, 25, 30, 37, 40",
        options: [
            "6",
            "13",
            "18",
            "25",
            "30",
            "37",
            "40"
        ],
        answer: "30",
        explanation: "The sequence follows a pattern: add 7, add 5, add 7, add 5, add 7, add 5. Therefore, 30 is the wrong number, it should be 32."
    },
    {
        question: "Find out the wrong number in the series: 3, 7, 15, 39, 63, 127, 255, 511",
        options: [
            "3",
            "7",
            "15",
            "39",
            "63",
            "127",
            "255",
            "511"
        ],
        answer: "63",
        explanation: "The sequence follows a pattern of multiplying by 2 and adding 1, then multiplying by 2 and subtracting 1. The correct sequence should be: 3, 7, 15, 31, 63, 127, 255, 511. Therefore, 39 is the wrong number, it should be 31."
    }
];


const AptitudeTest9 = () => {
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

  
  export default AptitudeTest9;