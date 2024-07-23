import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';
const questions = [
  {
    question: "A fires 5 shots to B's 3 but A kills only once in 3 shots while B kills once in 2 shots. When B has missed 27 times, A has killed:",
    options: ["30 birds", "60 birds", "72 birds", "90 birds"],
    answer: "30 birds",
    explanation: "Let the total number of shots be x. Then, shots fired by A = (5/8)x, shots fired by B = (3/8)x. Killing shots by A = (1/3) * (5/8)x = (5/24)x. Shots missed by B = (1/2) * (3/8)x = (3/16)x. (3/16)x = 27 or x = (27 * 16) / 3 = 144. Birds killed by A = (5/24)x = (5/24) * 144 = 30."
  },
  {
    question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
    options: ["16 years", "18 years", "20 years", "Cannot be determined"],
    answer: "16 years",
    explanation: "Let the ages of Kunal and Sagar 6 years ago be 6x and 5x years respectively. Then, (6x + 6) + 4 / (5x + 6) + 4 = 11 / 10. 10(6x + 10) = 11(5x + 10). 5x = 10. x = 2. Sagar's present age = (5x + 6) = 16 years."
  },
  {
    question: "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?",
    options: ["1 year", "2 years", "25 years", "Data inadequate"],
    answer: "Data inadequate",
    explanation: "Given that: 1. The difference of age between R and Q = The difference of age between Q and T. 2. Sum of age of R and T is 50 i.e. (R + T) = 50. R - Q = Q - T, (R + T) = 2Q. Now given that, (R + T) = 50, So, 50 = 2Q and therefore Q = 25. Question is (R - Q) = ?. Here we know the value (age) of Q (25), but we don't know the age of R. Therefore, (R - Q) cannot be determined."
  },
  {
    question: "1 + 1 = ?",
    options: ["0", "1", "2", "1"],
    answer: "2",
    explanation: "This is a simple addition problem. 1 + 1 = 2."
  },
  {
    question: "1 + 1 + 1 = ?",
    options: ["0", "1", "xa - b - c", "None of these"],
    answer: "None of these",
    explanation: "This is a simple addition problem. 1 + 1 + 1 = 3, which is not listed among the options."
  },
  {
    question: "Simran started a software business by investing Rs. 50,000. After six months, Nanda joined her with a capital of Rs. 80,000. After 3 years, they earned a profit of Rs. 24,500. What was Simran's share in the profit?",
    options: ["Rs. 9,423", "Rs. 10,250", "Rs. 12,500", "Rs. 10,500"],
    answer: "Rs. 10,500",
    explanation: "Simran : Nanda = (50000 x 36) : (80000 x 30) = 3 : 4. Simran's share = (24500 x 3) / 7 = Rs. 10,500."
  },
  {
    question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
    options: ["12 days", "15 days", "16 days", "18 days"],
    answer: "15 days",
    explanation: "A's 2 days' work = (1/20) x 2 = 1/10. (A + B + C)'s 1 day's work = (1/20) + (1/30) + (1/60) = 1/10. Work done in 3 days = (1/10) + (1/10) = 1/5. Now, 1/5 work is done in 3 days. Whole work will be done in (3 x 5) = 15 days."
  },
  {
    question: "Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
    options: ["8 kmph", "11 kmph", "12 kmph", "14 kmph"],
    answer: "12 kmph",
    explanation: "Let the distance travelled by x km. Then, x/10 - x/15 = 2. 3x - 2x = 60. x = 60 km. Time taken to travel 60 km at 10 km/hr = 60/10 = 6 hrs. So, Robert started 6 hours before 2 P.M. i.e., at 8 A.M. Required speed = 60 km / 5 hrs = 12 kmph."
  },
  {
    question: "A man rows to a place 48 km distant and come back in 14 hours. He finds that he can row 4 km with the stream in the same time as 3 km against the stream. The rate of the stream is:",
    options: ["1 km/hr", "1.5 km/hr", "2 km/hr", "2.5 km/hr"],
    answer: "1 km/hr",
    explanation: "Suppose he moves 4 km downstream in x hours. Then, Speed downstream = 4/x km/hr. Speed upstream = 3/x km/hr. 48/4 + 48/3 = 14 or x = 1/2. So, Speed downstream = 8 km/hr, Speed upstream = 6 km/hr. Rate of the stream = 1/2(8 - 6) km/hr = 1 km/hr."
  },
  {
    question: "In what ratio must a grocer mix two varieties of pulses costing Rs. 15 and Rs. 20 per kg respectively so as to get a mixture worth Rs. 16.50 kg?",
    options: ["3 : 7", "5 : 7", "7 : 3", "7 : 5"],
    answer: "7 : 3",
    explanation: "By the rule of alligation: Cost of 1 kg pulses of 1st kind Rs. 15, Cost of 1 kg pulses of 2nd kind Rs. 20, Mean Price Rs. 16.50. 3.50 : 1.50 = 7 : 3."
  },
  {
    question: "If log a/b + log b/a = log (a + b), then:",
    options: ["a = b", "a + b = 1", "a - b = 1", "a^2 - b^2 = 1"],
    answer: "a + b = 1",
    explanation: "log a/b + log b/a = log (a + b) implies log (a + b) = log (a x b) = log 1. So, a + b = 1."
  },
  {
    question: "In a race of 200 m, A can beat B by 31 m and C by 18 m. In a race of 350 m, C will beat B by:",
    options: ["22.75 m", "25 m", "19.5 m", "7 4/7 m"],
    answer: "25 m",
    explanation: "A : B = 200 : 169. A : C = 200 : 182. C = (C x A) / (200 x 169). When C covers 182 m, B covers 169 m. When C covers 350 m, B covers (169 x 350) / 182 m = 325 m. Therefore, C beats B by (350 - 325) m = 25 m."
  },
  {
    question: "If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004?",
    options: ["Sunday", "Saturday", "Tuesday", "Wednesday"],
    answer: "Sunday",
    explanation: "The year 2004 is a leap year. So, it has 2 odd days. But, Feb 2004 not included because we are calculating from March 2004 to March 2005. So it has 1 odd day only. The day on 6th March, 2005 will be 1 day beyond the day on 6th March, 2004. Given that, 6th March, 2005 is Monday. 6th March, 2004 is Sunday (1 day before to 6th March, 2005)."
  },
  {
    question: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
    options: ["145°", "150°", "155°", "160°"],
    answer: "155°",
    explanation: "Angle traced by hour hand in 12 hrs = 360°. Angle traced by hour hand in 5 hrs 10 min. i.e., 31/6 hrs = (360 x 31) / 12 = 155°."
  },
  {
    question: "An accurate clock shows 8 o'clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?",
    options: ["144°", "150°", "168°", "180°"],
    answer: "180°",
    explanation: "Angle traced by the hour hand in 6 hours = (360 x 6) / 12 = 180°."
  },
  {
    question: "The market value of a 10.5% stock, in which an income of Rs. 756 is derived by investing Rs. 9000, brokerage being 1/4%, is:",
    options: ["Rs. 108.25", "Rs. 112.20", "Rs. 124.75", "Rs. 125.25"],
    answer: "Rs. 124.75",
    explanation: "For an income of Rs. 756, investment = Rs. 9000. For an income of Rs. 21, investment = (9000 x 21) / 756 = Rs. 125. For a Rs. 100 stock, investment = Rs. 125. Market value of Rs. 100 stock = Rs. 125 - (1/4) = Rs. 124.75."
  },
  {
    question: "One card is drawn at random from a pack of 52 cards. What is the probability that the card drawn is a face card (Jack, Queen and King only)?",
    options: ["3/13", "1/4", "9/52", "1/13"],
    answer: "3/13",
    explanation: "Clearly, there are 52 cards, out of which there are 12 face cards. P (getting a face card) = 12/52 = 3/13."
  },
  {
    question: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
    options: ["1/221", "1/15", "25/57", "35/256"],
    answer: "1/221",
    explanation: "Let S be the sample space. Then, n(S) = 52C2 = (52 x 51) / (2 x 1) = 1326. Let E = event of getting 2 kings out of 4. n(E) = 4C2 = (4 x 3) / (2 x 1) = 6. P(E) = n(E) / n(S) = 6 / 1326 = 1 / 221."
  },
  {
    question: "The true discount on Rs. 2562 due 4 months hence is Rs. 122. The rate percent is:",
    options: ["12%", "13 1/3%", "15%", "14%"],
    answer: "15%",
    explanation: "P.W. = Rs. (2562 - 122) = Rs. 2440. S.I. on Rs. 2440 for 4 months is Rs. 122. Rate = (100 x 122) / (2440 x (1/3)) = 15%."
  },
  {
    question: "Find out the wrong number in the given sequence of numbers: 22, 33, 66, 99, 121, 279, 594",
    options: ["33", "121", "279", "594"],
    answer: "279",
    explanation: "Each of the numbers except 279 is a multiple of 11."
  }
];


const AptitudeTest4 = () => {
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

export default AptitudeTest4;