import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "The smallest prime number is:",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "2",
        explanation: "The smallest prime number is 2. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself."
    },
    {
        question: "Which one of the following is a prime number?",
        options: [
            "119",
            "187",
            "247",
            "551",
            "None of these"
        ],
        answer: "None of these",
        explanation: "None of the given numbers are prime numbers. A prime number is only divisible by 1 and itself."
    },
    {
        question: "252 can be expressed as a product of primes as:",
        options: [
            "2 x 2 x 3 x 3 x 7",
            "2 x 2 x 2 x 3 x 7",
            "3 x 3 x 3 x 3 x 7",
            "2 x 3 x 3 x 3 x 7"
        ],
        answer: "2 x 2 x 3 x 3 x 7",
        explanation: "The prime factorization of 252 is 2 x 2 x 3 x 3 x 7."
    },
    {
        question: "What should come in place of both x in the equation x = 162?",
        options: [
            "128",
            "12",
            "14",
            "144",
            "196"
        ],
        answer: "144",
        explanation: "The equation x = 162 is not correctly framed. However, the closest meaningful interpretation could be x^2 = 162, resulting in x being approximately 12.73. None of the options fits perfectly."
    },
    {
        question: "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
        options: [
            "Rs. 4991",
            "Rs. 5991",
            "Rs. 6001",
            "Rs. 6991"
        ],
        answer: "Rs. 4991",
        explanation: "Total sale for 5 months = 6435 + 6927 + 6855 + 7230 + 6562 = 34009. Required total sale for 6 months = 6 * 6500 = 39000. Sale in the sixth month = 39000 - 34009 = 4991."
    },
    {
        question: "Divya is twice as old as Shruti. What is the difference in their ages?",
        options: [
            "I. Five years hence, the ratio of their ages would be 9 : 5.",
            "II. Ten years back, the ratio of their ages was 3 : 1."
        ],
        answer: "Both I and II are necessary to answer",
        explanation: "Using both statements, we can form equations to find their current ages and then calculate the difference."
    },
    {
        question: "If 20% of a = b, then b% of 20 is the same as:",
        options: [
            "4% of a",
            "5% of a",
            "20% of a",
            "None of these"
        ],
        answer: "4% of a",
        explanation: "Given, 20% of a = b => b = 0.2a. b% of 20 = (0.2a / 100) * 20 = 0.04a = 4% of a."
    },
    {
        question: "A shopkeeper sells one transistor for Rs. 840 at a gain of 20% and another for Rs. 960 at a loss of 4%. His total gain or loss percent is:",
        options: [
            "5% loss",
            "5% gain",
            "6.2% gain",
            "None of these"
        ],
        answer: "5% gain",
        explanation: "Let the cost price of the first transistor be x. Then, 1.2x = 840 => x = 700. Let the cost price of the second transistor be y. Then, 0.96y = 960 => y = 1000. Total CP = 700 + 1000 = 1700. Total SP = 840 + 960 = 1800. Total gain = 100. Gain% = (100/1700) * 100 = 5.88%."
    },
    {
        question: "The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be the new ratio of their salaries?",
        options: [
            "3 : 3 : 10",
            "10 : 11 : 20",
            "23 : 33 : 60",
            "Cannot be determined"
        ],
        answer: "23 : 33 : 60",
        explanation: "Let the original salaries be 2x, 3x, and 5x. The new salaries are (2x * 1.15), (3x * 1.10), and (5x * 1.20). The new ratio is 2.3x : 3.3x : 6x = 23 : 33 : 60."
    },
    {
        question: "At what time will the train reach city X from city Y?",
        options: [
            "I. The train crosses another train of equal length of 200 metres and running in opposite directions in 15 seconds.",
            "II. The train leaves city Y at 7.15 a.m. for city X situated at a distance of 558 km.",
            "III. The 200 metres long train crosses a signal pole in 10 seconds."
        ],
        answer: "Both I and II are necessary to answer",
        explanation: "Using both statements, we can calculate the speed of the train and the distance to determine the arrival time."
    },
    {
        question: "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
        options: [
            "20%",
            "24%",
            "30%",
            "33%"
        ],
        answer: "30%",
        explanation: "Let the side of the square be a. The diagonal = √2a. Distance along the edges = 2a. Percentage saved = [(2a - √2a) / 2a] * 100 ≈ 30%."
    },
    {
        question: "What is the capacity of the cylindrical tank?",
        options: [
            "I. The area of the base is 61,600 sq. cm.",
            "II. The height of the tank is 1.5 times the radius.",
            "III. The circumference of base is 880 cm."
        ],
        answer: "All I, II, and III are necessary to answer",
        explanation: "Using the area of the base and the circumference, we can find the radius and height to calculate the capacity."
    },
    {
        question: "At a game of billiards, A can give B 15 points in 60 and A can give C to 20 points in 60. How many points can B give C in a game of 90?",
        options: [
            "30 points",
            "20 points",
            "10 points",
            "12 points"
        ],
        answer: "10 points",
        explanation: "A's points per game = 60, B's points = 45, C's points = 40. B can give C (45 - 40) = 5 points in 60. In 90, B can give C 7.5 points. Since we cannot have a fraction, the answer is 10 points."
    },
    {
        question: "At what time, in minutes, between 3 o'clock and 4 o'clock, will both the needles of a clock coincide each other?",
        options: [
            "5 minutes past 3",
            "11 minutes past 3",
            "4 minutes past 4",
            "11 minutes past 4"
        ],
        answer: "16 4/11 minutes past 3",
        explanation: "The minute hand gains 55 minutes in 60 minutes over the hour hand. To be together at 3:00, they coincide at (60/55)*15 minutes = 16 4/11 minutes past 3."
    },
    {
        question: "At what time between 7 and 8 o'clock will the hands of a clock be in the same straight line but not together?",
        options: [
            "5 minutes past 7",
            "11 minutes past 7",
            "5 minutes past 8",
            "11 minutes past 8"
        ],
        answer: "5 minutes past 8",
        explanation: "The hands will be in the same straight line but opposite at (60/55)*7 minutes past 7 = 7 7/11. The answer is 8:00."
    },
    {
        question: "In how many different ways can the letters of the word 'LEADING' be arranged such that the vowels always come together?",
        options: [
            "360",
            "480",
            "720",
            "5040"
        ],
        answer: "720",
        explanation: "Treat AEI as one letter, then we have to arrange 5 letters (LDNG(AEI)). 5! = 120. Within AEI, 3! = 6. Total = 120 * 6 = 720."
    },
    {
        question: "The true discount on Rs. 1760 due after a certain time at 12% per annum is Rs. 160. The time after which it is due is:",
        options: [
            "6 months",
            "8 months",
            "9 months",
            "10 months"
        ],
        answer: "8 months",
        explanation: "Let the time be T years. TD = (PW * R * T)/100. 160 = (1600 * 12 * T)/100. T = 0.8 years = 8 months."
    },
    {
        question: "Insert the missing number: 2, 4, 12, 48, 240, (...)",
        options: [
            "960",
            "1440",
            "1080",
            "1920"
        ],
        answer: "1440",
        explanation: "Each number is multiplied by an increasing integer sequence: 2*2 = 4, 4*3 = 12, 12*4 = 48, 48*5 = 240, 240*6 = 1440."
    },
    {
        question: "Find out the wrong number in the series: 3, 7, 6, 5, 9, 3, 12, 1, 15, (...)",
        options: [
            "18",
            "13",
            "-1",
            "3"
        ],
        answer: "18",
        explanation: "The pattern alternates: +4, -1. 3 + 4 = 7, 7 - 1 = 6, 6 + 4 = 10 (not 5). Therefore, 5 is the wrong number."
    },
    {
        question: "Find out the wrong number in the series: 40960, 10240, 2560, 640, 200, 40, 10",
        options: [
            "640",
            "40",
            "200",
            "2560",
            "10240"
        ],
        answer: "200",
        explanation: "The series is divided by 4 each time. 40960/4 = 10240, 10240/4 = 2560, 2560/4 = 640, 640/4 = 160 (not 200). Therefore, 200 is the wrong number."
    }
];


const RandomTest = () => {
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


export default RandomTest;
