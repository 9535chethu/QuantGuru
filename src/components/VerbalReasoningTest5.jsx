import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Which tree is just opposite to raspberry tree?",
        options: [
            "Papaya",
            "Pomegranate",
            "Papaya or Pomegranate",
            "Data is inadequate"
        ],
        direction: "Direction (Q.No. 1): Each of the following questions is based on the following information:\n8-trees → mango, guava, papaya, pomegranate, lemon, banana, raspberry and apple are in two rows 4 in each facing North and South.\nLemon is between mango and apple but just opposite to guava.\nBanana is at one end of a line and is just next in the right of guava or either banana tree is just after guava tree.\nRaspberry tree which at one end of a line, is just diagonally opposite to mango tree.",
        answer: "Papaya"
    },
    {
        question: "2. Statements: Some mangoes are yellow. Some tixo are mangoes.\nConclusions:\n(1) Some mangoes are green.\n(2) Tixo is a yellow.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        direction: "Direction (Q.Nos. 2 - 3): In each of the following questions two statements are given and these statements are followed by two conclusions numbered (1) and (2). You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusions and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Neither (1) nor (2) follows"
    },
    {
        question: "3. Statements: All cups are books. All books are shirts.\nConclusions:\n(1) Some cups are not shirts.\n(2) Some shirts are cups.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        answer: "Only (2) conclusion follows"
    },
    {
        question: "4. Statements: Some cars are scooters. No scooter is cycle.\nConclusions:\n(1) No car is cycle.\n(2) No scooter is car.\n(3) Some cars are cycles.\n(4) Some scooters are cars.",
        options: [
            "None of the four.",
            "All the four.",
            "Only (1) and (4)",
            "Only (4)",
            "Only (2) and (4)"
        ],
        direction: "Direction (Q.Nos. 4 - 5): In each of the following questions two statements are given. Which are followed by four conclusions (1), (2), (3) and (4). Choose the conclusions which logically follow from the given statements.",
        answer: "Only (4)"
    },
    {
        question: "5. Statements: All the books are pencils. No pencil is eraser.\nConclusions:\n(1) All the pencils are books.\n(2) Some erasers are books.\n(3) No book is eraser.\n(4) Some books are erasers.",
        options: [
            "Only (3)",
            "Only (1) and (3)",
            "Only (1) and (2)",
            "Only (2) and (3)",
            "Only (3) and (4)"
        ],
        answer: "Only (3)"
    },
    {
        question: "6. Controversy always involves",
        options: [
            "Dislike",
            "Injustice",
            "Disagreement",
            "Passion"
        ],
        answer: "Disagreement"
    },
    {
        question: "7. Which of the following diagrams indicates the best relation between Sweets, Rasagulla and Apple?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        direction: "Direction (Q.No. 7): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams.",
        answer: "Option A"
    },
    {
        question: "8. Which one of the following represents the educated men but not urban?",
        options: [
            "9",
            "5",
            "4",
            "11"
        ],
        direction: "Direction (Q.Nos. 8 - 9): In the following diagram rectangle represents men, Triangle represents educated, Circle represents urban and square represents government employees.",
        answer: "4"
    },
    {
        question: "9. Which one of the following represents a woman who is urban as well as government employee?",
        options: [
            "7",
            "13",
            "10",
            "6"
        ],
        answer: "10"
    },
    {
        question: "10. How many small cubes are there where one face is green and other one is either black or red?",
        options: [
            "28",
            "8",
            "16",
            "24"
        ],
        direction: "Direction (Q.No. 10): The following questions are based on the information given below:\nAll the opposite faces of a big cube are coloured with red, black and green colours. After that is cut into 64 small equal cubes.",
        answer: "24"
    },
    {
        question: "11. ABCD : WXYZ :: EFGH : ?",
        options: [
            "STUV",
            "ZYXW",
            "VUTS",
            "WXZY"
        ],
        direction: "Direction (Q.Nos. 11 - 14): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "VUTS"
    },
    {
        question: "12. CEDH : HDEC :: ? : PNRV",
        options: [
            "VRNP",
            "RNPV",
            "NRVP",
            "VNRP"
        ],
        answer: "VRNP"
    },
    {
        question: "13. PSQR : CFED :: JMKL : ?",
        options: [
            "UVXZ",
            "YVZX",
            "YXZW",
            "WZYX"
        ],
        answer: "WZYX"
    },
    {
        question: "14. KeaC : CaeK :: XgmF : ?",
        options: [
            "GmcF",
            "FmgX",
            "EgmX",
            "EmgF"
        ],
        answer: "EmgF"
    },
    {
        question: "15. Stove : Kitchen",
        options: [
            "Window : Bedroom",
            "Sink : Bathroom",
            "Pot : Pan",
            "Television : Living room"
        ],
        direction: "Direction (Q.No. 15): In each word of the following questions consists of pair of words bearing a relationship among these, from amongst the alternatives, pick up the pair that best illustrate a similar relationship.",
        answer: "Sink : Bathroom"
    },
    {
        question: "16. Clutch, Brake, Horn",
        options: [
            "Car",
            "Scooter",
            "Accident",
            "Steering"
        ],
        direction: "Direction (Q.Nos. 16 - 17): Each of the following questions has a group. Find out which one of the given alternatives will be another member of the group or of that class.",
        answer: "Steering"
    },
    {
        question: "17. Lock, Shut, Fasten",
        options: [
            "Window",
            "Door",
            "Iron",
            "Block"
        ],
        answer: "Block"
    },
    {
        question: "18. 'Smoke' is related to 'Pollution' in the same way as 'War' is related to:",
        options: [
            "Victory",
            "Treaty",
            "Defeat",
            "Destruction"
        ],
        answer: "Destruction"
    },
    {
        question: "19. Which of the following groups of cars is to the right of Ambassador?",
        options: [
            "Cadillac, Fargo and Maruti",
            "Mercedes, Cadillac and Fargo",
            "Maruti, Bedford and Fiat",
            "Bedford, Cadillac and Fargo"
        ],
        direction: "Direction (Q.No. 19): In an Exhibition seven cars of different companies - Cadillac, Ambassador, Fiat, Maruti, Mercedes, Bedford and Fargo are standing facing to east in the following order:\nCadillac is next to right of Fargo.\nFargo is fourth to the right of Fiat.\nMaruti car is between Ambassador and Bedford.\nFiat which is third to the left of Ambassador, is at one end.",
        answer: "Mercedes, Cadillac and Fargo"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Nation 2. Village 3. City 4. District 5. State",
        options: [
            "2, 3, 4, 5, 1",
            "2, 3, 4, 1, 5",
            "1, 3, 5, 4, 2",
            "1, 2, 3, 4, 5"
        ],
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "2, 3, 4, 5, 1"
    }
];

const VerbalReasoningTest5 = () => {
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
  
  
  export default VerbalReasoningTest5;