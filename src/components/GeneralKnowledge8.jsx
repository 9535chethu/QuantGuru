import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "To which king belongs the Lion capital at Sarnath?",
        options: [
            "Chandragupta",
            "Ashoka",
            "Kanishka",
            "Harsha"
        ],
        answer: "Ashoka"
    },
    {
        question: "The Objectives Resolution which laid down the main objectives to guide the deliberations of the Assembly was moved by",
        options: [
            "Sardar Patel",
            "Jawaharlal Nehru",
            "K.M. Munshi",
            "B.R. Ambedkar"
        ],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "For seeing objects at the surface of water from a submarine under water, the instrument used is",
        options: [
            "kaleidoscope",
            "periscope",
            "spectroscope",
            "telescope"
        ],
        answer: "periscope"
    },
    {
        question: "GATT (General Agreement on Tariffs and Trade) is",
        options: [
            "international agreement signed in 1947 between non-communist nations with the object of encouraging international trade unobstructed by tariff barriers",
            "agreement which seeks to achieve its aim by arranging and encouraging bargaining with trade concessions between members",
            "Both option A and B",
            "None of the above"
        ],
        answer: "Both option A and B"
    },
    {
        question: "India's first Technicolor film ____ in the early 1950s was produced by ____",
        options: [
            "'Jhansi Ki Rani', Sohrab Modi",
            "'Jhansi Ki Rani', Sir Syed Ahmed",
            "'Mirza Ghalib', Sohrab Modi",
            "'Mirza Ghalib', Munshi Premchand"
        ],
        answer: "'Jhansi Ki Rani', Sohrab Modi"
    },
    {
        question: "Penicillin is widely used as",
        options: [
            "an antiseptic",
            "a disinfectant",
            "an antibiotic",
            "an insecticide"
        ],
        answer: "an antibiotic"
    },
    {
        question: "On a stationary sail boat, air is blown from a fan attached to the boat. The boat",
        options: [
            "moves in opposite direction in which the air is blown",
            "does not move",
            "moves in the same direction in which air blows",
            "spins around"
        ],
        answer: "does not move"
    },
    {
        question: "Which two counties did Anil Kumble play for?",
        options: [
            "Nottinghamshire & Lancashire",
            "Nottinghamshire & Leicestershire",
            "Northamptonshire & Leicestershire",
            "Northamptonshire & Lancashire"
        ],
        answer: "Northamptonshire & Leicestershire"
    },
    {
        question: "Which country, which made its debut in the Norwich Union League in 2003, signed Rahul Dravid as their overseas player?",
        options: [
            "Holland",
            "Ireland",
            "Wales",
            "Scotland"
        ],
        answer: "Scotland"
    },
    {
        question: "The average power (in watts) used by a 20 to 25 inch home color television is...?",
        options: [
            "70-100",
            "25-50",
            "500-800",
            "Over 1000"
        ],
        answer: "70-100"
    },
    {
        question: "What is a MAC?",
        options: [
            "A Computer made by Apple",
            "Memory Address Corruption",
            "Mediocre Apple Computer",
            "Media Access Control"
        ],
        answer: "Media Access Control"
    },
    {
        question: "The mass number of a nucleus is",
        options: [
            "always less than its atomic number",
            "the sum of the number of protons and neutrons present in the nucleus",
            "always more than the atomic weight",
            "a fraction"
        ],
        answer: "the sum of the number of protons and neutrons present in the nucleus"
    },
    {
        question: "The official language of the Government of India is",
        options: [
            "English",
            "Malayalam",
            "Hindi",
            "Marathi"
        ],
        answer: "Hindi"
    },
    {
        question: "When and where was hockey introduced for women in Olympics?",
        options: [
            "1908 at London",
            "1980 at Moscow",
            "1936 at Berlin",
            "1924 at Paris"
        ],
        answer: "1980 at Moscow"
    },
    {
        question: "The main producers of free gas are",
        options: [
            "the south Bassein and Tapti fields in the western offshore",
            "the gas fields in Tripura and Andhra Pradesh (KG Basin)",
            "both (a) and (b)",
            "None of the above"
        ],
        answer: "both (a) and (b)"
    },
    {
        question: "Ali Sher, an Arjuna Award winner, is associated with",
        options: [
            "Golf",
            "Football",
            "Yatching",
            "Hockey"
        ],
        answer: "Golf"
    },
    {
        question: "National Institute of Nutrition is located in which of the following place?",
        options: [
            "Bangalore",
            "Kerala",
            "Gandhinagar",
            "Hyderabad"
        ],
        answer: "Hyderabad"
    },
    {
        question: "The 'Char Minar' is in",
        options: [
            "Ahmedabad",
            "Hyderabad",
            "Delhi",
            "Sikri"
        ],
        answer: "Hyderabad"
    },
    {
        question: "The headquarters of the UNESCO is at",
        options: [
            "Rome",
            "Geneva",
            "New York",
            "Paris"
        ],
        answer: "Paris"
    },
    {
        question: "Amalgams are",
        options: [
            "highly coloured alloys",
            "alloys which contain mercury as one of the contents",
            "alloys which have great resistance to abrasion",
            "alloys which contain carbon"
        ],
        answer: "alloys which contain mercury as one of the contents"
    }
];


const GeneralKnowledge8 = () => {
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
  
  
  export default GeneralKnowledge8;