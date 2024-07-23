import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Rohit walked 25 m towards south. Then he turned to his left and walked 20 m. He then turned to his left and walked 25 m. He again turned to his right and walked 15 m. At what distance is he from the starting point and in which direction?",
        options: [
            "35 m East",
            "35 m North",
            "30 m West",
            "45 m East"
        ],
        answer: "35 m East"
    },
    {
        question: "2. If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
        options: [
            "Q - N + M x P",
            "P + S x N - Q",
            "P - M + N x Q",
            "Q - S % P"
        ],
        answer: "P - M + N x Q"
    },
    {
        question: "3. If P $ Q means P is the brother of Q; P # Q means P is the mother of Q; P * Q means P is the daughter of Q in A # B $ C * D, who is the father?",
        options: [
            "D",
            "B",
            "C",
            "Data is inadequate"
        ],
        answer: "Data is inadequate"
    },
    {
        question: "4. If M x N means M is the daughter of N; M + N means M is the father of N; M % N means M is the mother of N and M - N means M is the brother of N then P % Q + R - T x K indicates which relation of P to K?",
        options: [
            "Daughter-in-law",
            "Sister-in-law",
            "Aunt",
            "None of these"
        ],
        answer: "None of these"
    },
    {
        question: "5. Statements: Some tables are T.V. Some T.V. are radios.\nConclusions:\n(1) Some tables are radios.\n(2) Some radios are tables.\n(3) All the radios are T.V.\n(4) All the T.V. are tables.",
        options: [
            "Only (2) and (4)",
            "Only (1) and (3)",
            "Only (4)",
            "Only (1) and (4)",
            "None of the four."
        ],
        direction: "Direction (Q.Nos. 5 - 6): In each of the following questions two statements are given. Which are followed by four conclusions (1), (2), (3) and (4). Choose the conclusions which logically follow from the given statements.",
        answer: "None of the four."
    },
    {
        question: "6. Statements: All men are vertebrates. Some mammals are vertebrates.\nConclusions:\n(1) All men are mammals.\n(2) All mammals are men.\n(3) Some vertebrates are mammals.\n(4) All vertebrates are men.",
        options: [
            "Only (4)",
            "Only (2)",
            "Only (3)",
            "Only (1)",
            "Only (1) and (3)"
        ],
        answer: "Only (3)"
    },
    {
        question: "7. Statements: All the locks are keys. All the keys are bats. Some watches are bats.\nConclusions:\n(1) Some bats are locks.\n(2) Some watches are keys.\n(3) All the keys are locks.",
        options: [
            "Only (1) and (2)",
            "Only (1)",
            "Only (2)",
            "Only (1) and (3)"
        ],
        direction: "Direction (Q.Nos. 7 - 8): In each of the following questions there are three statements. Which are followed by three or four conclusions. Choose the conclusions which logically follow from the given statements.",
        answer: "Only (1)"
    },
    {
        question: "8. Statements: All the books are papers. Some papers are journals. Some journals are calendars.\nConclusions:\n(1) Some journals are books.\n(2) Some calendars are papers.\n(3) Some books are journals.\n(4) Some books are calendars.",
        options: [
            "Only (1)",
            "Only (2)",
            "Only (3)",
            "Only (4)",
            "None of the four"
        ],
        answer: "None of the four"
    },
    {
        question: "9. A car always has",
        options: [
            "Driver",
            "Wheels",
            "Bonnet",
            "Bumper"
        ],
        answer: "Wheels"
    },
    {
        question: "10. Which one of the following a 'Drama' must have?",
        options: [
            "Actors",
            "Story",
            "Sets",
            "Director"
        ],
        answer: "Story"
    },
    {
        question: "11. How many points will be on the face opposite to the face which contains 2 points?",
        options: [
            "1",
            "5",
            "4",
            "6"
        ],
        answer: "5"
    },
    {
        question: "12. Which number is on the face opposite to 6?",
        options: [
            "4",
            "1",
            "2",
            "3"
        ],
        answer: "1"
    },
    {
        question: "13. Which of the following diagrams indicates the best relation between Football, Player and Field?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option B",
        direction: "Direction (Q.Nos. 13 - 14): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams."
    },
    {
        question: "14. Which of the following diagrams indicates the best relation between Factory, Product and Machinery?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option C"
    },
    {
        question: "15. If hospital management requires only married trained nurses for operation theater, which part of diagram should be chosen by him?",
        options: [
            "7",
            "4",
            "5",
            "6"
        ],
        answer: "5",
        direction: "Direction (Q.No. 15): Study the following figure and answer the questions given below."
    },
    {
        question: "16. All the faces of a cube are painted with blue colour. Then it is cut into 125 small equal cubes.\nHow many small cubes will be formed having no face coloured?",
        options: [
            "27",
            "8",
            "16",
            "24"
        ],
        answer: "27"
    },
    {
        question: "17. A cube is cut in two equal parts along a plane parallel to one of its faces. One piece is then coloured red on the two larger faces and green on the remaining, while the other is coloured green on two smaller adjacent faces and red on the remaining. Each is then cut into 32 cubes of same size and mixed up.\nWhat is the number of cubes with at least one green face each?",
        options: [
            "36",
            "32",
            "38",
            "48"
        ],
        answer: "36"
    },
    {
        question: "18. Each of these questions are based on the information given below:\n8 persons E, F, G, H, I, J, K and L are seated around a square table - two on each side.\nThere are 3 ladies who are not seated next to each other.\nJ is between L and F.\nG is between I and F.\nH, a lady member is second to the left of J.\nF, a male member is seated opposite to E, a lady member.\nThere is a lady member between F and I.\nWho among the following is seated between E and H?",
        options: [
            "F",
            "I",
            "K",
            "Cannot be determined"
        ],
        answer: "Cannot be determined",
        direction: "Direction (Q.No. 18): Each of these questions are based on the information given below:\n8 persons E, F, G, H, I, J, K and L are seated around a square table - two on each side.\nThere are 3 ladies who are not seated next to each other.\nJ is between L and F.\nG is between I and F.\nH, a lady member is second to the left of J.\nF, a male member is seated opposite to E, a lady member.\nThere is a lady member between F and I."
    },
    {
        question: "19. Six girls are sitting in a circle facing to the centre of the circle. They are P, Q, R, S, T and V. T is not between Q and S but some other one. P is next to the left of V. R is 4th to the right of P.\nWhich one is sitting just right to the V?",
        options: [
            "P",
            "T",
            "R",
            "S/Q"
        ],
        answer: "P"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Leaves 2. Branch 3. Flower 4. Tree 5. Fruit",
        options: [
            "4, 3, 1, 2, 5",
            "4, 2, 5, 1, 3",
            "4, 3, 2, 1, 5",
            "4, 2, 1, 3, 5"
        ],
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "4, 2, 1, 3, 5"
    }
];

const VerbalReasoningTest4 = () => {
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
  
  
  export default VerbalReasoningTest4;