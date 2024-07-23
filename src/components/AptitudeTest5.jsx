import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
  {
    question: "The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively, is:",
    options: ["123", "127", "235", "305"],
    answer: "127",
    explanation: "Required number = H.C.F. of (1657 - 6) and (2037 - 5) = H.C.F. of 1651 and 2032 = 127."
  },
  {
    question: "The least multiple of 7, which leaves a remainder of 4, when divided by 6, 9, 15 and 18 is:",
    options: ["74", "94", "184", "364"],
    answer: "364",
    explanation: "L.C.M. of 6, 9, 15 and 18 is 90. Let required number be 90k + 4, which is multiple of 7. Least value of k for which (90k + 4) is divisible by 7 is k = 4. Required number = (90 x 4) + 4 = 364."
  },
  {
    question: "100 oranges are bought at the rate of Rs. 350 and sold at the rate of Rs. 48 per dozen. The percentage of profit or loss is:",
    options: ["14 2/7% gain", "15% loss", "15% gain", "14 2/7% loss"],
    answer: "14 2/7% gain",
    explanation: "C.P. of 1 orange = Rs. 350/100 = Rs. 3.50. S.P. of 1 orange = Rs. 48/12 = Rs. 4. Gain% = (0.50/3.50) x 100% = 14 2/7%."
  },
  {
    question: "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
    options: ["2 : 3 : 4", "6 : 7 : 8", "6 : 8 : 9", "None of these"],
    answer: "2 : 3 : 4",
    explanation: "Originally, let the number of seats for Mathematics, Physics and Biology be 5x, 7x and 8x respectively. Number of increased seats are (140% of 5x), (150% of 7x) and (175% of 8x). (140/100)x 5x, (150/100)x 7x and (175/100)x 8x = 7x, 21x/2, 14x. The required ratio = 7x : 21x/2 : 14x = 14x : 21x : 28x = 2 : 3 : 4."
  },
  {
    question: "Three friends, P, Q and R started a partnership business investing money in the ratio of 5 : 4 : 2 respectively for a period of 3 years. What is the amount received by P as his share profit? I. Total amount invested in the business in Rs. 22,000.II. Profit earned at the end of 3 years is  of the total investment.III. The average amount of profit earned per year is Rs. 2750.",
    options: ["I or II or III", "Either III only, or I and II together", "Any two of the three", "All I, II and III are required"],
    direction: "Each of these questions is followed by three statements. You have to study the question and all the three statements given to decide whether any information provided in the statement(s) is redundant and can be dispensed with while answering the given question.",
    answer: "Either III only, or I and II together",
    explanation: "I and II give, profit after 3 years = Rs. 3/8 x 22000 = Rs. 8250. From III also, profit after 3 years = Rs. (2750 x 3) = Rs. 8250. P's share = Rs. 8250 x 5/11 = Rs. 3750. Thus, either III is redundant or I and II are redundant."
  },
  {
    question: "If a quarter kg of potato costs 60 paise, how many paise will 200 gm cost?",
    options: ["48 paise", "54 paise", "56 paise", "72 paise"],
    answer: "48 paise",
    explanation: "Let the required weight be x kg. Less weight, Less cost (Direct Proportion). 250 : 200 :: 60 : x => 250 x x = (200 x 60). x = (200 x 60) / 250 = 48."
  },
  {
    question: "P can complete a work in 12 days working 8 hours a day. Q can complete the same work in 8 days working 10 hours a day. If both P and Q work together, working 8 hours a day, in how many days can they complete the work?",
    options: ["5 5/11", "5 6/11", "6 5/11", "6 6/11"],
    answer: "5 5/11",
    explanation: "P can complete the work in (12 x 8) hrs = 96 hrs. Q can complete the work in (8 x 10) hrs = 80 hrs. P's 1 hour's work = 1/96 and Q's 1 hour's work = 1/80. (P + Q)'s 1 hour's work = 1/96 + 1/80 = 11/480. So, both P and Q will finish the work in 480/11 hrs. Number of days of 8 hours each = (480/11) x 1/8 = 60/11 days = 5 5/11 days."
  },
  {
    question: "Sakshi can do a piece of work in 20 days. Tanya is 25% more efficient than Sakshi. The number of days taken by Tanya to do the same piece of work is:",
    options: ["15", "16", "18", "25"],
    answer: "16",
    explanation: "Ratio of times taken by Sakshi and Tanya = 125 : 100 = 5 : 4. Suppose Tanya takes x days to do the work. 5 : 4 :: 20 : x => x = (4 x 20) / 5 = 16 days. Hence, Tanya takes 16 days to complete the work."
  },
  {
    question: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
    options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
    answer: "50 km/hr",
    explanation: "Speed of the train relative to man = 125 m / 10 s = 25/2 m/s = (25/2) x (18/5) km/hr = 45 km/hr. Let the speed of the train be x km/hr. Then, relative speed = (x - 5) km/hr. x - 5 = 45 => x = 50 km/hr."
  },
  {
    question: "Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:",
    options: ["30 km/hr", "45 km/hr", "60 km/hr", "75 km/hr"],
    answer: "60 km/hr",
    explanation: "Let the speed of the slower train be x m/sec. Then, speed of the faster train = 2x m/sec. Relative speed = (x + 2x) m/sec = 3x m/sec. (100 + 100) / 8 = 3x => 24x = 200 => x = 25/3. So, speed of the faster train = 2x = 50/3 m/sec = (50/3) x (18/5) km/hr = 60 km/hr."
  },
  {
    question: "A train travelling at a speed of 75 mph enters a tunnel 3 1/2 miles long. The train is 1/4 mile long. How long does it take for the train to pass through the tunnel from the moment the front enters to the moment the rear emerges?",
    options: ["2.5 min", "3 min", "3.2 min", "3.5 min"],
    answer: "3 min",
    explanation: "Total distance covered = (7/2 + 1/4) miles = 15/4 miles. Therefore, Time taken = (15/4) / 75 hours = 1/20 hours = (1/20) x 60 min = 3 min."
  },
  {
    question: "A man takes twice as long to row a distance against the stream as to row the same distance in favour of the stream. The ratio of the speed of the boat (in still water) and the stream is:",
    options: ["2 : 1", "3 : 1", "3 : 2", "4 : 3"],
    answer: "3 : 1",
    explanation: "Let man's rate upstream be x kmph. Then, his rate downstream = 2x kmph. (Speed in still water) : (Speed of stream) = (2x + x)/2 : (2x - x)/2 = 3x/2 : x/2 = 3 : 1."
  },
  {
    question: "A sum of Rs. 12,500 amounts to Rs. 15,500 in 4 years at the rate of simple interest. What is the rate of interest?",
    options: ["3%", "4%", "5%", "6%", "None of these"],
    answer: "6%",
    explanation: "S.I. = Rs. (15500 - 12500) = Rs. 3000. Rate = (100 x 3000) / (12500 x 4) % = 6%."
  },
  {
    question: "At what rate of compound interest per annum will a sum of Rs. 1200 become Rs. 1348.32 in 2 years?",
    options: ["6%", "6.5%", "7%", "7.5%"],
    answer: "6%",
    explanation: "Let the rate be R% p.a. Then, 1200 x (1 + R/100)^2 = 1348.32 => (1 + R/100)^2 = 134832/120000 = 11236/10000 => (1 + R/100)^2 = (106/100)^2 => 1 + R/100 = 106/100 => R = 6%"
  },
  {
    question: "What is the cost of painting the two adjacent walls of a hall at Rs. 5 per m² which has no windows or doors?  I. The area of the hall is 24 sq. m.II. The breadth, length and height of the hall are in the ratio of 4 : 6 : 5 respectively.III. Area of one wall is 30 sq. m.",
    options: ["I only", "II only", "III only", "Either I or III", "All I, II and III are required"],
    direction: "Each of these questions is followed by three statements. You have to study the question and all the three statements given to decide whether any information provided in the statement(s) is redundant and can be dispensed with while answering the given question.",
    answer: "Either I or III",
    explanation: "From II, let l = 4x, b = 6x and h = 5x. Then, area of the hall = (24x^2) m^2. From I. Area of the hall = 24 m^2. From II and I, we get 24x^2 = 24 => x = 1. l = 4 m, b = 6 and h = 5 m. Thus, area of two adjacent walls = [(l x h) + (b x h)] m^2 can be found out and so the cost of painting two adjacent walls may be found out. Thus, III is redundant."
  },
  {
    question: "What is the height of a circular cone? I. The area of that cone is equal to the area of a rectangle whose length is 33 cm.II. The area of the base of that cone is 154 sq. cm.",
    options: ["I alone sufficient while II alone not sufficient to answer", "II alone sufficient while I alone not sufficient to answer", "Either I or II alone sufficient to answer", "Both I and II are not sufficient to answer", "Both I and II are necessary to answer"],
    direction: "Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements andGive answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question.Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question.Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question.Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question.Give answer(E) if the data in both Statements I and II together are necessary to answer the question.",
    answer: "Both I and II are necessary to answer",
    explanation: "II gives the value of r. But, in I, the breadth of rectangle is not given. So, we cannot find the surface area of the cone. Hence, the height of the cone cannot be determined. Correct answer is (D)."
  },
  {
    question: "At what time between 5.30 and 6 will the hands of a clock be at right angles?",
    options: ["43 5/11 min. past 5", "43 7/11 min. past 5", "40 min. past 5", "45 min. past 5"],
    answer: "43 7/11 min. past 5",
    explanation: "At 5 o'clock, the hands are 25 min. spaces apart. To be at right angles and that too between 5.30 and 6, the minute hand has to gain (25 + 15) = 40 min. spaces. 55 min. spaces are gained in 60 min. 40 min. spaces are gained in (60/55) x 40 min = 43 7/11 min. Required time = 43 7/11 min. past 5."
  },
  {
    question: "Which is a better investment: 11% stock at Rs. 143 or 9 3/4% stock at Rs. 117?",
    options: ["11% stock at Rs. 143", "9 3/4% stock at Rs. 117", "Both are equally good", "Cannot be compared, as the total amount of investment is not given"],
    answer: "9 3/4% stock at Rs. 117",
    explanation: "Let investment in each case be Rs. (143 x 117). Income in 1st case = Rs. (11/143) x (143 x 117) = Rs. 1287. Income in 2nd case = Rs. (39/4/117) x (143 x 117) = Rs. 1394.25. Clearly, 9 3/4% stock at 117 is better."
  },
  {
    question: "The banker's gain on a bill due 1 year hence at 12% per annum is Rs. 6. The true discount is:",
    options: ["Rs. 72", "Rs. 36", "Rs. 54", "Rs. 50"],
    answer: "Rs. 50",
    explanation: "T.D. = B.G. x 100 / (R x T) = Rs. (6 x 100) / (12 x 1) = Rs. 50."
  },
  {
    question: "Find out the wrong number in the given sequence of numbers: 25, 36, 49, 81, 121, 169, 225",
    options: ["36", "49", "121", "169"],
    answer: "36",
    explanation: "The numbers are squares of odd natural numbers, starting from 5 up to 15. So, 36 is wrong."
  }
];

const AptitudeTest5 = () => {
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

export default AptitudeTest5;
