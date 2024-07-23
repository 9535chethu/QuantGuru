import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Sachin walks 20 km towards North. He turns left and walks 40 km. He again turns left and walks 20 km. Finally he moves 20 km after turning to the left. How far is he from his starting position?",
        options: [
            "20 km",
            "30 km",
            "50 km",
            "60 km"
        ],
        answer: "20 km"
    },
    {
        question: "2. Village Q is to the North of the village P. The village R is in the East of Village Q. The village S is to the left of the village P. In which direction is the village S with respect to village R?",
        options: [
            "West",
            "South-West",
            "South",
            "North-West"
        ],
        answer: "South-West"
    },
    {
        question: "3. Pointing towards a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
        options: [
            "Mother",
            "Grandmother",
            "Sister",
            "Daughter"
        ],
        answer: "Mother"
    },
    {
        question: "4. P is the mother of K; K is the sister of D; D is the father of J. How is P related to J?",
        options: [
            "Mother",
            "Grandmother",
            "Aunt",
            "Data inadequate"
        ],
        answer: "Grandmother"
    },
    {
        question: "5. Statements: Some keys are staplers. Some staplers are stickers. All the stickers are pens.\nConclusions:\n(1) Some pens are staplers.\n(2) Some stickers are keys.\n(3) No sticker is key.\n(4) Some staplers are keys.",
        options: [
            "Only (1) and (2)",
            "Only (2) and (4)",
            "Only (2) and (3)",
            "Only (1) and (4) and either (2) or (3)"
        ],
        direction: "Direction (Q.No. 5): In each of the following questions there are three statements. Which are followed by three or four conclusions. Choose the conclusions which logically follow from the given statements.",
        answer: "Only (1) and (4) and either (2) or (3)"
    },
    {
        question: "6. A song always has",
        options: [
            "Word",
            "Chorus",
            "Musician",
            "Tymbal"
        ],
        answer: "Word"
    },
    {
        question: "7. Which one of the following is always associated with 'justice'?",
        options: [
            "Hypocrisy",
            "Legitimate",
            "Magnanimity",
            "Diminutiveness"
        ],
        answer: "Legitimate"
    },
    {
        question: "8. Which one of the following is always with 'Bargain'?",
        options: [
            "Exchange",
            "Sumptuousness",
            "Triviality",
            "Eloquence"
        ],
        answer: "Exchange"
    },
    {
        question: "9. Which of the following diagrams indicates the best relation between Sailor, Ship and Ocean?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        direction: "Direction (Q.No. 9): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams.",
        answer: "Option B"
    },
    {
        question: "10. How many cubes have each one red and another green?",
        options: [
            "0",
            "8",
            "16",
            "24"
        ],
        direction: "Direction (Q.No. 10): A cube is cut in two equal parts along a plane parallel to one of its faces. One piece is then coloured red on the two larger faces and green on the remaining, while the other is coloured green on two smaller adjacent faces and red on the remaining. Each is then cut into 32 cubes of same size and mixed up.",
        answer: "16"
    },
    {
        question: "11. 3 : 12 :: 5 : ?",
        options: [
            "25",
            "35",
            "30",
            "15"
        ],
        direction: "Direction (Q.No. 11): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "30"
    },
    {
        question: "12. Newspaper, Hoarding, Television",
        options: [
            "Press",
            "Media",
            "Rumor",
            "Broadcast"
        ],
        direction: "Direction (Q.No. 12): Each of the following questions has a group. Find out which one of the given alternatives will be another member of the group or of that class.",
        answer: "Media"
    },
    {
        question: "13. 'Cat' is related to 'Kitten' in the same way as 'Woman' is related to:",
        options: [
            "Puppy",
            "Colt",
            "Calf",
            "Baby"
        ],
        answer: "Baby"
    },
    {
        question: "14. 'Reading' is related to 'knowledge' in the same way as 'Work' is related to:",
        options: [
            "Money",
            "Employment",
            "Experience",
            "Engagement"
        ],
        answer: "Experience"
    },
    {
        question: "15. Which of the following are the neighbours of P?",
        options: [
            "U and P",
            "T and R",
            "U and R",
            "Data inadequate"
        ],
        direction: "Direction (Q.No. 15): Six friends P, Q, R, S, T and U are sitting around the hexagonal table each at one corner and are facing the centre of the hexagonal. P is second to the left of U. Q is neighbour of R and S. T is second to the left of S.",
        answer: "Data inadequate"
    },
    {
        question: "16. Which one will replace the question mark?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        direction: "Direction (Q.No. 16): ",
        answer: "7"
    },
    {
        question: "17. Which one will replace the question mark?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 17): ",
        answer: "1"
    },
    {
        question: "18. Which one will replace the question mark?",
        options: [
            "18",
            "12",
            "9",
            "6"
        ],
        direction: "Direction (Q.No. 18): ",
        answer: "9"
    },
    {
        question: "19. Which one will replace the question mark?",
        options: [
            "20",
            "26",
            "25",
            "75"
        ],
        direction: "Direction (Q.No. 19): ",
        answer: "25"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Windows 2. Walls 3. Floor\n4. Foundation 5. Roof 6. Room",
        options: [
            "4, 5, 3, 2, 1, 6",
            "4, 2, 1, 5, 3, 6",
            "4, 1, 5, 6, 2, 3",
            "4, 3, 5, 6, 2, 1"
        ],
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "4, 3, 5, 6, 2, 1"
    }
];
const VerbalReasoningTest26 = () => {
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
  
  
  export default VerbalReasoningTest26;