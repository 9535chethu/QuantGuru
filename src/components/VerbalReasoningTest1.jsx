import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Ravi left home and cycled 10 km towards South, then turned right and cycled 5 km and then again turned right and cycled 10 km. After this he turned left and cycled 10 km. How many kilometers will he have to cycle to reach his home straight?",
        options: [
            "10 km",
            "15 km",
            "20 km",
            "25 km"
        ],
        answer: "15 km"
    },
    {
        question: "2. Some boys are sitting in three rows all facing North such that A is in the middle row. P is just to the right of A but in the same row. Q is just behind of P while R is in the North of A. In which direction of R is Q?",
        options: [
            "South",
            "South-West",
            "North-East",
            "South-East"
        ],
        answer: "South"
    },
    {
        question: "3. If P + Q means P is the brother of Q; P x Q means P is the father of Q and P - Q means P is the sister of Q, which of the following relations shows that I is the niece of K?",
        options: [
            "K + Y + Z - I",
            "K + Y x I - Z",
            "Z - I x Y + K",
            "K x Y + I - Z"
        ],
        answer: "K + Y x I - Z"
    },
    {
        question: "4. A3P means A is the mother of P. A4P means A is the brother of P. A9P means A is the husband of P. A5P means A is the daughter of P. Which of the following means that K is the mother-in-law of M?",
        options: [
            "M9N3K4J",
            "M9N5K3J",
            "K5J9M3N",
            "K3J9N4M"
        ],
        answer: "K5J9M3N"
    },
    {
        question: "5. Statements: All the harmoniums are instruments. All the instruments are flutes.\nConclusions:\n1. All the flutes are instruments.\n2. All the harmoniums are flutes.",
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
        question: "6. Statements: Some dogs are bats. Some bats are cats.\nConclusions:\n1. Some dogs are cats.\n2. Some cats are dogs.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        answer: "Neither (1) nor (2) follows"
    },
    {
        question: "7. A lotus flower always has",
        options: [
            "Mud",
            "Petals",
            "Root",
            "Water"
        ],
        answer: "Petals"
    },
    {
        question: "8. Which one of the following is always found in 'Bravery'?",
        options: [
            "Experience",
            "Power",
            "Courage",
            "Knowledge"
        ],
        answer: "Courage"
    },
    {
        question: "9. Which symbol will be on the face opposite to the face with symbol * ?\n\n\n\n\n\n",
        options: [
            "@",
            "$",
            "8",
            "+"
        ],
        answer: "+"
    },
    {
        question: "10. Statements:\nI. The employees of the biggest bank in the country have given an indefinite strike call starting from the third of the next month.\nII. The employees of the Central Government have withdrawn their week long demonstrations.",
        options: [
            "Statement I is the cause and statement II is its effect.",
            "Statement II is the cause and statement I is its effect.",
            "Both the statements I and II are independent causes.",
            "Both the statements I and II are effects of independent causes.",
            "Both the statements I and II are effects of some common cause."
        ],
        answer: "Both the statements I and II are independent causes."
    },
    {
        question: "11. Which of the following diagrams indicates the best relation between Teacher, Writer and Musician?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option B"
    },
    {
        question: "12. Which of the following diagrams indicates the best relation between Men, Rodents and Living beings?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option B"
    },
    {
        question: "13. Which of the following diagrams indicates the best relation between Lion, Dog and Snake?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option A"
    },
    {
        question: "14. By which letter, the people who live in joint family but are neither married nor teachers are represented?",
        options: [
            "T",
            "R",
            "Q",
            "S"
        ],
        answer: "S"
    },
    {
        question: "15. A cube is cut in two equal parts along a plane parallel to one of its faces. One piece is then coloured red on the two larger faces and green on the remaining, while the other is coloured green on two smaller adjacent faces and red on the remaining. Each is then cut into 32 cubes of same size and mixed up. How many cubes have two red and one green face on each?",
        options: [
            "0",
            "8",
            "16",
            "4"
        ],
        answer: "8"
    },
    {
        question: "16. Sound : Muffled",
        options: [
            "Moisture : Humid",
            "Colour : Faded",
            "Despair : Anger",
            "Odour : Pungent"
        ],
        answer: "Colour : Faded"
    },
    {
        question: "17. Chalk : Blackboard",
        options: [
            "Type : Point",
            "Table : Chair",
            "Door : Handle",
            "Ink : Paper"
        ],
        answer: "Ink : Paper"
    },
    {
        question: "18. Five girls are sitting on a bench to be photographed. Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani. Reeta is between Rani and Mary. Who is sitting immediate right to Reeta?",
        options: [
            "Bindu",
            "Rani",
            "Mary",
            "Seema"
        ],
        answer: "Mary"
    },
    {
        question: "19. In an Exhibition seven cars of different companies - Cadillac, Ambassador, Fiat, Maruti, Mercedes, Bedford and Fargo are standing facing to east in the following order:\nCadillac is next to right of Fargo.\nFargo is fourth to the right of Fiat.\nMaruti car is between Ambassador and Bedford.\nFiat which is third to the left of Ambassador, is at one end. Which one of the following is the correct position of Mercedes?",
        options: [
            "Next to the left of Cadillac",
            "Next to the left of Bedford",
            "Between Bedford and Fargo",
            "Fourth to the right of Maruti."
        ],
        answer: "Between Bedford and Fargo"
    },
    {
        question: "20. If B shifts to the place of E, E shifts to the place of Q, and Q shifts to the place of B, then who will be the second to the left of the person opposite to O?",
        options: [
            "Q",
            "P",
            "E",
            "D"
        ],
        answer: "E"
    }
];

const VerbalReasoningTest1 = () => {
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
  
  
  export default VerbalReasoningTest1;