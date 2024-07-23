import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. P started from his house towards west. After walking a distance of 25 m. He turned to the right and walked 10 m. He then again turned to the right and walked 15 m. After this he is to turn right at 135 degrees and to cover 30 m. In which direction should he go?",
        options: [
            "West",
            "South",
            "South-West",
            "South-East"
        ],
        answer: "South-East"
    },
    {
        question: "2. One day at 2 P.M. Manisha and Madhuri were talking to each other face to face. If Manisha's shadow was exactly to the left of Madhuri, which direction Manisha was facing?",
        options: [
            "North",
            "South",
            "East",
            "None of these"
        ],
        answer: "South"
    },
    {
        question: "3. A's son B is married with C whose sister D is married to E the brother of B. How D is related to A?",
        options: [
            "Sister",
            "Daughter's-in-law",
            "Sister-in-law",
            "Cousin"
        ],
        answer: "Daughter's-in-law"
    },
    {
        question: "4. Veena who is the sister-in-law of Ashok, is the daughter-in-law of Kalyani. Dheeraj is the father of Sudeep who is the only brother of Ashok. How Kalyani is related to Ashok?",
        options: [
            "Mother-in-law",
            "Aunt",
            "Wife",
            "None of these"
        ],
        answer: "None of these"
    },
    {
        question: "5. A boy is sitting at the back seat of a car. When the driver suddenly starts moving the car (in forward direction), the boy experiences a backward force?",
        options: [
            "Always",
            "Never",
            "Often",
            "Sometimes"
        ],
        answer: "Always"
    },
    {
        question: "6. The figure given on the left hand side in each of the following questions is folded to form a box. Choose from the alternatives (1), (2), (3) and (4) the boxes that is similar to the box formed.",
        options: [
            "1, 2 and 4 only",
            "3 and 4 only",
            "1 and 2 only",
            "1, 2 and 3 only"
        ],
        answer: "1, 2 and 3 only",
        direction: "Direction (Q.No. 6): The figure given on the left hand side in each of the following questions is folded to form a box. Choose from the alternatives (1), (2), (3) and (4) the boxes that is similar to the box formed."
    },
    {
        question: "7. Statements:\nRural and semi-urban areas in the country have been suffering due to load-shedding for quite some time.\nIf the Government is not able to overcome the power crisis, load-shedding will be extended even to the urban areas.",
        options: [
            "Statement I is the cause and statement II is its effect.",
            "Statement II is the cause and statement I is its effect.",
            "Both the statements I and II are independent causes.",
            "Both the statements I and II are effects of independent causes.",
            "Both the statements I and II are effects of some common cause."
        ],
        answer: "Statement I is the cause and statement II is its effect.",
        direction: "Direction (Q.No. 7): Below in each of the questions are given two statements I and II. These statements may be either independent causes or may be effects of independent causes or a common cause. One of these statements may be the effect of the other statements. Read both the statements and decide which of the following answer choice correctly depicts the relationship between these two statements."
    },
    {
        question: "8. Which of the following diagrams indicates the best relation between Hockey, Football and Cricket?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option D",
        direction: "Direction (Q.No. 8): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams."
    },
    {
        question: "9. Ice : Coldness :: Earth : ?",
        options: [
            "Weight",
            "Jungle",
            "Gravitation",
            "Sea"
        ],
        answer: "Gravitation",
        direction: "Direction (Q.Nos. 9 - 10): In each of the following questions find out the alternative which will replace the question mark."
    },
    {
        question: "10. Safe : Secure :: Protect : ?",
        options: [
            "Lock",
            "Sure",
            "Guard",
            "Conserve"
        ],
        answer: "Guard"
    },
    {
        question: "11. Computer : fqprxvht :: Language : ?",
        options: [
            "oxpixdig",
            "ocqicyig",
            "ocqixcjg",
            "ocqixcig"
        ],
        answer: "ocqixcig",
        direction: "Direction (Q.Nos. 11 - 12): In each of the following questions find out the alternative which will replace the question mark."
    },
    {
        question: "12. ? : QEHMDF :: WIDELY : HVCDXK",
        options: [
            "FRINGE",
            "STRING",
            "FRANCE",
            "DEMAND"
        ],
        answer: "STRING"
    },
    {
        question: "13. 68 : 130 :: ? : 350",
        options: [
            "220",
            "224",
            "222",
            "226"
        ],
        answer: "222",
        direction: "Direction (Q.No. 13): In each of the following questions find out the alternative which will replace the question mark."
    },
    {
        question: "14. Numismatist : Coins",
        options: [
            "Jeweller : Jewels",
            "Cartographer : Maps",
            "Philatelist : Stamps",
            "Geneticist : Chromosomes"
        ],
        answer: "Philatelist : Stamps",
        direction: "Direction (Q.No. 14): In each word of the following questions consists of pair of words bearing a relationship among these, from amongst the alternatives, pick up the pair that best illustrate a similar relationship."
    },
    {
        question: "15. If O and P, A and E and B and Q interchange their positions, then who will be the second person to the right of the person who is opposite to the person second of the right of P ?",
        options: [
            "D",
            "A",
            "E",
            "O"
        ],
        answer: "D",
        direction: "Direction (Q.No. 15): Each of these questions are based on the information given below:\nA ,B, C, D and E are five men sitting in a line facing to south - while M, N, O, P and Q are five ladies sitting in a second line parallel to the first line and are facing to North.\nB who is just next to the left of D, is opposite to Q.\nC and N are diagonally opposite to each other.\nE is opposite to O who is just next right of M.\nP who is just to the left of Q, is opposite to D.\nM is at one end of the line."
    },
    {
        question: "16. If P and R interchange their positions then which of the following pair will sit together ?",
        options: [
            "RT",
            "PV",
            "VT",
            "QV"
        ],
        answer: "VT",
        direction: "Direction (Q.No. 16): Six girls are sitting in a circle facing to the centre of the circle. They are P, Q, R, S, T and V. T is not between Q and S but some other one. P is next to the left of V. R is 4th to the right of P."
    },
    {
        question: "17. Which one will replace the question mark ?",
        options: [
            "60",
            "46",
            "86",
            "75"
        ],
        answer: "60"
    },
    {
        question: "18. Which one will replace the question mark ?",
        options: [
            "262",
            "622",
            "631",
            "824"
        ],
        answer: "622"
    },
    {
        question: "19. Which one will replace the question mark ?",
        options: [
            "45",
            "29",
            "39",
            "37"
        ],
        answer: "39"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Key\n2. Door\n3. Lock\n4. Room\n5. Switch on",
        options: [
            "5, 1, 2, 4, 3",
            "4, 2, 1, 5, 3",
            "1, 3, 2, 4, 5",
            "1, 2, 3, 5, 4"
        ],
        answer: "1, 2, 3, 5, 4",
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives."
    }
];
const VerbalReasoningTest2 = () => {
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
  
  
  export default VerbalReasoningTest2;