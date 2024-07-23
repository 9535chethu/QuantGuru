import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "The zamindari in Mughal India was not",
        options: [
            "a saleable right",
            "hereditary",
            "ownership of land",
            "morgageable"
        ],
        answer: "ownership of land"
    },
    {
        question: "On which one of the followings is the benefits received principle of taxation to achieve optimality bases?",
        options: [
            "Marginal benefit received",
            "Total benefit received",
            "Average benefit received",
            "Ability to pay for the benefit"
        ],
        answer: "Marginal benefit received"
    },
    {
        question: "Paper currency first started in India in",
        options: [
            "1861",
            "1542",
            "1601",
            "1880"
        ],
        answer: "1861"
    },
    {
        question: "The heavy day soils that show significant expansion and contraction due to the presence or absence of moisture is called",
        options: [
            "aridsols",
            "vertisols",
            "histosols",
            "andisols"
        ],
        answer: "vertisols"
    },
    {
        question: "Lance Armstrong, a sportsperson of international repute, belongs to which of the following countries?",
        options: [
            "USA",
            "Ukraine",
            "Spain",
            "Brazil"
        ],
        answer: "USA"
    },
    {
        question: "Which of the following factors are responsible for the rapid growth of sugar production in south India as compared to north India?\nHigher per acre field of sugarcane\nHigher sucrose content of sugarcane\nLower labour cost\nLonger crushing period",
        options: [
            "I and II",
            "I, II and III",
            "I, III and IV",
            "I, II and IV"
        ],
        answer: "I, II and IV"
    },
    {
        question: "When was the first elevator built?",
        options: [
            "1743",
            "1739",
            "1760",
            "1785"
        ],
        answer: "1743"
    },
    {
        question: "Who has scored the most Test hundreds ever?",
        options: [
            "Steve Waugh",
            "Sachin Tendulkar",
            "Shane Warne",
            "Sunil Gavaskar"
        ],
        answer: "Sachin Tendulkar"
    },
    {
        question: "When did Sourav Ganguly made his ODI debut?",
        options: [
            "20 March 1993",
            "11 January 1992",
            "1 December 1987",
            "1 June 1998"
        ],
        answer: "11 January 1992"
    },
    {
        question: "The first metal used by man was",
        options: [
            "iron",
            "copper",
            "gold",
            "bronze"
        ],
        answer: "copper"
    },
    {
        question: "The frequency of the tuning fork A is slightly higher than the tuning fork B. By sounding them together, beats can be produced. If the fork B is loaded with wax, the frequency of beats will",
        options: [
            "increase",
            "decrease",
            "remain same",
            "become zero"
        ],
        answer: "decrease"
    },
    {
        question: "The highest national award in India given for exceptional work for advancement of art, literature and science",
        options: [
            "Bharat Ratna",
            "Padma Awards",
            "Gallantry Awards",
            "None of the above"
        ],
        answer: "Bharat Ratna"
    },
    {
        question: "The plants grown in equatorial regions include",
        options: [
            "wheat, barley, maize",
            "evergreen dense forests, rubber trees, groundnuts",
            "groundnuts, soyabeens, potatoes",
            "evergreen coniferous forests, oats, cocoa"
        ],
        answer: "evergreen dense forests, rubber trees, groundnuts"
    },
    {
        question: "The short term variations of the atmosphere, ranging from minutes to months are called",
        options: [
            "climate",
            "weather",
            "temperature",
            "humidity"
        ],
        answer: "weather"
    },
    {
        question: "'Global 500' awards are given for the outstanding achievement in which of the following fields?",
        options: [
            "Campaign against AIDS",
            "Population control",
            "Protection of environment",
            "Elimination of illiteracy"
        ],
        answer: "Protection of environment"
    },
    {
        question: "Who said 'God helps those who help themselves'?",
        options: [
            "Andre Maurois",
            "Andre Gide",
            "Algernon Sidney",
            "Swami Vivekananda"
        ],
        answer: "Algernon Sidney"
    },
    {
        question: "Who is the author of famous statement: 'That Government is the best which governs least'?",
        options: [
            "Herbert Spencer",
            "Harold Laski",
            "Alexis De Tocqueville",
            "Henry David Thoreau"
        ],
        answer: "Henry David Thoreau"
    },
    {
        question: "'Kandla' is situated on the Gulf of Kachh is well known for which of the following?",
        options: [
            "Export Processing Zone",
            "Centre for Marine Food products",
            "Cutting and Polishing of diamonds",
            "Ship breaking industry"
        ],
        answer: "Export Processing Zone"
    },
    {
        question: "Indian Cancer Research institute is located at",
        options: [
            "New Delhi",
            "Calcutta",
            "Chennai",
            "Mumbai"
        ],
        answer: "Mumbai"
    },
    {
        question: "Sodium metal is kept under",
        options: [
            "petrol",
            "alcohol",
            "water",
            "kerosene"
        ],
        answer: "kerosene"
    }
];

const GeneralKnowledge7 = () => {
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
  
  
  export default GeneralKnowledge7;