import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. A child went 90 m in the East to look for his father, then he turned right and went 20 m. After this he turned right and after going 30 m he reached to his uncle's house. His father was not there. From there he went 100 m to his north and met his father. How far did he meet his father from the starting point?",
        options: [
            "80 m",
            "100 m",
            "140 m",
            "260 m"
        ],
        answer: "100 m"
    },
    {
        question: "2. If A + B means B is the brother of A; A x B means B is the husband of A; A - B means A is the mother of B and A % B means A is the father of B, which of the following relations shows that Q is the grandmother of T?",
        options: [
            "Q - P + R % T",
            "P x Q % R - T",
            "P x Q % R + T",
            "P + Q % R - T"
        ],
        answer: "Q - P + R % T"
    },
    {
        question: "3. If A $ B means A is the brother of B; B * C means B is the son of C; C @ D means C is the wife of D and A # D means A is the son of D, how C is related to A?",
        options: [
            "Maternal grandmother",
            "Maternal aunt",
            "Aunt",
            "Mother"
        ],
        answer: "Mother"
    },
    {
        question: "4. If A + B means A is the brother of B; A x B means A is the son of B; and A % B means B is the daughter of A then which of the following means M is the maternal uncle of N?",
        options: [
            "M + O x N",
            "M % O x N + P",
            "M + O % N",
            "None of these"
        ],
        answer: "None of these"
    },
    {
        question: "5. Statements: Some papers are pens. All the pencils are pens.\n\nConclusions:\n\nSome pens are pencils.\nSome pens are papers.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        direction: "Direction (Q.Nos. 5 - 6): In each of the following questions two statements are given and these statements are followed by two conclusions numbered (1) and (2). You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusions and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Both (1) and (2) follow"
    },
    {
        question: "6. Statements: All cars are cats. All fans are cats.\n\nConclusions:\n\nAll cars are fans.\nSome fans are cars.",
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
        question: "7. Statements: All the papers are books. All the bags are books. Some purses are bags.\n\nConclusions:\n\nSome papers are bags.\nSome books are papers.\nSome books are purses.",
        options: [
            "Only (1)",
            "Only (2) and (3)",
            "Only (1) and (2)",
            "Only (1) and (3)"
        ],
        answer: "Only (2) and (3)"
    },
    {
        question: "8. Yesterday I saw an ice cube which had already melted due to heat of a nearby furnace.",
        options: [
            "Always",
            "Never",
            "Often",
            "Sometimes"
        ],
        answer: "Sometimes"
    },
    {
        question: "9. Two positions of a dice are shown below. When number '1' is on the top. What number will be at the bottom?",
        options: [
            "3",
            "5",
            "2",
            "6"
        ],
        answer: "2"
    },
    {
        question: "10. Here 4 positions of a cube are shown. Which sign will be opposite to '+' ?",
        options: [
            "%",
            "-",
            "x",
            "$"
        ],
        answer: "-"
    },
    {
        question: "11. Choose from the alternatives (1), (2), (3) and (4) the boxes that is similar to the box formed.",
        options: [
            "2 and 3 only",
            "1, 3 and 4 only",
            "2 and 4 only",
            "1 and 4 only"
        ],
        direction: "Direction (Q.No. 11): The figure given on the left hand side in each of the following questions is folded to form a box.",
        answer: "2 and 4 only"
    },
    {
        question: "12. How many small cubes will have only one face coloured ?",
        options: [
            "10",
            "12",
            "14",
            "18"
        ],
        direction: "Direction (Q.No. 12): The following questions are based on the information given below:\n\nThere is a cuboid whose dimensions are 4 x 3 x 3 cm.\nThe opposite faces of dimensions 4 x 3 are coloured yellow.\nThe opposite faces of other dimensions 4 x 3 are coloured red.\nThe opposite faces of dimensions 3 x 3 are coloured green.\nNow the cuboid is cut into small cubes of side 1 cm.",
        answer: "12"
    },
    {
        question: "13. How many cubes have no coloured face at all ?",
        options: [
            "32",
            "8",
            "16",
            "None"
        ],
        direction: "Direction (Q.No. 13): A cube is cut in two equal parts along a plane parallel to one of its faces. One piece is then coloured red on the two larger faces and green on the remaining, while the other is coloured green on two smaller adjacent faces and red on the remaining. Each is then cut into 32 cubes of same size and mixed up.",
        answer: "None"
    },
    {
        question: "14. DFHJ : LNPR :: TVXZ : ?",
        options: [
            "DBFH",
            "DBHF",
            "BDFH",
            "FDBH"
        ],
        direction: "Direction (Q.No. 14): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "DBFH"
    },
    {
        question: "15. Which two of the following are not neighbours ?",
        options: [
            "RV",
            "UV",
            "RP",
            "QW"
        ],
        direction: "Direction (Q.No. 15): P, Q, R, S, T, U, V and W are sitting round the circle and are facing the centre:\nP is second to the right of T who is the neighbour of R and V.\nS is not the neighbour of P.\nV is the neighbour of U.\nQ is not between S and W. W is not between U and S.",
        answer: "RP"
    },
    {
        question: "16. Which one will replace the question mark ?",
        options: [
            "80",
            "114",
            "108",
            "None of these"
        ],
        direction: "Direction (Q.No. 16):",
        answer: "None of these"
    },
    {
        question: "17. Which one will replace the question mark ?",
        options: [
            "36",
            "48",
            "38",
            "30"
        ],
        direction: "Direction (Q.No. 17):",
        answer: "36"
    },
    {
        question: "18. Which one will replace the question mark ?",
        options: [
            "60",
            "30",
            "20",
            "45"
        ],
        direction: "Direction (Q.No. 18):",
        answer: "45"
    },
    {
        question: "19. Which one will replace the question mark ?",
        options: [
            "25",
            "59",
            "48",
            "73"
        ],
        direction: "Direction (Q.No. 19):",
        answer: "73"
    },
    {
        question: "20. Which one will replace the question mark ?",
        options: [
            "18",
            "20",
            "21",
            "19"
        ],
        direction: "Direction (Q.No. 20):",
        answer: "21"
    }
];

const VerbalReasoningTest10 = () => {
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
  
  
  export default VerbalReasoningTest10;