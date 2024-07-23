import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "The Nagaland State of India cannot be termed as a state because it lacks",
        options: [
            "sovereignty",
            "bicameral legislature",
            "a high court exclusively of its own",
            "None of the above"
        ],
        answer: "a high court exclusively of its own"
    },
    {
        question: "The national flag was adopted by the Constituent Assembly of India on 22 July 1947 and was presented to the nation at the midnight session of the Assembly on 14th August 1947 on behalf of",
        options: [
            "the minorities of India",
            "the National Integration Council",
            "the women of India",
            "the people of India"
        ],
        answer: "the people of India"
    },
    {
        question: "Deficit financing leads to inflation in general, but it can be checked if",
        options: [
            "government expenditure leads to increase in the aggregate supply in ratio of aggregate demand",
            "only aggregate demand is increased",
            "all the expenditure is denoted national debt payment only",
            "All of the above"
        ],
        answer: "government expenditure leads to increase in the aggregate supply in ratio of aggregate demand"
    },
    {
        question: "Since 1983, the RBI's responsibility with respect to regional rural banks was transferred to",
        options: [
            "ARDC",
            "SBI",
            "NABARD",
            "PACs"
        ],
        answer: "NABARD"
    },
    {
        question: "The largest fresh water lake of Africa, area wise is",
        options: [
            "lake Victoria",
            "lake Tanganyika",
            "lake Malawi",
            "Lake Rudolf"
        ],
        answer: "lake Victoria"
    },
    {
        question: "Missile 'prithivi' aims",
        options: [
            "to test the performance of an indigenously built heat-shield",
            "to hit target without the help of the Air Forces",
            "to defend a large installations like oil-fields etc. against enemy attacks",
            "None of the above"
        ],
        answer: "to hit target without the help of the Air Forces"
    },
    {
        question: "What is the predominant type of Indian agriculture?",
        options: [
            "Commercial agriculture",
            "Extensive agriculture",
            "plantation agriculture",
            "subsistence agriculture"
        ],
        answer: "subsistence agriculture"
    },
    {
        question: "Lux is the SI unit of",
        options: [
            "intensity of illumination",
            "luminous efficiency",
            "luminous flux",
            "luminous intensity"
        ],
        answer: "intensity of illumination"
    },
    {
        question: "India reached the final of the Davis Cup for the first time in...?",
        options: [
            "1964",
            "1966",
            "1970",
            "1974"
        ],
        answer: "1966"
    },
    {
        question: "The number of electrons presents in H+ is",
        options: [
            "zero",
            "one",
            "two",
            "three"
        ],
        answer: "zero"
    },
    {
        question: "Primary phloem develops from",
        options: [
            "lateral meristem",
            "protoderm",
            "extrastelar cambium",
            "provascular tissue"
        ],
        answer: "provascular tissue"
    },
    {
        question: "The highest rank in Army is that of",
        options: [
            "Brigadier",
            "General",
            "Lieutenant General",
            "Major General"
        ],
        answer: "General"
    },
    {
        question: "The Kvinna Till Kvinna foundation (Sweden) was award Right Livelihood Award in 2002 for",
        options: [
            "its remarkable successes in healing the wounds of ethnic hatred and war, by helping women, often the prime victims, to be the major agents of reconciliation and peace-building",
            "outstanding courage and persistent efforts to expose and bring to account the tortures",
            "Their exemplary and indomitable courage and compassion, which have proved that, even after murderous civil war, young people from different ethnic groups can learn to live and build a future together in peace and harmony",
            "None of the above"
        ],
        answer: "its remarkable successes in healing the wounds of ethnic hatred and war, by helping women, often the prime victims, to be the major agents of reconciliation and peace-building"
    },
    {
        question: "When was Shakespeare born?",
        options: [
            "1564 AD",
            "1618 AD",
            "1642 AD",
            "1776 AD"
        ],
        answer: "1564 AD"
    },
    {
        question: "The study of human geography includes study of",
        options: [
            "human society and culture",
            "behaviour and urban systems",
            "economics and politics",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "The time at a place is determined by",
        options: [
            "the parallels of longitude",
            "the parallels of latitude",
            "distance from equator",
            "distance from prime meridian"
        ],
        answer: "distance from prime meridian"
    },
    {
        question: "India First won the Olympic Hockey Gold at",
        options: [
            "London",
            "Amsterdam",
            "Berlin",
            "Rome"
        ],
        answer: "Amsterdam"
    },
    {
        question: "'India of our Dreams' is a book written by",
        options: [
            "Dr. S. Radhakrishnan",
            "Dr. C. Subramanian",
            "M.V. Kamath",
            "Dr. Rajendra Prasad"
        ],
        answer: "M.V. Kamath"
    },
    {
        question: "Atoms are composed of",
        options: [
            "electrons and protons",
            "electrons only",
            "protons only",
            "electrons and nuclei"
        ],
        answer: "electrons and nuclei"
    },
    {
        question: "Which is/are the important raw material(s) required in cement industry?",
        options: [
            "Gypsum and Clay",
            "Clay",
            "Limestone and Clay",
            "Limestone"
        ],
        answer: "Limestone and Clay"
    }
];

const GeneralKnowledge9 = () => {
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
  
  
  export default GeneralKnowledge9;