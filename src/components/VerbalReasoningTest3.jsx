import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. One morning after sunrise, Vimal started to walk. During this walking he met Stephen who was coming from opposite direction. Vimal watched that the shadow of Stephen was to the right of him (Vimal). To which direction was Vimal facing?",
        options: [
            "East",
            "West",
            "South",
            "Data inadequate"
        ],
        answer: "South"
    },
    {
        question: "2. After walking 6 km, I turned to the right and then walked 2 km. After then I turned to the left and walked 10 km. In the end, I was moving towards the North. From which direction did I start my journey?",
        options: [
            "North",
            "South",
            "East",
            "West"
        ],
        answer: "South"
    },
    {
        question: "3. Dev, Kumar, Nilesh, Ankur and Pintu are standing facing to the North in a playground such as given below:\nKumar is at 40 m to the right of Ankur.\nDev is 60 m in the south of Kumar.\nNilesh is at a distance of 25 m in the west of Ankur.\nPintu is at a distance of 90 m in the North of Dev.\nWhich one is in the North-East of the person who is to the left of Kumar?",
        options: [
            "Dev",
            "Nilesh",
            "Ankur",
            "Pintu"
        ],
        direction: "Direction (Q.No. 3): Dev, Kumar, Nilesh, Ankur and Pintu are standing facing to the North in a playground such as given below:\nKumar is at 40 m to the right of Ankur.\nDev is 60 m in the south of Kumar.\nNilesh is at a distance of 25 m in the west of Ankur.\nPintu is at a distance of 90 m in the North of Dev.",
        answer: "Pintu"
    },
    {
        question: "4. Each of the following questions is based on the following information:\nSix flats on a floor in two rows facing North and South are allotted to P, Q, R, S, T and U.\nQ gets a North facing flat and is not next to S.\nS and U get diagonally opposite flats.\nR next to U, gets a south facing flat and T gets North facing flat.\nIf the flats of P and T are interchanged then whose flat will be next to that of U?",
        options: [
            "P",
            "Q",
            "R",
            "T"
        ],
        answer: "Q"
    },
    {
        question: "5. If A + B means A is the father of B; A - B means A is the brother B; A % B means A is the wife of B and A x B means A is the mother of B, which of the following shows that M is the maternal grandmother of T?",
        options: [
            "M x N % S + T",
            "M x N - S % T",
            "M x S - N % T",
            "M x N x S % T"
        ],
        answer: "M x N % S + T"
    },
    {
        question: "6. If X + Y means X is the daughter of Y; X - Y means X is the brother of Y; X % Y means X is the father of Y and X x Y means X is the sister of Y. Which of the following means I is the niece of J?",
        options: [
            "J - N % C x I",
            "I x C - N % J",
            "J + M x C % I",
            "I x C + N - J"
        ],
        answer: "I x C - N % J"
    },
    {
        question: "7. Statements: Some poets are poems. No poem is a song.\nConclusions:\n(1) Some poems are not songs.\n(2) Some songs are poems.",
        options: [
            "Only (1) conclusion follows",
            "Only (2) conclusion follows",
            "Either (1) or (2) follows",
            "Neither (1) nor (2) follows",
            "Both (1) and (2) follow"
        ],
        answer: "Only (1) conclusion follows",
        direction: "Direction (Q.No. 7): In each of the following questions two statements are given and these statements are followed by two conclusions numbered (1) and (2). You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusions and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts."
    },
    {
        question: "8. Four positions of a dice are shown below. Which number of the face will be opposite to the face with number 3?",
        options: [
            "1",
            "2",
            "4",
            "5"
        ],
        answer: "1"
    },
    {
        question: "9. Statements:\nMany people in the area are reported to be suffering from Malaria.\nPrivate Medical Practitioners in the area have decided to close their clinics for few days.",
        options: [
            "Statement I is the cause and statement II is its effect.",
            "Statement II is the cause and statement I is its effect.",
            "Both the statements I and II are independent causes.",
            "Both the statements I and II are effects of independent causes.",
            "Both the statements I and II are effects of some common cause."
        ],
        answer: "Both the statements I and II are effects of independent causes.",
        direction: "Direction (Q.Nos. 9 - 10): Below in each of the questions are given two statements I and II. These statements may be either independent causes or may be effects of independent causes or a common cause. One of these statements may be the effect of the other statements. Read both the statements and decide which of the following answer choice correctly depicts the relationship between these two statements."
    },
    {
        question: "10. Statements:\nThe Government has reduced the prices of petroleum products by five percent a week after increasing the prices by ten percent.\nThe rate of inflation dropped marginally during the last week.",
        options: [
            "Statement I is the cause and statement II is its effect.",
            "Statement II is the cause and statement I is its effect.",
            "Both the statements I and II are independent causes.",
            "Both the statements I and II are effects of independent causes.",
            "Both the statements I and II are effects of some common cause."
        ],
        answer: "Statement I is the cause and statement II is its effect."
    },
    {
        question: "11. Which of the following diagrams indicates the best relation between Women, Mothers and Engineers?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D",
            "Option E"
        ],
        answer: "Option B",
        direction: "Direction (Q.No. 11): Each of these questions given below contains three elements. These elements may or may not have some inter linkage. Each group of elements may fit into one of these diagrams at (A), (B), (C), (D) and/or (E). You have to indicate the group of elements which correctly fits into the diagrams."
    },
    {
        question: "12. In the following figure triangle represents 'girls', square players and circle-coach. Which part of the diagram represents the girls who are player but not coach?",
        options: [
            "P",
            "Q",
            "R",
            "S"
        ],
        answer: "R"
    },
    {
        question: "13. Study the following figure and answer the questions given below. How many educated people are employed?",
        options: [
            "9",
            "18",
            "20",
            "15"
        ],
        answer: "9",
        direction: "Direction (Q.No. 13): Study the following figure and answer the questions given below."
    },
    {
        question: "14. BLOCKED : YOLXPVW :: ? : OZFMXS",
        options: [
            "DEBATE",
            "RESULT",
            "LABOR",
            "LAUNCH"
        ],
        answer: "LAUNCH"
    },
    {
        question: "15. Each of the following questions has a group. Find out which one of the given alternatives will be another member of the group or of that class.\nRoot, Stem, Branch",
        options: [
            "Fertilizer",
            "Leaf",
            "Tree",
            "Wood"
        ],
        answer: "Leaf"
    },
    {
        question: "16. 'Forest' is related to 'Vivarium' in the same way as 'sea' is related to:",
        options: [
            "Port site",
            "Water",
            "Fishery",
            "Aquarium"
        ],
        answer: "Aquarium"
    },
    {
        question: "17. In a class there are seven students (including boys and girls) A, B, C, D, E, F and G. They sit on three benches I, II and III. Such that at least two students on each bench and at least one girl on each bench. C who is a girl student, does not sit with A, E and D. F the boy student sits with only B. A sits on the bench I with his best friends. G sits on the bench III. E is the brother of C. How many girls are there out of these 7 students?",
        options: [
            "3",
            "3 or 4",
            "4",
            "Data inadequate"
        ],
        answer: "3 or 4"
    },
    {
        question: "18. Which one will replace the question mark?",
        options: [
            "25",
            "37",
            "41",
            "47"
        ],
        answer: "41"
    },
    {
        question: "19. Which one will replace the question mark?",
        options: [
            "25",
            "625",
            "125",
            "50"
        ],
        answer: "125"
    },
    {
        question: "20. Arrange the words given below in a meaningful sequence.\n1. Elephant 2. Cat 3. Mosquito 4. Tiger 5. Whale",
        options: [
            "5, 3, 1, 2, 4",
            "3, 2, 4, 1, 5",
            "1, 3, 5, 4, 2",
            "2, 5, 1, 4, 3"
        ],
        direction: "Direction (Q.No. 20): In each of the following questions, arrange the given words in a meaningful sequence and thus find the correct answer from alternatives.",
        answer: "3, 2, 4, 1, 5"
    }
];
const VerbalReasoningTest3 = () => {
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
  
  
  export default VerbalReasoningTest3;