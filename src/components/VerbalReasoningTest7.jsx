import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Radha moves towards South-East a distance of 7 km, then she moves towards West and travels a distance of 14 km. From here she moves towards North-West a distance of 7 km and finally she moves a distance of 4 km towards east. How far is she now from the starting point?",
        options: [
            "3 km",
            "4 km",
            "10 km",
            "11 km"
        ],
        answer: "4 km"
    },
    {
        question: "2. From his house, Lokesh went 15 km to the North. Then he turned west and covered 10 km. Then he turned south and covered 5 km. Finally turning to the east, he covered 10 km. In which direction is he from his house?",
        options: [
            "East",
            "West",
            "North",
            "South"
        ],
        answer: "North"
    },
    {
        question: "3. One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
        options: [
            "East",
            "West",
            "North",
            "South"
        ],
        answer: "North"
    },
    {
        question: "4. Pointing to a boy in the photograph Reena said, \"He is the only son of the only child of my grandfather.\" How Reena is related to that boy?",
        options: [
            "Mother",
            "Sister",
            "Aunt",
            "Cannot be determined"
        ],
        answer: "Sister"
    },
    {
        question: "5. Pointing to a photograph of a boy Suresh said, \"He is the son of the only son of my mother.\" How is Suresh related to that boy?",
        options: [
            "Brother",
            "Uncle",
            "Cousin",
            "Father"
        ],
        answer: "Father"
    },
    {
        question: "6. Introducing a man, a woman said, \"He is the only son of the mother of my mother.\" How is the woman related to the man?",
        options: [
            "Mother",
            "Sister",
            "Niece",
            "Maternal aunt"
        ],
        answer: "Maternal aunt"
    },
    {
        question: "7. Which one of the following is always found in 'Phrase'?",
        options: [
            "Nomenclature",
            "Manifestation",
            "Pictorial effect",
            "Glossary"
        ],
        answer: "Nomenclature"
    },
    {
        question: "8. If the dice (I), (II) and (III) have even number of dots on their bottom faces, then what would be the total number of dots on their top faces?",
        options: [
            "7",
            "11",
            "12",
            "14"
        ],
        direction: "Direction (Q.No. 8): Six dice with upper faces erased are as shows. The sum of the numbers of dots on the opposite face is 7.",
        answer: "14"
    },
    {
        question: "9. Statements: Police had resorted to lathi-charge to disperse the unruly mob from the civic headquarters. The civic administration has recently hiked the property tax of the residential buildings by about 30 percent.",
        options: [
            "Statement I is the cause and statement II is its effect.",
            "Statement II is the cause and statement I is its effect.",
            "Both the statements I and II are independent causes.",
            "Both the statements I and II are effects of independent causes.",
            "Both the statements I and II are effects of some common cause."
        ],
        direction: "Direction (Q.No. 9): Below in each of the questions are given two statements I and II. These statements may be either independent causes or may be effects of independent causes or a common cause. One of these statements may be the effect of the other statements. Read both the statements and decide which of the following answer choice correctly depicts the relationship between these two statements.",
        answer: "Statement II is the cause and statement I is its effect."
    },
    {
        question: "10. Study the diagram and identify the people who can speak only one language.",
        options: [
            "L + M + O",
            "K + J + I",
            "K",
            "I"
        ],
        direction: "Direction (Q.No. 10): ",
        answer: "K"
    },
    {
        question: "11. In the figure given below, square represents doctors, triangle represents ladies and circle represents surgeon. By which letter the ladies who doctor and surgeon both are represented ?",
        options: [
            "U",
            "T",
            "S",
            "P"
        ],
        direction: "Direction (Q.No. 11): ",
        answer: "T"
    },
    {
        question: "12. How many artists are players ?",
        options: [
            "5",
            "8",
            "25",
            "16"
        ],
        direction: "Direction (Q.No. 12): Study the following figure and answer the questions given below.",
        answer: "16"
    },
    {
        question: "13. Tiger : Forest :: Otter : ?",
        options: [
            "Cage",
            "Sky",
            "Nest",
            "Water"
        ],
        direction: "Direction (Q.No. 13): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "Water"
    },
    {
        question: "14. 'Nun' is related to 'Convent' in the same way as 'Hen' is related to:",
        options: [
            "Nest",
            "Shed",
            "Cell",
            "Cote"
        ],
        direction: "Direction (Q.No. 14): ",
        answer: "Cote"
    },
    {
        question: "15. Which of the cars are on both the sides of cadillac car ?",
        options: [
            "Ambassador and Maruti",
            "Maruti and Fiat",
            "Fargo and Mercedes",
            "Ambassador and Fargo"
        ],
        direction: "Direction (Q.No. 15): In an Exhibition seven cars of different companies - Cadillac, Ambassador, Fiat, Maruti, Mercedes, Bedford and Fargo are standing facing to east in the following order: Cadillac is next to right of Fargo. Fargo is fourth to the right of Fiat. Maruti car is between Ambassador and Bedford. Fiat which is third to the left of Ambassador, is at one end.",
        answer: "Fargo and Mercedes"
    },
    {
        question: "16. Which one is sitting opposite to P ?",
        options: [
            "R",
            "Q",
            "T",
            "S"
        ],
        direction: "Direction (Q.No. 16): Six friends P, Q, R, S, T and U are sitting around the hexagonal table each at one corner and are facing the centre of the hexagonal. P is second to the left of U. Q is neighbour of R and S. T is second to the left of S.",
        answer: "S"
    },
    {
        question: "17. Which one will replace the question mark ?",
        options: [
            "9",
            "6",
            "15",
            "14"
        ],
        direction: "Direction (Q.No. 17): ",
        answer: "15"
    },
    {
        question: "18. Which one will replace the question mark ?",
        options: [
            "30",
            "13",
            "70",
            "118"
        ],
        direction: "Direction (Q.No. 18): ",
        answer: "13"
    },
    {
        question: "19. Arrange the words given below in a meaningful sequence.\n1. Rainbow 2. Rain 3. Sun\n4. Happy 5. Child",
        options: [
            "4, 2, 3, 5, 1",
            "2, 3, 1, 5, 4",
            "4, 5, 1, 2, 3",
            "2, 1, 4, 5, 3"
        ],
        direction: "Direction (Q.No. 19): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "2, 3, 1, 5, 4"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Police 2. Punishment 3. Crime\n4. Judge 5. Judgement",
        options: [
            "3, 1, 2, 4, 5",
            "1, 2, 4, 3, 5",
            "5, 4, 3, 2, 1",
            "3, 1, 4, 5, 2"
        ],
        direction: "Direction (Q.No. 20): ",
        answer: "3, 1, 4, 5, 2"
    }
];

const VerbalReasoningTest7 = () => {
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
  
  
  export default VerbalReasoningTest7;