import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. If South-East becomes North, North-East becomes West and so on. What will West become?",
        options: [
            "North-East",
            "North-West",
            "South-East",
            "South-West"
        ],
        answer: "South-East"
    },
    {
        question: "2. Pointing to a lady a person said, \"The son of her only brother is the brother of my wife.\" How is the lady related to the person?",
        options: [
            "Maternal aunt",
            "Grandmother",
            "Sister of father-in-law",
            "None of these"
        ],
        answer: "Sister of father-in-law"
    },
    {
        question: "3. Pointing to a woman, Abhijit said, \"Her granddaughter is the only daughter of my brother.\" How is the woman related to Abhijit?",
        options: [
            "Sister",
            "Grandmother",
            "Mother-in-law",
            "Mother"
        ],
        answer: "Mother"
    },
    {
        question: "4. Statements: Some ants are parrots. All the parrots are apples.\n\nConclusions:\n\nAll the apples are parrots.\nSome ants are apples.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        direction: "Direction (Q.No. 4): In each of the following questions two statements are given and these statements are followed by two conclusions numbered (1) and (2). You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusions and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Only (2) conclusion follows"
    },
    {
        question: "5. Statements: Some envelops are gums. Some gums are seals. Some seals are adhesives.\n\nConclusions:\n\nSome envelopes are seals.\nSome gums are adhesives.\nSome adhesives are seals.\nSome adhesives are gums.",
        options: [
            "Only (3)",
            "Only (1)",
            "Only (2)",
            "Only (4)"
        ],
        direction: "Direction (Q.No. 5): In each of the following questions there are three statements. Which are followed by three or four conclusions. Choose the conclusions which logically follow from the given statements.",
        answer: "Only (3)"
    },
    {
        question: "6. A disease always has",
        options: [
            "Cure",
            "Germs",
            "Cause",
            "Patient"
        ],
        answer: "Patient"
    },
    {
        question: "7. Danger always involves",
        options: [
            "Enemy",
            "Attack",
            "Fear",
            "Help"
        ],
        answer: "Fear"
    },
    {
        question: "8. If the even numbers of dice have odd number of dots on their top faces and odd numbered dice have even of dots on their bottom faces, then what would be the total number of dots on their top faces?",
        options: [
            "12",
            "14",
            "16",
            "18"
        ],
        direction: "Direction (Q.No. 8): Six dice with upper faces erased are as shown. The sum of the numbers of dots on the opposite face is 7.",
        answer: "16"
    },
    {
        question: "9. Which of the following diagrams indicates the best relation between Furniture, Chairs and Tables?",
        options: [
            "A", "B", "C", "D", "E"
        ],
        direction: "Direction (Q.No. 9): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams.",
        answer: "D"
    },
    {
        question: "10. Which of the following diagrams indicates the best relation between Examination, Questions and Practice?",
        options: [
            "A", "B", "C", "D", "E"
        ],
        direction: "Direction (Q.No. 10):",
        answer: "C"
    },
    {
        question: "11. Which of the following diagrams indicates the best relation between Vegetables, Tomato and Fruits?",
        options: [
            "A", "B", "C", "D", "E"
        ],
        direction: "Direction (Q.No. 11):",
        answer: "B"
    },
    {
        question: "12. How many small cubes will have only two faces coloured?",
        options: [
            "12", "24", "16", "12"
        ],
        direction: "Direction (Q.No. 12): The following questions are based on the information given below: There is a cuboid whose dimensions are 4 x 3 x 3 cm. The opposite faces of dimensions 4 x 3 are coloured yellow. The opposite faces of other dimensions 4 x 3 are coloured red. The opposite faces of dimensions 3 x 3 are coloured green. Now the cuboid is cut into small cubes of side 1 cm.",
        answer: "24"
    },
    {
        question: "13. The upper face is _________",
        options: [
            "White", "Black", "Brown", "None of these"
        ],
        direction: "Direction (Q.No. 13): All the six faces of a cube of a cube are coloured with six different colours - black, brown, green, red, white and blue.\n\nRed face is opposite to the black face.\nGreen face is between red and black faces.\nBlue face is adjacent to white face.\nBrown face is adjacent to blue face.\nRed face is in the bottom.",
        answer: "White"
    },
    {
        question: "14. CUP : LIP :: BIRD : ?",
        options: [
            "BUSH", "GRASS", "FOREST", "BEAK"
        ],
        direction: "Direction (Q.No. 14): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "BEAK"
    },
    {
        question: "15. Corden : zrogbq :: ? : pxivro",
        options: [
            "mulmul", "sulsul", "munmun", "srspql"
        ],
        direction: "Direction (Q.No. 15): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "munmun"
    },
    {
        question: "16. 'Jackal' is related to 'Howl' in the same way as 'Cow' is related to:",
        options: [
            "Caws", "Hoot", "Coo", "Moo"
        ],
        answer: "Moo"
    },
    {
        question: "17. Which one will replace the question mark ?",
        options: [
            "8", "12", "16", "20"
        ],
        direction: "Direction (Q.No. 17):",
        answer: "20"
    },
    {
        question: "18. Which one will replace the question mark ?",
        options: [
            "6", "7", "8", "9"
        ],
        direction: "Direction (Q.No. 18):",
        answer: "9"
    },
    {
        question: "19. Which one will replace the question mark ?",
        options: [
            "L10", "K15", "I15", "K8"
        ],
        direction: "Direction (Q.No. 19):",
        answer: "K15"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Wall 2. Clay 3. House\n4. Room 5. Bricks",
        options: [
            "5, 2, 1, 4, 3",
            "2, 5, 4, 1, 3",
            "2, 5, 1, 4, 3",
            "1, 2, 3, 4, 5"
        ],
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "2, 5, 1, 4, 3"
    }
];

const VerbalReasoningTest8 = () => {
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
  
  
  export default VerbalReasoningTest8;