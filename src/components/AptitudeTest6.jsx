import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
  {
    question: "If the sum of two numbers is 55 and the H.C.F. and L.C.M. of these numbers are 5 and 120 respectively, then the sum of the reciprocals of the numbers is equal to:",
    options: ["55/601", "601/55", "11/120", "120/11"],
  },
  {
    question: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
    options: ["9000", "9400", "9600", "9800"],
  },
  {
    question: "If a = 0.1039, then the value of Sqrt(4a² - 4a + 1) + 3a is:",
    options: ["0.2078", "1.1039", "2.1039", "0.1039"],
  },
  {
    question: "What is the two-digit number?I. The difference between the two-digit number and the number formed by interchanging the digits is 27.II. The difference between the two digits is 3.III. The digit at unit's place is less than that at ten's place by 3.",
    options: ["I and II only", "I and III only", "All I, II and III", "I, and either II or III","Even with all I, II and III, answer cannot be give."],
    direction: "Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question.",
  },
  {
    question: "The product of two numbers is 9375 and the quotient, when the larger one is divided by the smaller, is 15. The sum of the numbers is:",
    options: ["380", "395", "400", "425"],
  },
  {
    question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
    options: ["24", "27", "40", "Cannot be determined","None of these"],
  },
  {
    question: "What is Sonia's present age?I. Sonia's present age is five times Deepak's present age.II. Five years ago her age was twenty-five times Deepak's age at that time.",
    options: ["SI alone sufficient while II alone not sufficient to answer", "II alone sufficient while I alone not sufficient to answer", "Either I or II alone sufficient to answer", "Both I and II are not sufficient to answer","Both I and II are necessary to answer"],
    direction: "Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements andGive answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question.Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question.Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question.Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question.Give answer(E) if the data in both Statements I and II together are necessary to answer the question.",
  },
  {
    question: "If 3^(x - y) = 27 and 3^(x + y) = 243, then x is equal to:",
    options: ["0", "2", "4", "6"],
  },
  {
    question: "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:",
    options: ["30%", "33 1/3%", "35%", "44%"],
  },
  {
    question: "What is the length of a running train?I. The train crosses a man in 9 seconds.II. The train crosses a 240 metre long platform in 24 seconds.",
    options: ["I alone sufficient while II alone not sufficient to answer", "II alone sufficient while I alone not sufficient to answer", "Either I or II alone sufficient to answer", "Both I and II are not sufficient to answer","Both I and II are necessary to answer"],
    direction: "Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements andGive answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question.Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question.Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question.Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question.Give answer(E) if the data in both Statements I and II together are necessary to answer the question.",
  },
  {
    question: "At what time will the train reach city X from city Y?I. The train crosses another train of equal length of 200 metres and running in opposite directions in 15 seconds.II. The train leaves city Y at 7.15 a.m. for city X situated at a distance of 558 km.III. The 200 metres long train crosses a signal pole in 10 seconds.",
    options: ["I only", "II only", "III only","II and III only", "All I, II and III are required"],
    direction :"Each of these questions is followed by three statements. You have to study the question and all the three statements given to decide whether any information provided in the statement(s) is redundant and can be dispensed with while answering the given question."
  },
  {
    question: "What is the speed of the boat in still water?I. The speed downstream is 12 kmph.II. The speed upstream is 4 kmph.III. In a to and fro journey between two points, the average speed of the boat was 6 kmph.",
    options: ["I and II only", "All I, II and III", "III, and either I or II", "Any two of the three","III, and either I or II"],
    direction :"Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question."
  },
  {
    question: "Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?",
    options: ["Rs. 6400", "Rs. 6500", "Rs. 7200", "Rs. 7500"],
  },
  {
    question: "What is the principal sum?I. The sum amounts to Rs. 690 in 3 years at S.I.II. The sum amounts to Rs. 750 in 5 years at S.I.III. The rate of interest is 5% p.a.",
    options: ["I and III only", "II and III only", "I and II only", "I and III only, or II and III only" ,"Any two of the three"],
    direction:"Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question."
  },
  {
    question: "66 cubic centimetres of silver is drawn into a wire 1 mm in diameter. The length of the wire in metres will be:",
    options: ["84", "90", "168", "336"],
  },
  {
    question: "The cost price of a Rs. 100 stock at 4 discount, when brokerage is 1 % is:",
    options: ["Rs. 95.75", "Rs. 96", "Rs. 96.25", "Rs. 104.25"],
  },
  {
    question: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
    options: ["564", "645", "735", "756","None of these"],
  },
  {
    question: "The true discount on a bill due 9 months hence at 16% per annum is Rs. 189. The amount of the bill is:",
    options: ["Rs. 1386", "Rs. 1764", "Rs. 1575", "Rs. 2268"],
  },
  {
    question: "Find the odd man out.  41, 43, 47, 53, 61, 71, 73, 81",
    options: ["61", "71", "73", "81"],
  }
];

const AptitudeTest6 = () => {
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


export default AptitudeTest6;