import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
  {
    question:"1. Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
    options: ["4", "7", "9", "13"],
    answer: "7",
    explanation: "The required number is (91 - 43) = 48; H.C.F of 48, (183 - 91) = 92 and (183 - 43) = 140 is 7.",
  },
  {
    question:"2. Which of the following fraction is the largest?",
    options: ["7/8", "13/16", "31/40", "63/80"],
    answer: "7/8",
    explanation: "Convert each fraction to a decimal: 7/8 = 0.875, 13/16 = 0.8125, 31/40 = 0.775, 63/80 = 0.7875. 7/8 is the largest.",
  },
  {
    question: "3. .009/? = .01",
    options: [".0009", ".09", ".9", "9"],
    answer: ".9",
    explanation: "0.009 / 0.01 = 0.9.",
  },
  {
    question: "4. The least perfect square, which is divisible by each of 21, 36 and 66 is:",
    options: ["213444", "214344", "214434", "231444"],
    answer: "213444",
    explanation: "The least perfect square divisible by 21, 36, and 66 is 213444.",
  },
  {
    question: "5. If x = √3 + 1 / √3 - 1 and y = √3 - 1 / √3 + 1, then the value of (x^2 + y^2) is:",
    options: ["10", "13", "14", "15"],
    answer: "14",
    explanation: "(√3 + 1 / √3 - 1)^2 + (√3 - 1 / √3 + 1)^2 = 14.",
  },
  {
    question: "6. What is Arun's present age? \bI. Five years ago, Arun's age was double that of his son's age at that time.\bII. Present ages of Arun and his son are in the ratio of 11 : 6 respectively.\bIII.Five years hence, the respective ratio of Arun's age and his son's age will become 12 : 7.",
    options: ["Only I and II", "Only II and III", "Only I and III", "Any two of the three", "None of these"],
    direction: "Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question.",
    answer: "Only I and II",
    explanation: "Only I and II are necessary to answer the question.",
  },
  {
    question: "7. If 20% of a = b, then b% of 20 is the same as:",
    options: ["4% of a", "5% of a", "20% of a", "None of these"],
    answer: "4% of a",
    explanation: "20% of a = b implies b = 0.2a. Then, b% of 20 = 0.2a% of 20 = 0.04a = 4% of a.",
  },
  {
    question: "8. If A = x% of y and B = y% of x, then which of the following is true?",
    options: ["A is smaller than B.", "A is greater than B", "Relationship between A and B cannot be determined.", "If x is smaller than y, then A is greater than B.", "None of these"],
    answer: "None of these",
    explanation: "A = (x/100) * y and B = (y/100) * x. Thus, A = B.",
  },
  {
    question: "9. 3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?",
    options: ["9", "10", "11", "12"],
    answer: "12",
    explanation: "3 pumps working 8 hours a day for 2 days = 48 pump-hours. 4 pumps need to work 12 hours a day to achieve the same result in 1 day.",
  },
  {
    question: "10. One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
    options: ["81 min.", "108 min.", "144 min.", "192 min."],
    answer: "144 min.",
    explanation: "Let the slower pipe take x minutes. Then the faster pipe takes x/3 minutes. (1/x + 3/x) * 36 = 1. Solving for x, x = 144 minutes.",
  },
  {
    question: "11. A motorboat, whose speed in 15 km/hr in still water goes 30 km downstream and comes back in a total of 4 hours 30 minutes. The speed of the stream (in km/hr) is:",
    options: ["4", "5", "6", "10"],
    answer: "5",
    explanation: "Speed of boat in still water = 15 km/hr. Let speed of stream be x km/hr. Then, 30/(15 + x) + 30/(15 - x) = 4.5 hours. Solving, x = 5 km/hr.",
  },
  {
    question: "12. A man took loan from a bank at the rate of 12% p.a. simple interest. After 3 years he had to pay Rs. 5400 interest only for the period. The principal amount borrowed by him was:",
    options: ["Rs. 2000", "Rs. 10,000", "Rs. 15,000", "Rs. 20,000"],
    answer: "Rs. 15,000",
    explanation: "Simple Interest = PRT/100. Here, SI = 5400, R = 12, T = 3. Solving for P, P = 15000.",
  },
  {
    question: "13. A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
    options: ["20", "24", "30", "33"],
    answer: "30",
    explanation: "The diagonal of a square is √2 times the side. Percent saved = ((2 - √2)/2) * 100 = 30%.",
  },
  {
    question: "14. By investing in 16*2/3% stock at 64, one earns Rs. 1500. The investment made is:",
    options: ["Rs. 5640", "Rs. 5760", "Rs. 7500", "Rs. 9600"],
    answer: "Rs. 9600",
    explanation: "Let the investment be Rs. x. Then, (16 2/3)% of x = 1500. Solving, x = 9600.",
  },
  {
    question: "15. A man buys a watch for Rs. 1950 in cash and sells it for Rs. 2200 at a credit of 1 year. If the rate of interest is 10% per annum, the man:",
    options: ["gains Rs. 55", "gains Rs. 50", "loses Rs. 30", "gains Rs. 30"],
    answer: "gains Rs. 50",
    explanation: "S.P. = Rs. 2200. C.P. = Rs. 2200 / 1.10 = Rs. 2000. Gain = Rs. 50.",
  },
  {
    question: "16. Find the odd man out: 10, 25, 45, 54, 60, 75, 80",
    options: ["10", "45", "54", "75"],
    answer: "54",
    explanation: "All other numbers are divisible by 5 except 54.",
  },
  {
    question: "17. Find out the wrong number in the given sequence of numbers: 36, 54, 18, 27, 9, 18.5, 4.5",
    options: ["4.5", "18.5", "54", "18"],
    answer: "18.5",
    explanation: "Except 18.5, all other numbers are multiples of 9.",
  },
  {
    question: "18. What should come in place of the question mark (?) in the following number series? 11, 13, 17, 19, 23, 25, ?",
    options: ["27", "29", "31", "37"],
    answer: "29",
    explanation: "This is a series of prime numbers with alternate even numbers. 11, 13, 17, 19, 23, 25, 29.",
  },
  {
    question: "19. Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
    options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
    answer: "(1/8)",
    explanation: "This is a geometric series with a common ratio of 1/2.",
  },
  {
    question: "20. A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    options: ["120 metres", "180 metres", "324 metres", "150 metres"],
    answer: "150 metres",
    explanation: "Speed = 60 km/hr = 60 * (5/18) m/s = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters.",
  },
];

const AptitudeTest1 = () => {
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


export default AptitudeTest1;