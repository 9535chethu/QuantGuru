import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';
const questions = [
    {
        question: "1. The price of commodity X increases by 40 paise every year, while the price of commodity Y increases by 15 paise every year. If in 2001, the price of commodity X was Rs. 4.20 and that of Y was Rs. 6.30, in which year commodity X will cost 40 paise more than the commodity Y?",
        options: [
            "2010",
            "2011",
            "2012",
            "2013"
        ],
        answer: "2010",
        explanation: "Let the required year be n years after 2001. Then, price of commodity X after n years = 4.20 + 0.40n and price of commodity Y after n years = 6.30 + 0.15n. According to the given condition, 4.20 + 0.40n = 6.30 + 0.15n + 0.40 => 0.25n = 2.10 => n = 8.4. Therefore, the required year is 2001 + 9 = 2010."
    },
    {
        question: "2. If a - b = 3 and a^2 + b^2 = 29, find the value of ab.",
        options: [
            "10",
            "12",
            "15",
            "18"
        ],
        answer: "10",
        explanation: "We have (a - b)^2 = a^2 + b^2 - 2ab => 9 = 29 - 2ab => 2ab = 20 => ab = 10."
    },
    {
        question: "3. There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
        options: [
            "20",
            "80",
            "100",
            "200"
        ],
        answer: "100",
        explanation: "Let the number of students in room A be x and in room B be y. According to the question, x - 10 = y + 10 => x - y = 20 ...(i). And, x + 20 = 2(y - 20) => x - 2y = -60 ...(ii). Solving equations (i) and (ii), we get x = 100 and y = 80."
    },
    {
        question: "4. The product of two numbers is 120 and the sum of their squares is 289. The sum of the numbers is:",
        options: [
            "20",
            "23",
            "169",
            "None of these"
        ],
        answer: "23",
        explanation: "Let the numbers be x and y. Then, x*y = 120 and x^2 + y^2 = 289. (x + y)^2 = x^2 + y^2 + 2xy = 289 + 240 = 529 => x + y = 23."
    },
    {
        question: "5. The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be the new ratio of their salaries?",
        options: [
            "3 : 3 : 10",
            "10 : 11 : 20",
            "23 : 33 : 60",
            "Cannot be determined"
        ],
        answer: "23 : 33 : 60",
        explanation: "Let the original salaries of A, B and C be 2x, 3x and 5x respectively. Then, new salaries are (115% of 2x), (110% of 3x) and (120% of 5x). New ratio = (115 * 2x) : (110 * 3x) : (120 * 5x) = 23 : 33 : 60."
    },
    {
        question: "6. A and B entered into partnership with capitals in the ratio 4 : 5. After 3 months, A withdrew 1/4 of his capital and B withdrew 1/5 of his capital. The gain at the end of 10 months was Rs. 760. A's share in this profit is:",
        options: [
            "Rs. 330",
            "Rs. 360",
            "Rs. 380",
            "Rs. 430"
        ],
        answer: "Rs. 360",
        explanation: "Let the initial capitals of A and B be 4x and 5x respectively. After 3 months, A's capital = (4x - 1x) = 3x and B's capital = (5x - 1x) = 4x. A's share of profit = [4x*3 + 3x*7]/(4x*3 + 5x*3 + 3x*7 + 4x*7) * 760 = 360."
    },
    {
        question: "7. What is R's share of profit in a joint venture?  I. Q started business investing Rs. 80,000.II. R joined him after 3 months.III. P joined after 4 months with a capital of Rs. 1,20,000 and got Rs. 6000 as his share profit.",
        options: [
            "All I, II and III",
            "I and III only",
            "II and III only",
            "Even with all I, II and III, the answer cannot be arrived at"
        ],
        direction:"Direction (Q.No. 7)Each of the questions given below consists of a question followed by three statements. You have to study the question and the statements and decide which of the statement(s) is/are necessary to answer the question.",
        answer: "Even with all I, II and III, the answer cannot be arrived at",
        explanation: "Without additional information about the total profit or the exact share ratios, R's share cannot be determined."
    },
    {
        question: "8. A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
        options: [
            "Rs. 375",
            "Rs. 400",
            "Rs. 600",
            "Rs. 800"
        ],
        answer: "Rs. 400",
        explanation: "A's 1 day's work = 1/6, B's 1 day's work = 1/8, (A+B+C)'s 1 day's work = 1/3. => (1/6 + 1/8 + 1/C) = 1/3 => 1/C = 1/3 - (1/6 + 1/8) = 1/24. A:B:C = 8:6:1 => C's share = 1/15 * 3200 = 400."
    },
    {
        question: "9. A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?",
        options: [
            "230 m",
            "240 m",
            "260 m",
            "270 m"
        ],
        answer: "250 m",
        explanation: "Speed = 72 kmph = 72 * 5/18 m/sec = 20 m/sec. Time = 26 sec. Distance = speed * time = 20 * 26 = 520 m. Length of train = Total distance - platform length = 520 - 250 = 270 m."
    },
    {
        question: "10. If log10 2 = 0.3010, then log2 10 is equal to:",
        options: [
            "0.3010",
            "0.6990",
            "699",
            "1000"
        ],
        answer: "3.32",
        explanation: "log2 10 = 1 / log10 2 = 1 / 0.3010 = 3.32"
    },
    {
        question: "11. An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
        options: [
            "2%",
            "2.02%",
            "4%",
            "4.04%"
        ],
        answer: "4.04%",
        explanation: "Let the side of the square be x. Then, error in side = 2% of x. Area = x^2. Error in area = (x + 0.02x)^2 - x^2 = x^2 + 0.04x^2 + 0.0004x^2 - x^2 = 0.0404x^2. Percentage error = (0.0404x^2 / x^2) * 100% = 4.04%."
    },
    {
        question: "12. In a shower, 5 cm of rain falls. The volume of water that falls on 1.5 hectares of ground is:",
        options: [
            "75 cu. m",
            "750 cu. m",
            "7500 cu. m",
            "75000 cu. m"
        ],
        answer: "750 cu. m",
        explanation: "1 hectare = 10000 sq. m. Area = 1.5 hectares = 1.5 * 10000 = 15000 sq. m. Volume = area * height = 15000 * 0.05 = 750 cu. m."
    },
    {
        question: "13. What is the volume of a cube?I. The area of each face of the cube is 64 square metres.II. The length of one side of the cube is 8 metres.",
        options: [
            "I alone sufficient while II alone not sufficient to answer",
            "II alone sufficient while I alone not sufficient to answer",
            "Either I or II alone sufficient to answer",
            "Both I and II are not sufficient to answer","Both I and II are necessary to answer"
        ],
        direction:" Direction (Q.No. 13)Each of the questions given below consists of a statement and / or a question and two statements numbered I and II given below it. You have to decide whether the data provided in the statement(s) is / are sufficient to answer the given question. Read the both statements andGive answer (A) if the data in Statement I alone are sufficient to answer the question, while the data in Statement II alone are not sufficient to answer the question.Give answer (B) if the data in Statement II alone are sufficient to answer the question, while the data in Statement I alone are not sufficient to answer the question.Give answer (C) if the data either in Statement I or in Statement II alone are sufficient to answer the question.Give answer (D) if the data even in both Statements I and II together are not sufficient to answer the question.Give answer(E) if the data in both Statements I and II together are necessary to answer the question.",
        answer: "II alone sufficient while I alone not sufficient to answer",
        explanation: "Statement I: Radius of the base is half of its height which is 28 metres. Statement II: Area of the base is 616 sq. metres and its height is 28 metres. Volume = area of base * height = 616 * 28."
    },
    {
        question: "14. The reflex angle between the hands of a clock at 10.25 is:",
        options: [
            "180°",
            "192 1/2°",
            "195°",
            "197 1/2°"
        ],
        answer: "192 1/2°",
        explanation: "Angle made by hour hand in 10 hours 25 min = (360 / 12) * (10 + 25/60) = 360/12 * 10.416 = 312.5 degrees. Angle made by minute hand in 25 minutes = 360 / 60 * 25 = 150 degrees. Reflex angle = 360 - (312.5 - 150) = 360 - 162.5 = 197.5 degrees."
    },
    {
        question: "15. At what time between 4 and 5 o'clock will the hands of a watch point in opposite directions?",
        options: [
            "45 min. past 4",
            "40 min. past 4",
            "50 4/11 min. past 4",
            "54 6/11 min. past 4"
        ],
        answer: "54 6/11 min. past 4",
        explanation: "Angle between hands = 180°. Minute hand moves 6° per minute, hour hand moves 0.5° per minute. Let the time be 4: x minutes. 180° = |(4*30 + 0.5x) - 6x| => 180 = 120 + 0.5x - 6x => 180 = 120 - 5.5x => x = (180 - 120) / 5.5 = 60 / 5.5 = 54 6/11."
    },
    {
        question: "16. A 12% stock yielding 10% is quoted at:",
        options: [
            "Rs. 83.33",
            "Rs. 110",
            "Rs. 112",
            "Rs. 120"
        ],
        answer: "Rs. 120",
        explanation: "For an income of Rs. 10, investment = Rs. 100. For an income of Rs. 12, investment = (100 * 12) / 10 = Rs. 120. Market value of Rs. 100 stock = Rs. 120."
    },
    {
        question: "17. In how many different ways can the letters of the word 'DETAIL' be arranged in such a way that the vowels occupy only the odd positions?",
        options: [
            "32",
            "48",
            "36",
            "60",
            "120"
        ],
        answer: "36",
        explanation: "Vowels in DETAIL are E, A, I. Odd positions are 1, 3, 5. Number of ways to arrange vowels = 3! = 6. Number of ways to arrange consonants = 3! = 6. Total number of arrangements = 6 * 6 = 36."
    },
    {
        question: "18. Two dice are tossed. The probability that the total score is a prime number is:",
        options: [
            "1/6",
            "5/12",
            "1/2",
            "7/9"
        ],
        answer: "5/12",
        explanation: "Possible outcomes: (1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (2,1), (2,2), (2,3), (2,4), (2,5), (2,6), (3,1), (3,2), (3,3), (3,4), (3,5), (3,6), (4,1), (4,2), (4,3), (4,4), (4,5), (4,6), (5,1), (5,2), (5,3), (5,4), (5,5), (5,6), (6,1), (6,2), (6,3), (6,4), (6,5), (6,6). Total = 36. Prime outcomes: (1,2), (1,4), (2,1), (2,3), (2,5), (3,2), (3,4), (4,1), (4,3), (4,5), (5,2), (5,4), (6,1). Total = 15. Probability = 15/36 = 5/12."
    },
    {
        question: "19. An observer 1.6 m tall is 203 m away from a tower. The angle of elevation from his eye to the top of the tower is 30°. The height of the tower is:",
        options: [
            "21.6 m",
            "23.2 m",
            "24.72 m",
            "None of these"
        ],
        answer: "None of these",
        explanation: "Let the height of the tower be h meters. Then, tan 30° = (h - 1.6) / 203. => 1/√3 = (h - 1.6) / 203 => h - 1.6 = 203/√3 => h = 203/√3 + 1.6 = 117.42 m."
    },
    {
        question: "20. Find the odd man out.1, 4, 9, 16, 23, 25, 36",
        options: [
            "9",
            "23",
            "25",
            "36"
        ],
        answer: "23",
        explanation: "All numbers except 23 are perfect squares."
    }
];


const AptitudeTest10 = () => {
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

  
  export default AptitudeTest10;