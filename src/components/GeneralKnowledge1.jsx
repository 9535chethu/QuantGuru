import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "Deficit financing implies",
        options: [
            "printing new currency notes",
            "replacing new currency with worn out currency",
            "public expenditure in excess of public revenue",
            "public revenue in excess of public expenditure"
        ],
        answer: "public expenditure in excess of public revenue"
    },
    {
        question: "The Board of Industrial and Financial Reconstruction (BIFR) came into existence in",
        options: [
            "1984",
            "1986",
            "1987",
            "1989"
        ],
        answer: "1987"
    },
    {
        question: "Lal Bahadur Shastri is also known as",
        options: [
            "Guruji",
            "Man of Peace",
            "Punjab Kesari",
            "Mahamana"
        ],
        answer: "Man of Peace"
    },
    {
        question: "Liquid asset is",
        options: [
            "a type of asset that is in cash in the current account of the commercial bank",
            "a type of asset that is in the form of a deposit in the current account of the commercial bank",
            "either of these",
            "None of the above"
        ],
        answer: "either of these"
    },
    {
        question: "Moment of inertia is",
        options: [
            "vector",
            "scalar",
            "phasor",
            "tensor"
        ],
        answer: "tensor"
    },
    {
        question: "What beverage was invented by Charles Alderton in 1885 in Waco, Texas?",
        options: [
            "Cream soda",
            "Coca-Cola",
            "Dr. Pepper",
            "Sprite"
        ],
        answer: "Dr. Pepper"
    },
    {
        question: "What invention caused many deaths while testing it?",
        options: [
            "Dynamite",
            "Ladders",
            "Race cars",
            "Parachute"
        ],
        answer: "Parachute"
    },
    {
        question: "Experts say the healthiest way to view a computer monitor is by...",
        options: [
            "Placing it 18 to 30 inches away from your eyes",
            "Viewing from a darkened room",
            "Adjusting the screen for maximum contrast",
            "Using special glasses that filter out UV rays"
        ],
        answer: "Placing it 18 to 30 inches away from your eyes"
    },
    {
        question: "Ramapithecus and Cro-Magnon man are considered",
        options: [
            "ancestors of modern man",
            "ancestors of monkey",
            "ancestors of lion",
            "None of the above"
        ],
        answer: "ancestors of modern man"
    },
    {
        question: "The important industries of Assam are",
        options: [
            "tea processing, oil refineries and coal",
            "silk and plywood",
            "both (a) and (b)",
            "None of the above"
        ],
        answer: "both (a) and (b)"
    },
    {
        question: "The scientist who first discovered that the earth revolves round the sun was",
        options: [
            "Newton",
            "Dalton",
            "Copernicus",
            "Einstein"
        ],
        answer: "Copernicus"
    },
    {
        question: "When did India enter into space age by launching the satellite 'Aryabhatta'?",
        options: [
            "1966",
            "1932",
            "1975",
            "1990"
        ],
        answer: "1975"
    },
    {
        question: "The longest day (shortest night) in the southern hemisphere is",
        options: [
            "June 21",
            "December 22",
            "July 21",
            "November 22"
        ],
        answer: "December 22"
    },
    {
        question: "The process that explains the recent changes in the height of sea level in coastal areas of eastern and northern Canada and Scandinavi is",
        options: [
            "isostasy",
            "continental drift",
            "plate tectonics",
            "None of the above"
        ],
        answer: "isostasy"
    },
    {
        question: "Who won the Grand Slam title four times successively?",
        options: [
            "Martina Navratilova",
            "Steffi Graf",
            "Jennifer Capriati",
            "Monica Seles"
        ],
        answer: "Steffi Graf"
    },
    {
        question: "Jude Felix is a famous Indian player in which of the fields?",
        options: [
            "Volleyball",
            "Tennis",
            "Football",
            "Hockey"
        ],
        answer: "Hockey"
    },
    {
        question: "The title of 'sparrow' given to",
        options: [
            "Napoleon",
            "Major General Rajinder Singh",
            "T. T. Krishnamachari",
            "Sardar Patel"
        ],
        answer: "Major General Rajinder Singh"
    },
    {
        question: "Which of the following awards was conferred on Mrs. Kiran Bedi?",
        options: [
            "Golden Globe",
            "Rani Lakshmi",
            "Magsaysay",
            "Saraswati"
        ],
        answer: "Magsaysay"
    },
    {
        question: "'Crime and Punishment' was written by",
        options: [
            "Fyodor Dostoevsky",
            "Vladimir Nabakov",
            "Lewis Carrol",
            "Alexander Solzhenitsyn"
        ],
        answer: "Fyodor Dostoevsky"
    },
    {
        question: "Gypsum is added to cement clinker to",
        options: [
            "increase the tensile strength of cement",
            "decrease the rate of setting of cement",
            "facilitate the formation of colloidal gel",
            "bind the particles of calcium silicate"
        ],
        answer: "decrease the rate of setting of cement"
    }
];



const GeneralKnowledge1 = () => {
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
  
  
  export default GeneralKnowledge1;