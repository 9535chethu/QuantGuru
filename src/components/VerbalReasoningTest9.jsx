import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Sundar runs 20 m towards East and turns to right and runs 10 m. Then he turns to the right and runs 9 m. Again he turns to right and runs 5 m. After this he turns to left and runs 12 m and finally he turns to right and 6 m. Now to which direction is Sundar facing?",
        options: [
            "East",
            "West",
            "North",
            "South"
        ],
        answer: "South"
    },
    {
        question: "2. The length and breadth of a room are 8 m and 6 m respectively. A cat runs along all the four walls and finally along a diagonal order to catch a rat. How much total distance is covered by the cat?",
        options: [
            "10",
            "14",
            "38",
            "48"
        ],
        answer: "38"
    },
    {
        question: "3. Introducing a woman, Shashank said, \"She is the mother of the only daughter of my son.\" How that woman is related to Shashank?",
        options: [
            "Daughter",
            "Sister-in-law",
            "Wife",
            "Daughter-in-law"
        ],
        answer: "Daughter-in-law"
    },
    {
        question: "4. A * B means A is the sister of B\nA $ B means B is the mother of A\nA + B means A is the brother of B\nA = B means B is the father of A.\nWhich of the following means M is the maternal uncle of N?",
        options: [
            "M = P + Q * N",
            "N + P = Q * M",
            "N * P $ Q * M",
            "None of these"
        ],
        answer: "None of these"
    },
    {
        question: "5. Statements: All the poets are goats. Some goats are trees.\n\nConclusions:\n\nSome poets are trees.\nSome trees are goats.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        direction: "Direction (Q.Nos. 5 - 6): In each of the following questions two statements are given and these statements are followed by two conclusions numbered (1) and (2). You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusions and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Only (2) conclusion follows"
    },
    {
        question: "6. Statements: All the pencils are pens. All the pens are inks.\n\nConclusions:\n\nAll the pencils are inks.\nSome inks are pencils.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        answer: "Both (1) and (2) follow"
    },
    {
        question: "7. Two positions of a dice are shown below. Which number will appear on the face opposite to the face with the number 5?",
        options: [
            "2/6",
            "2",
            "6",
            "4"
        ],
        answer: "2"
    },
    {
        question: "8. Two positions of dice are shown below. How many points will appear on the opposite to the face containing 5 points?",
        options: [
            "3",
            "1",
            "2",
            "4"
        ],
        answer: "2"
    },
    {
        question: "9. Two positions of a cube with its surfaces numbered are shown below. When the surface 4 touch the bottom, what surface will be on the top?",
        options: [
            "1",
            "2",
            "5",
            "6"
        ],
        answer: "5"
    },
    {
        question: "10. Which of the following diagrams indicates the best relation between Paper, Stationery and Ink?",
        options: [
            "A", "B", "C", "D", "E"
        ],
        direction: "Direction (Q.No. 10): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams.",
        answer: "C"
    },
    {
        question: "11. How many persons takes all the three ?",
        options: [
            "20",
            "17",
            "25",
            "15"
        ],
        direction: "Direction (Q.No. 11): Study the diagram given below and answer each of the following questions.",
        answer: "15"
    },
    {
        question: "12. How many cubes will have green colour on two sides and rest of the four sides having no colour ?",
        options: [
            "12", "10", "8", "4"
        ],
        direction: "Direction (Q.No. 12): The following questions are based on the information given below:\n\nA cuboid shaped wooden block has 6 cm length, 4 cm breadth and 1 cm height.\nTwo faces measuring 4 cm x 1 cm are coloured in black.\nTwo faces measuring 6 cm x 1 cm are coloured in red.\nTwo faces measuring 6 cm x 4 cm are coloured in green.\nThe block is divided into 6 equal cubes of side 1 cm (from 6 cm side), 4 equal cubes of side 1 cm(from 4 cm side).",
        answer: "4"
    },
    {
        question: "13. How many small cubes have three faces coloured ?",
        options: [
            "24", "20", "16", "8"
        ],
        direction: "Direction (Q.No. 13): The following questions are based on the information given below:\n\nThere is a cuboid whose dimensions are 4 x 3 x 3 cm.\nThe opposite faces of dimensions 4 x 3 are coloured yellow.\nThe opposite faces of other dimensions 4 x 3 are coloured red.\nThe opposite faces of dimensions 3 x 3 are coloured green.\nNow the cuboid is cut into small cubes of side 1 cm.",
        answer: "8"
    },
    {
        question: "14. How many small cubes are there whose only one face is coloured ?",
        options: [
            "32", "8", "16", "24"
        ],
        direction: "Direction (Q.No. 14): The following questions are based on the information given below:\n\nAll the opposite faces of a big cube are coloured with red, black and green colours. After that is cut into 64 small equal cubes.",
        answer: "24"
    },
    {
        question: "15. College : Student :: Hospital : ?",
        options: [
            "Nurse", "Doctor", "Treatment", "Patient"
        ],
        direction: "Direction (Q.No. 15): In each of the following questions find out the alternative which will replace the question mark.",
        answer: "Patient"
    },
    {
        question: "16. Lucknow, Patna, Bhopal, Jaipur",
        options: [
            "Shimla", "Mysore", "Pune", "Indore"
        ],
        direction: "Direction (Q.No. 16): Each of the following questions has a group. Find out which one of the given alternatives will be another member of the group or of that class.",
        answer: "Indore"
    },
    {
        question: "17. Who is sitting right to Prakash ?",
        options: [
            "Mukesh", "Deepa", "Pankaj", "Lalit"
        ],
        direction: "Direction (Q.No. 17): Six friends are sitting in a circle and are facing the centre of the circle. Deepa is between Prakash and Pankaj. Priti is between Mukesh and Lalit. Prakash and Mukesh are opposite to each other.",
        answer: "Deepa"
    },
    {
        question: "18. Who among the following are three lady members ?",
        options: [
            "E, H and J", "E, F and G", "E, H and G", "C, H and J"
        ],
        direction: "Direction (Q.No. 18): Each of these questions are based on the information given below :\n8 persons E, F, G, H, I, J, K and L are seated around a square table - two on each side.\nThere are 3 ladies who are not seated next to each other.\nJ is between L and F.\nG is between I and F.\nH, a lady member is second to the left of J.\nF, a male member is seated opposite to E, a lady member.\nThere is a lady member between F and I.",
        answer: "E, H and G"
    }
];

const VerbalReasoningTest9 = () => {
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
  
  
  export default VerbalReasoningTest9;