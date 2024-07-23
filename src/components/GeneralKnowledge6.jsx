import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "Fastest shorthand writer was",
        options: [
            "Dr. G. D. Bist",
            "J.R.D. Tata",
            "J.M. Tagore",
            "Khudada Khan"
        ],
        answer: "Dr. G. D. Bist"
    },
    {
        question: "Fathometer is used to measure",
        options: [
            "Earthquakes",
            "Rainfall",
            "Ocean depth",
            "Sound intensity"
        ],
        answer: "Ocean depth"
    },
    {
        question: "Film and TV institute of India is located at",
        options: [
            "Pune (Maharashtra)",
            "Rajkot (Gujarat)",
            "Pimpri (Maharashtra)",
            "Perambur (Tamilnadu)"
        ],
        answer: "Pune (Maharashtra)"
    },
    {
        question: "FRS stands for",
        options: [
            "Fellow Research System",
            "Federation of Regulation Society",
            "Fellow of Royal Society",
            "None of the above"
        ],
        answer: "Fellow of Royal Society"
    },
    {
        question: "Which of the following food grain crops occupies the largest part of the cropped area in India?",
        options: [
            "Barley and maize",
            "Jowar and bajra",
            "Rice",
            "Wheat"
        ],
        answer: "Rice"
    },
    {
        question: "Oil raise up the wick in a lamp. The principle involves",
        options: [
            "the diffusion of oil through the wick",
            "the liquid state of oil",
            "capillary action phenomenon",
            "volatility of oil"
        ],
        answer: "capillary action phenomenon"
    },
    {
        question: "Radiocarbon is produced in the atmosphere as a result of",
        options: [
            "collision between fast neutrons and nitrogen nuclei present in the atmosphere",
            "action of ultraviolet light from the sun on atmospheric oxygen",
            "action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere",
            "lightning discharge in atmosphere"
        ],
        answer: "collision between fast neutrons and nitrogen nuclei present in the atmosphere"
    },
    {
        question: "Superconductors are substances which",
        options: [
            "conduct electricity at low temperature",
            "offer high resistance to the flow of current",
            "offer no resistance to the flow of electricity",
            "conduct electricity at high temperatures"
        ],
        answer: "offer no resistance to the flow of electricity"
    },
    {
        question: "Which county did Javagal Srinath sign for in 2003?",
        options: [
            "Surrey",
            "Durham",
            "Sussex",
            "Essex"
        ],
        answer: "Durham"
    },
    {
        question: "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
        options: [
            "Choke",
            "Inductor",
            "Resistor",
            "Capacitor"
        ],
        answer: "Resistor"
    },
    {
        question: "Larger buildings may be supplied with a medium voltage electricity supply, and will require a substation or mini-sub. What is the main item of equipment contained in these?",
        options: [
            "Transformer",
            "Transponder",
            "Transducer",
            "Converter"
        ],
        answer: "Transformer"
    },
    {
        question: "The main chemical constituent of the oil of cardamom which is responsible for flavour of this oil is",
        options: [
            "cineole",
            "engenol",
            "geraniol",
            "limonene"
        ],
        answer: "cineole"
    },
    {
        question: "Myopia is connected with",
        options: [
            "ears",
            "eyes",
            "lungs",
            "None of these"
        ],
        answer: "eyes"
    },
    {
        question: "Potato is a modified form (outgrowth) of",
        options: [
            "root",
            "stem",
            "fruit",
            "leaf"
        ],
        answer: "stem"
    },
    {
        question: "The Treaty of Versailles was signed in",
        options: [
            "1917",
            "1918",
            "1919",
            "1920"
        ],
        answer: "1919"
    },
    {
        question: "To which country does the present UN Secretary-General belongs?",
        options: [
            "Ghana",
            "South Korea",
            "Spain",
            "Portugal"
        ],
        answer: "Portugal"
    },
    {
        question: "When did Christopher Columbus discover the West Indies?",
        options: [
            "1455 AD",
            "1492 AD",
            "1139 AD",
            "1556 AD"
        ],
        answer: "1492 AD"
    },
    {
        question: "Where did the three leaders, F.D. Roosevelt, Winston Churchill and Joseph Stalin, meet in 1943 and agreed on the need for maintaining international peace?",
        options: [
            "Moscow",
            "San Francisco",
            "Teheran",
            "Washington D.C."
        ],
        answer: "Teheran"
    },
    {
        question: "The region that has a typical dispersed rural settlement pattern is the",
        options: [
            "Kerala coastal plain",
            "western Ganga plain",
            "eastern Rajasthan",
            "Telengana plateau"
        ],
        answer: "eastern Rajasthan"
    },
    {
        question: "The headquarters of Food and Agriculture Organisation is in",
        options: [
            "Washington",
            "Paris",
            "Madrid",
            "Rome"
        ],
        answer: "Rome"
    }
];
const GeneralKnowledge6 = () => {
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
  
  
  export default GeneralKnowledge6;