import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "The iron and steel industries of which of the following countries are almost fully dependent on imported raw materials?",
        options: [
            "Britain",
            "Japan",
            "Poland",
            "Germany"
        ],
        answer: "Japan"
    },
    {
        question: "The iron ore mined at Bailadila is mostly",
        options: [
            "haematite",
            "siderite",
            "limonite",
            "magnetite"
        ],
        answer: "haematite"
    },
    {
        question: "India's first indigenously built submarine was",
        options: [
            "INS Savitri",
            "INS Shalki",
            "INS Delhi",
            "INS Vibhuti"
        ],
        answer: "INS Shalki"
    },
    {
        question: "Rana Pratap Sagar (Rajasthan) is famous for",
        options: [
            "hydropower generation",
            "aluminum industry",
            "brassware",
            "sports goods"
        ],
        answer: "hydropower generation"
    },
    {
        question: "The 2002 Commonwealth Games were held in",
        options: [
            "Canada",
            "UK",
            "Australia",
            "Malaysia"
        ],
        answer: "UK"
    },
    {
        question: "Which of the following crops needs maximum water per hectare?",
        options: [
            "Barley",
            "Maize",
            "Sugarcane",
            "Wheat"
        ],
        answer: "Sugarcane"
    },
    {
        question: "Sir C.V. Raman was awarded Nobel Prize for his work connected with which of the following phenomenon of radiation?",
        options: [
            "Scattering",
            "Diffraction",
            "Interference",
            "Polarization"
        ],
        answer: "Scattering"
    },
    {
        question: "If the picture is stretched or distorted up and down like a fun house mirror the circuit to adjust or repair is...?",
        options: [
            "Vertical",
            "Tuning",
            "Horizontal",
            "Filament"
        ],
        answer: "Vertical"
    },
    {
        question: "Who created Pretty Good Privacy (PGP)?",
        options: [
            "Phil Zimmermann",
            "Tim Berners-Lee",
            "Marc Andreessen",
            "Ken Thompson"
        ],
        answer: "Phil Zimmermann"
    },
    {
        question: "Mumps is a disease caused by",
        options: [
            "fungus",
            "bacterium",
            "virus",
            "None of these"
        ],
        answer: "virus"
    },
    {
        question: "Placenta is the structure formed",
        options: [
            "by the union of foetal and uterine tissue",
            "by foetus only",
            "by fusion of germ layers",
            "None of these"
        ],
        answer: "by the union of foetal and uterine tissue"
    },
    {
        question: "The helicopter fleet of Air Force consists of",
        options: [
            "Chetak",
            "Cheetah",
            "MI-8s, MI-17s, MI-26",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which of the following are the members of SAARC (South Asian Association for Regional Cooperation)?",
        options: [
            "Bhutan, Bangladesh, India and Pakistan",
            "Bhutan, Bangladesh, the Maldives, Nepal, India, Pakistan, Afghanistan and Sri Lanka",
            "Afghanistan, Pakistan, Thailand, Indonesia, Nepal and Sri Lanka",
            "None of the above"
        ],
        answer: "Bhutan, Bangladesh, the Maldives, Nepal, India, Pakistan, Afghanistan and Sri Lanka"
    },
    {
        question: "The ratio of the weight of water vapour to the total weight of air (including the water vapor) is called",
        options: [
            "specific humidity",
            "mixing ratio",
            "relative humidity",
            "absolute humidity"
        ],
        answer: "specific humidity"
    },
    {
        question: "The sidereal month may be defined as",
        options: [
            "the period in which the moon completes an orbit around the earth",
            "the period in which the moon completes an orbit around the earth and returns to the same positions in the sky",
            "the period of rotation of moon",
            "None of the above"
        ],
        answer: "the period in which the moon completes an orbit around the earth"
    },
    {
        question: "On whose name is the highest award for services to the development of cinema given?",
        options: [
            "Raj Kapoor",
            "Dada Saheb",
            "Meena Kumari",
            "Amitabh Bachchan"
        ],
        answer: "Dada Saheb"
    },
    {
        question: "In India the first television programme was broadcasted in",
        options: [
            "1959",
            "1965",
            "1976",
            "1957"
        ],
        answer: "1959"
    },
    {
        question: "The United Nations declared 1993 as a year of the",
        options: [
            "disabled",
            "forests",
            "girl child",
            "indigenous people"
        ],
        answer: "indigenous people"
    },
    {
        question: "The United Nations Conference on Trade and Development (UNCTAD) is located at which of the following places?",
        options: [
            "Geneva",
            "Rome",
            "Paris",
            "Vienna"
        ],
        answer: "Geneva"
    },
    {
        question: "Who suggested that most of the mass of the atom is located in the nucleus?",
        options: [
            "Thompson",
            "Bohr",
            "Rutherford",
            "Einstein"
        ],
        answer: "Rutherford"
    }
];


const GeneralKnowledge3 = () => {
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
  
  
  export default GeneralKnowledge3;