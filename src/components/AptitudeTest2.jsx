import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
  {
    question: "1. In a regular week, there are 5 working days and for each day, the working hours are 8. A man gets Rs. 2.40 per hour for regular work and Rs. 3.20 per hour for overtime. If he earns Rs. 432 in 4 weeks, then how many hours does he work for?",
    options: ["160", "175", "180", "195"],
    answer: "175",
    explanation: "Suppose the man works overtime for x hours. Now, working hours in 4 weeks = (5 x 8 x 4) = 160. 160 x 2.40 + x x 3.20 = 432. 3.20x = 432 - 384 = 48. x = 15. Hence, total hours of work = (160 + 15) = 175."
  },
  {
    question: "2. (√625 / 11 * 14 / √25 * 11 / √196) is equal to",
    options: ["5", "6", "8", "11"],
    answer: "5",
    explanation: "Given Expression = 25 x 14 x 11 = 5. 11 5 14"
  },
  {
    question: "3. In a cricket team, the average age of eleven players is 28 years. What is the age of the captain? I. The captain is eleven years older than the youngest player.,II. The average age of 10 players, other than the captain, is 27.3 years.,III. Leaving aside the captain and the youngest player, the average ages of three groups of three players each are 25 years, 28 years, and 30 years respectively.",
    options: [
      "Any two of the three",
      "All I, II and III",
      "II only or I and III only","II and III only","None of these"
    ],
    direction: "Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question.",
    answer: "II only or I and III only",
    explanation: "Total age of 11 players = (28 x 11) years = 308 years. I. C = Y + 11 C - Y = 11 .... (i) II. Total age of 10 players (excluding captain) = (27.3 x 10) years = 273 years. Age of captain = (308 - 273) years = 35 years. Thus, C = 35. .... (ii) From (i) and (ii), we get Y = 24. III. Total age of 9 players = [ (25 x 3) + (28 x 3) + (30 x 3)] years = 249 years. C + Y = (308 - 249) = 59 .... (iii) From (i) and (iii), we get C = 35. Thus, II alone gives the answer. Also, I and III together give the answer."
  },
  {
    question: "4. Find a positive number which when increased by 17 is equal to 60 times the reciprocal of the number.",
    options: ["3", "10", "17", "20"],
    answer: "3",
    explanation: "Let the number be x. Then, x + 17 = 60/x. x^2 + 17x - 60 = 0. (x + 20)(x - 3) = 0. x = 3."
  },
  {
    question: "5. In a two-digit number, if the unit's digit exceeds the ten's digit by 2 and the product of the number and the sum of its digits is equal to 144, then the number is:",
    options: ["24", "26", "42", "46"],
    answer: "24",
    explanation: "Let the ten's digit be x. Then, unit's digit = x + 2. Number = 10x + (x + 2) = 11x + 2. Sum of digits = x + (x + 2) = 2x + 2. (11x + 2)(2x + 2) = 144. 22x^2 + 26x - 140 = 0. 11x^2 + 13x - 70 = 0. (x - 2)(11x + 35) = 0. x = 2. Hence, required number = 11x + 2 = 24."
  },
  {
    question: "6. Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother, four years younger to her, was born. What is the difference between the ages of her parents?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    answer: "6 years",
    explanation: "Mother's age when Ayesha's brother was born = 36 years. Father's age when Ayesha's brother was born = (38 + 4) years = 42 years. Required difference = (42 - 36) years = 6 years."
  },
  {
    question: "7. What is the present age of Tanya? I. The ratio between the present ages of Tanya and her brother Rahul is 3 : 4 respectively.,II. After 5 years, the ratio between the ages of Tanya and Rahul will be 4 : 5.,III. Rahul is 5 years older than Tanya.",
    options: [
      "I and II only",
      "II and III only",
      "I and III only","All I, II and III","Any two of the three"
    ],
    direction: "Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question.",
    answer: "All I, II and III",
    explanation: "I. Let the present ages of Tanya and Rahul be 3x years and 4x years. II. After 5 years, (Tanya's age) : (Rahul's age) = 4 : 5. III. (Rahul's age) = (Tanya's age) + 5. From I and II, we get 3x + 5 / 4x + 5 = 4 / 5. This gives x. Tanya's age = 3x can be found. Thus, I and II give the answer. From I and III, we get 4x = 3x + 5. This gives x. Tanya's age = 3x can be found. Thus, I and III give the answer. From III : Let Tanya's present age be t years. Then Rahul's present age = (t + 5) years. Thus, from II and III, we get : t / (t + 5) = 4 / 5. This gives t. Thus, II and III give the answer."
  },
  {
    question: "8. In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
    options: ["2700", "2900", "3000", "3100"],
    answer: "2700",
    explanation: "Number of valid votes = 80% of 7500 = 6000. Valid votes polled by other candidate = 45% of 6000 = 2700."
  },
  {
    question: "9. A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of another variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
    options: ["No profit, no loss", "5%", "8%", "10%","None of these"],
    answer: "5%",
    explanation: "C.P. of 56 kg rice = Rs. (26 x 20 + 30 x 36) = Rs. (520 + 1080) = Rs. 1600. S.P. of 56 kg rice = Rs. (56 x 30) = Rs. 1680. Gain = (80 x 100) / 1600 % = 5%."
  },
  {
    question: "10. A man mixes two types of rice (X and Y) and sells the mixture at the rate of Rs. 17 per kg. Find his profit percentage. I. The rate of X is Rs. 20 per kg.,II. The rate of Y is Rs. 13 per kg",
    options: [
      "I alone sufficient while II alone not sufficient to answer",
      "II alone sufficient while I alone not sufficient to answer",
      "Either I or II alone sufficient to answer",
      "Both I and II are not sufficient to answer",
      "Both I and II are necessary to answer"
    ],
    direction: "Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements and Give answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question. Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question. Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question. Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question. Give answer(E) if the data in both Statements I and II together are necessary to answer the question.",
    answer: "Both I and II are not sufficient to answer",
    explanation: "The ratio, in which X and Y are mixed, is not given. So, both I and II together cannot give the answer."
  },
  {
    question: "11. An industrial loom weaves 0.128 metres of cloth every second. Approximately, how many seconds will it take for the loom to weave 25 metres of cloth?",
    options: ["178", "195", "204", "488"],
    answer: "195",
    explanation: "Let the required time be x seconds. More metres, More time (Direct Proportion). 0.128 : 25 :: 1 : x. 0.128x = 25 x 1. x = 25 / 0.128. x = 195.31. Required time = 195 sec (approximately)."
  },
  {
    question: "12. A takes twice as much time as B or thrice as much time as C to finish a piece of work. Working together, they can finish the work in 2 days. B can do the work alone in:",
    options: ["4 days", "6 days", "8 days", "12 days"],
    answer: "6 days",
    explanation: "Suppose A, B and C take x, x/2 and x/3 days respectively to finish the work. Then, 1/x + 2/x + 3/x = 1/2. 6/x = 1/2. x = 12. So, B takes (12/2) = 6 days to finish the work."
  },
  {
    question: "13. If log 27 = 1.431, then the value of log 9 is:",
    options: ["0.934", "0.945", "0.954", "0.958"],
    answer: "0.954",
    explanation: "log 27 = 1.431. log (3^3) = 1.431. 3 log 3 = 1.431. log 3 = 0.477. log 9 = log(3^2) = 2 log 3 = (2 x 0.477) = 0.954."
  },
  {
    question: "14. If log10 2 = 0.3010, the value of log10 80 is:",
    options: ["1.6020", "1.9030", "3.9030", "None of these"],
    answer: "1.9030",
    explanation: "log10 80 = log10 (8 x 10) = log10 8 + log10 10 = log10 (2^3) + 1 = 3 log10 2 + 1 = (3 x 0.3010) + 1 = 1.9030."
  },
  {
    question: "15. The ratio between the length and the breadth of a rectangular park is 3 : 2. If a man cycling along the boundary of the park at the speed of 12 km/hr completes one round in 8 minutes, then the area of the park (in sq. m) is:",
    options: ["15360", "153600", "30720", "307200"],
    answer: "153600",
    explanation: "Perimeter = Distance covered in 8 min. = (12000 x 8) / 60 m = 1600 m. Let length = 3x metres and breadth = 2x metres. Then, 2(3x + 2x) = 1600 or x = 160. Length = 480 m and Breadth = 320 m. Area = (480 x 320) m2 = 153600 m2."
  },
  {
    question: "16. The slant height of a right circular cone is 10 m and its height is 8 m. Find the area of its curved surface.",
    options: ["30pi m2", "40pi m2", "60pi m2", "80pi m2"],
    answer: "60pi m2",
    explanation: "l = 10 m, h = 8 m. So, r = sqrt(l^2 - h^2) = sqrt(10^2 - 8^2) = 6 m. Curved surface area = πrl = (π x 6 x 10) m2 = 60π m2."
  },
  {
    question: "17. A man wants to sell his scooter. There are two offers, one at Rs. 12,000 cash and the other a credit of Rs. 12,880 to be paid after 8 months, money being at 18% per annum. Which is the better offer?",
    options: ["Rs. 12,000 in cash", "Rs. 12,880 at credit", "Both are equally good"],
    answer: "Rs. 12,000 in cash",
    explanation: "P.W. of Rs. 12,880 due 8 months hence = Rs. 12880 x 100 / (100 + 18 x 8 / 12) = Rs. 12880 x 100 / 112 = Rs. 11500."
  },
  {
    question: "18. The banker's discount of a certain sum of money is Rs. 72 and the true discount on the same sum for the same time is Rs. 60. The sum due is:",
    options: ["Rs. 360", "Rs. 432", "Rs. 540", "Rs. 1080"],
    answer: "Rs. 360",
    explanation: "Sum = B.D. x T.D. / (B.D. - T.D.) = Rs. 72 x 60 / (72 - 60) = Rs. 72 x 60 / 12 = Rs. 360."
  },
  {
    question: "19. A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?",
    options: ["4 sqrt(3) units", "8 units", "12 units", "Data inadequate"],
    answer: "Data inadequate",
    explanation: "One of AB, AD and CD must have given. So, the data is inadequate."
  },
  {
    question: "20. Insert the missing number: 8, 7, 11, 12, 14, 17, 17, 22, (....)",
    options: ["27", "20", "22", "24"],
    answer: "27",
    explanation: "There are two series (8, 11, 14, 17, 20) and (7, 12, 17, 22) increasing by 3 and 5 respectively."
  }
];


const AptitudeTest2 = () => {
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


export default AptitudeTest2;