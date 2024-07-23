import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
  {
    question: "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
    options: ["250", "276", "280", "285"],
    answer: "285",
    explanation: "Since the month begins with a Sunday, there will be five Sundays in the month. Required average = (510 x 5 + 240 x 25) / 30 = 285"
  },
  {
    question: "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:",
    options: ["3500", "4000", "4050", "5000"],
    answer: "4000",
    explanation: "Let P, Q, and R represent their respective monthly incomes. Then, we have: P + Q = (5050 x 2) = 10100, Q + R = (6250 x 2) = 12500, P + R = (5200 x 2) = 10400. Adding, we get: 2(P + Q + R) = 33000 or P + Q + R = 16500. Subtracting, we get P = 4000."
  },
  {
    question: "The sum of two numbers is 25 and their difference is 13. Find their product.",
    options: ["104", "114", "315", "325"],
    answer: "114",
    explanation: "Let the numbers be x and y. Then, x + y = 25 and x - y = 13. 4xy = (x + y)^2 - (x - y)^2 = 625 - 169 = 456. xy = 114."
  },
  {
    question: "What is the number? I. The sum of the two digits is 8. The ratio of the two digits is 1 : 3. II. The product of the two digits of a number is 12. The quotient of two digits is 3.",
    options: [
      "I alone sufficient while II alone not sufficient to answer",
      "II alone sufficient while I alone not sufficient to answer",
      "Either I or II alone sufficient to answer",
      "Both I and II are not sufficient to answer",
      "Both I and II are necessary to answer"
    ],
    direction: "Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question.",
    answer: "Either I or II alone sufficient to answer",
    explanation: "Let the tens and units digit be x and y respectively. Then, I. x + y = 8 and x / y = 1/3. I gives, 4y = 24, y = 6. So, x + 6 = 8, x = 2. II. xy = 12 and x / y = 3. II gives, x^2 = 36, x = 6. So, 3y = 6, y = 2. Therefore, Either I or II alone sufficient to answer."
  },
  {
    question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B, and C be 27, then how old is B?",
    options: ["7", "8", "9", "10", "11"],
    answer: "10",
    explanation: "Let C's age be x years. Then, B's age = 2x years. A's age = (2x + 2) years. (2x + 2) + 2x + x = 27. 5x = 25. x = 5. Hence, B's age = 2x = 10 years."
  },
  {
    question: "(17)^3.5 x (17)^? = 17^8",
    options: ["2.29", "2.75", "4.25", "4.5"],
    answer: "4.5",
    explanation: "Let (17)^3.5 x (17)^x = 17^8. Then, (17)^(3.5 + x) = 17^8. 3.5 + x = 8. x = (8 - 3.5). x = 4.5."
  },
  {
    question: "If x = 3 + 2√2, then the value of (√x - 1/√x) is:",
    options: ["x", "1", "2", "2√2", "3√3"],
    answer: "2",
    explanation: "√x - 1/√x = 2."
  },
  {
    question: "A and B together have Rs. 1210. If 4/15 of A's amount is equal to 2/3 of B's amount, how much amount does B have?",
    options: ["Rs. 460", "Rs. 484", "Rs. 550", "Rs. 664"],
    answer: "Rs. 484",
    explanation: "4/15 of A = 2/3 of B. A = (2/3) * (15/4) * B. A = (2/3) * (15/4) * B. A = (5/2) * B. A = 2.5B. So, A + B = 1210. 2.5B + B = 1210. 3.5B = 1210. B = 484."
  },
  {
    question: "Speed of a boat in still water is 9 km/hr and the speed of the stream is 1.5 km/hr. A man rows to a place at a distance of 105 km and comes back to the starting point. The total time taken by him is:",
    options: ["16 hours", "18 hours", "20 hours", "24 hours"],
    answer: "24 hours",
    explanation: "Speed upstream = 7.5 kmph. Speed downstream = 10.5 kmph. Total time taken = (105 / 7.5) + (105 / 10.5) = 24 hours."
  },
  {
    question: "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9% p.a. in 5 years. What is the sum?",
    options: ["Rs. 4462.50", "Rs. 8032.50", "Rs. 8900", "Rs. 8925", "None of these"],
    answer: "Rs. 8925",
    explanation: "Principal = (100 x 4016.25) / (9 x 5) = (401625) / 45 = Rs. 8925."
  },
  {
    question: "A person takes a loan of Rs. 200 at 5% simple interest. He returns Rs. 100 at the end of 1 year. In order to clear his dues at the end of 2 years, he would pay:",
    options: ["Rs. 105", "Rs. 110", "Rs. 115", "Rs. 115.50"],
    answer: "Rs. 115",
    explanation: "Amount to be paid = Rs. 100 + (200 x 5 x 1 / 100) + (100 x 5 x 1 / 100) = Rs. 115."
  },
  {
    question: "The difference between the length and breadth of a rectangle is 23 m. If its perimeter is 206 m, then its area is:",
    options: ["1520 m2", "2420 m2", "2480 m2", "2520 m2"],
    answer: "2520 m2",
    explanation: "We have: (l - b) = 23 and 2(l + b) = 206 or (l + b) = 103. Solving the two equations, we get: l = 63 and b = 40. Area = (l x b) = (63 x 40) m2 = 2520 m2."
  },
  {
    question: "What was the day of the week on 28th May, 2006?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    answer: "Sunday",
    explanation: "28 May, 2006 = (2005 years + Period from 1.1.2006 to 28.5.2006). Odd days in 1600 years = 0. Odd days in 400 years = 0. 5 years = (4 ordinary years + 1 leap year) = (4 x 1 + 1 x 2) 6 odd days. Jan. Feb. March April May (31 + 28 + 31 + 30 + 28 ) = 148 days. 148 days = (21 weeks + 1 day) 1 odd day. Total number of odd days = (0 + 0 + 6 + 1) = 7 0 odd day. Given day is Sunday."
  },
  {
    question: "The angle between the minute hand and the hour hand of a clock when the time is 8.30, is:",
    options: ["80°", "75°", "60°", "105°"],
    answer: "75°",
    explanation: "Angle traced by hour hand in 17/2 hrs = (360 x 17 / 12)° = 255°. Angle traced by min. hand in 30 min. = (360 x 30 / 60)° = 180°. Required angle = (255 - 180)° = 75°."
  },
  {
    question: "The angle between the minute hand and the hour hand of a clock when the time is 4.20, is:",
    options: ["0°", "10°", "5°", "20°"],
    answer: "10°",
    explanation: "Angle traced by hour hand in 13/3 hrs = (360 x 13 / 12)° = 130°. Angle traced by min. hand in 20 min. = (360 x 20 / 60)° = 120°. Required angle = (130 - 120)° = 10°."
  },
  {
    question: "At what angle the hands of a clock are inclined at 15 minutes past 5?",
    options: ["58 1/2°", "64°", "67 1/2°", "72 1/2°"],
    answer: "67 1/2°",
    explanation: "Angle traced by hour hand in 21/4 hrs = (360 x 21 / 12)° = 157 1/2°. Angle traced by min. hand in 15 min. = (360 x 15 / 60)° = 90°. Required angle = (157 1/2° - 90°) = 67 1/2°."
  },
  {
    question: "At what time between 9 and 10 o'clock will the hands of a watch be together?",
    options: ["45 min. past 9", "50 min. past 9", "49 1/11 min. past 9", "48 2/11 min. past 9"],
    answer: "49 1/11 min. past 9",
    explanation: "To be together between 9 and 10 o'clock, the minute hand has to gain 45 min. spaces. 55 min. spaces gained in 60 min. 45 min. spaces are gained in (60 x 45) / 55 min or 49 1/11 min. The hands are together at 49 1/11 min. past 9."
  },
  {
    question: "In how many ways can a group of 5 men and 2 women be made out of a total of 7 men and 3 women?",
    options: ["63", "90", "126", "45", "135"],
    answer: "63",
    explanation: "Required number of ways = (7C5 x 3C2) = (7C2 x 3C1) = (7 x 6 x 3) / (2 x 1) = 63."
  },
  {
    question: "Find out the wrong number in the given sequence of numbers: 8, 13, 21, 32, 47, 63, 83",
    options: ["47", "63", "32", "83"],
    answer: "47",
    explanation: "Go on adding 5, 8, 11, 14, 17, 20. So, the number 47 is wrong and must be replaced by 46."
  },
  {
    question: "Insert the missing number: 1, 4, 9, 16, 25, 36, 49, (....)",
    options: ["54", "56", "64", "81"],
    answer: "64",
    explanation: "Numbers are 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, 7^2. So, the next number is 8^2 = 64."
  },
];


const AptitudeTest3 = () => {
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


export default AptitudeTest3;