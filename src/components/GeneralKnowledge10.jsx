import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "The president convenes and prorogues all sessions of Parliament in consultation with",
        options: [
            "the speaker",
            "the prime minister",
            "the prime minister and the leader of the Opposition in Lok Sabha",
            "None of the above"
        ],
        answer: "the prime minister"
    },
    {
        question: "The ground water that occurs when flow of the subterranean water is not confined by the presence of impermeable layers is called",
        options: [
            "unconfined groundwater",
            "confined groundwater",
            "aquifer",
            "artesian"
        ],
        answer: "unconfined groundwater"
    },
    {
        question: "What treat was invented by 11-year-old Frank Epperson in 1905?",
        options: [
            "Popsicle",
            "Banana split",
            "Cotton candy",
            "Cracker Jacks"
        ],
        answer: "Popsicle"
    },
    {
        question: "What is the middle name of Akash Chopra, a Delhi batsman?",
        options: [
            "Mohanlal",
            "Shyamlal",
            "Amarnath",
            "Chotaram"
        ],
        answer: "Shyamlal"
    },
    {
        question: "What is the term to ask the computer to put information in order numerically or alphabetically?",
        options: [
            "Crop",
            "Report",
            "Record",
            "Sort"
        ],
        answer: "Sort"
    },
    {
        question: "Which is the best search tool for finding Web sites that have been handpicked and recommended by someone else?",
        options: [
            "Subject directories",
            "Search engines",
            "Meta-search engines",
            "Discussion groups"
        ],
        answer: "Subject directories"
    },
    {
        question: "Organic Substances which, in very small amounts, control growth and development called",
        options: [
            "vitamins",
            "hormones",
            "enzymes",
            "None of the above"
        ],
        answer: "hormones"
    },
    {
        question: "Pollination is best defined as",
        options: [
            "transfer of pollen from anther to stigma",
            "germination of pollen grains",
            "growth of pollen tube in ovule",
            "visiting flowers by insects"
        ],
        answer: "transfer of pollen from anther to stigma"
    },
    {
        question: "The main purpose of ASEAN (Association of South-East Asian Nations) is",
        options: [
            "to accelerate economic progress and maintain economic stability",
            "to maintain higher standards of living among member nations",
            "to provide collective defence and economic cooperation",
            "None of the above"
        ],
        answer: "to accelerate economic progress and maintain economic stability"
    },
    {
        question: "The member of SEATO (South-East Asia Treaty Organisation) are",
        options: [
            "Australia, France, New Zealand",
            "Philippines, Thailand",
            "UK and USA",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "The National Emblem was adopted by Government of India on",
        options: [
            "January 26, 1950",
            "August 15, 1947",
            "August 2, 1950",
            "July 12, 1947"
        ],
        answer: "January 26, 1950"
    },
    {
        question: "The Pilotless target aircraft, fabricated at the Aeronautical Development Establishment, Bangalore, is",
        options: [
            "Lakshya",
            "Cheetah",
            "Nishant",
            "Arjun"
        ],
        answer: "Lakshya"
    },
    {
        question: "When did Afghanistan ends monarchy and became a republic?",
        options: [
            "1949",
            "1973",
            "1965",
            "2000"
        ],
        answer: "1973"
    },
    {
        question: "When did India hosted the Common wealth meeting?",
        options: [
            "1961 at Bangalore",
            "1976 at Pune",
            "1983 at New Delhi",
            "None of the above"
        ],
        answer: "1983 at New Delhi"
    },
    {
        question: "Which city in Tamil Nadu has airport?",
        options: [
            "Chennai",
            "Triuchirapalli",
            "Madurai",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "The lowermost and the oldest epoch of the Tertiary Period of geologic time is",
        options: [
            "Pliocene",
            "Palaeozoic",
            "Holocene",
            "Palaeocene"
        ],
        answer: "Palaeocene"
    },
    {
        question: "The meridian passing through London is called the",
        options: [
            "equator",
            "Tropic of Cancer",
            "Prime Meridian of 0º Meridian",
            "Tropic of Capricorn"
        ],
        answer: "Prime Meridian of 0º Meridian"
    },
    {
        question: "The movement of particles by rolling, sliding and shuffling along the eroded surface is called",
        options: [
            "saltation",
            "suspension",
            "traction",
            "solution"
        ],
        answer: "traction"
    },
    {
        question: "Who has written the book 'My Frozen Turbulence in Kashmir'?",
        options: [
            "Anees Jung",
            "Jagmohan",
            "M.J.Akbar",
            "Nissim Ezekiel"
        ],
        answer: "Jagmohan"
    },
    {
        question: "Which of the following countries is not a member of the G-8 group?",
        options: [
            "Germany",
            "France",
            "Italy",
            "Spain"
        ],
        answer: "Spain"
    }
];


const GeneralKnowledge10 = () => {
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
  
  
  export default GeneralKnowledge10;