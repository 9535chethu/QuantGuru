import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "The members of the Rajya Sabha are",
        options: [
            "directly elected by the people on the basis of universal adult franchise",
            "elected by the members of the state legislative assemblies",
            "elected by the members of the state legislative councils",
            "elected by the members of the state legislative councils and state legislative assemblies"
        ],
        answer: "elected by the members of the state legislative assemblies"
    },
    {
        question: "The islands of Seychelles are located in the",
        options: [
            "Arctic Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean"
        ],
        answer: "Indian Ocean"
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        options: [
            "Physics and Chemistry",
            "Physiology or Medicine",
            "Literature, Peace and Economics",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "India played its first cricket Test Match in",
        options: [
            "1922",
            "1932",
            "1942",
            "1952"
        ],
        answer: "1932"
    },
    {
        question: "ML2T-2 is the dimensional formula for",
        options: [
            "moment of inertia",
            "pressure",
            "elasticity",
            "couple acting on a body"
        ],
        answer: "pressure"
    },
    {
        question: "How many gold medals did P.T.Usha win in the 1986 Seoul Asian Games?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "4"
    },
    {
        question: "Gautam Gambhir made his ODI debut in 2003. That match was won by India by 200 runs. How many balls did he face for his 11 runs?",
        options: [
            "10",
            "11",
            "22",
            "33"
        ],
        answer: "22"
    },
    {
        question: "The transformer that develops the high voltage in a home television is commonly called a...?",
        options: [
            "Tesla coil",
            "Flyback",
            "Yoke",
            "Van de Graaf"
        ],
        answer: "Flyback"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Cute People United",
            "Commonwealth Press Union",
            "Computer Parts of USA",
            "Central Processing Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "How many bits is a byte?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "8"
    },
    {
        question: "The most abundant rare gas in the atmosphere is",
        options: [
            "He",
            "Ne",
            "Ar",
            "Xe"
        ],
        answer: "Ar"
    },
    {
        question: "O2 released in the process of photosynthesis comes from",
        options: [
            "CO2",
            "water",
            "sugar",
            "pyruvic acid"
        ],
        answer: "water"
    },
    {
        question: "Pyorrhoea is a disease of the",
        options: [
            "nose",
            "gums",
            "heart",
            "lungs"
        ],
        answer: "gums"
    },
    {
        question: "The temperature increases rapidly after",
        options: [
            "ionosphere",
            "exosphere",
            "stratosphere",
            "troposphere"
        ],
        answer: "ionosphere"
    },
    {
        question: "Tripping is associated with",
        options: [
            "Snooker",
            "Volleyball",
            "Football",
            "Cricket"
        ],
        answer: "Football"
    },
    {
        question: "Girilal Jain was a noted figure in which of the following fields?",
        options: [
            "Social Service",
            "Journalism",
            "Literature",
            "Politics"
        ],
        answer: "Journalism"
    },
    {
        question: "The famous book 'Anandmath' was authored by",
        options: [
            "Sarojini Naidu",
            "Bankim Chandra Chottapadhya",
            "Sri Aurobindo",
            "Rabindrnath Tagore"
        ],
        answer: "Bankim Chandra Chottapadhya"
    },
    {
        question: "Which of the following is a military alliance?",
        options: [
            "NATO",
            "NAFTA",
            "EEC",
            "ASEAN"
        ],
        answer: "NATO"
    },
    {
        question: "The filament of an electric bulb is made of",
        options: [
            "tungsten",
            "nichrome",
            "graphite",
            "iron"
        ],
        answer: "tungsten"
    },
    {
        question: "The main constituents of pearls are",
        options: [
            "calcium oxide and ammonium chloride",
            "calcium carbonate and magnesium carbonate",
            "aragonite and conchiolin",
            "ammonium sulphate and sodium carbonate"
        ],
        answer: "calcium carbonate and magnesium carbonate"
    }
];

const GeneralKnowledge2 = () => {
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
  
  
  export default GeneralKnowledge2;