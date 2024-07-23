import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "There was a sharp class division at Harappa and Mohen-jodaro. This is clear from the",
        options: [
            "Indus seals excavated",
            "religious beliefs of the Harappans",
            "tools and implements used by the Harappans",
            "different types of dwellings excavated"
        ],
        answer: "different types of dwellings excavated"
    },
    {
        question: "We can know about early Vedic period from",
        options: [
            "archaeological excavations",
            "the Rig Veda",
            "Jatak Katha",
            "contemporary culture"
        ],
        answer: "the Rig Veda"
    },
    {
        question: "We hear of two envoys being sent to the Roman kings, one in 27-28 AD to the court of Augustus and the other in 110-20 AD to the court of",
        options: [
            "Cartius",
            "Trajan",
            "Nero",
            "Brutus"
        ],
        answer: "Trajan"
    },
    {
        question: "The initial increase of magnetic field in magnetic storms is caused",
        options: [
            "when the shock wave, associated with the gusty solar wind, compresses the magnetosphere",
            "when there is a large decrease in field intensity",
            "when the gust wind itself engulfs the magnetosphere",
            "None of the above"
        ],
        answer: "when the shock wave, associated with the gusty solar wind, compresses the magnetosphere"
    },
    {
        question: "Jesus Christ was crucified in",
        options: [
            "4 BC",
            "4 AD",
            "20 AD",
            "1 AD"
        ],
        answer: "1 AD"
    },
    {
        question: "Rabindranath Tagore is also known as",
        options: [
            "Guruji",
            "Gurudev",
            "Mahamana",
            "Netaji"
        ],
        answer: "Gurudev"
    },
    {
        question: "Which of the following crops is regarded as a plantation crop?",
        options: [
            "Coconut",
            "Cotton",
            "Sugarcane",
            "Rice"
        ],
        answer: "Coconut"
    },
    {
        question: "Who invented Electric Generator?",
        options: [
            "Sir Alexander Graham Bell",
            "Michael Faraday",
            "Alfred B. Nobel",
            "Thomas Alva Edison"
        ],
        answer: "Michael Faraday"
    },
    {
        question: "What inspired reflecting road lights to be invented?",
        options: [
            "Car door reflecting mirrors",
            "The light a cat's eyes gave off on a fence",
            "Sun light on steel posts on road sides",
            "The sun light on the windshield"
        ],
        answer: "The light a cat's eyes gave off on a fence"
    },
    {
        question: "In which year did Ajay Sharma play his only Test match?",
        options: [
            "1990",
            "1989",
            "1985",
            "1988"
        ],
        answer: "1988"
    },
    {
        question: "A coating of dust on a computer's main circuit boards has this probable consequence",
        options: [
            "Overheating",
            "Short circuits",
            "Slower hard disk",
            "None"
        ],
        answer: "Overheating"
    },
    {
        question: "The maximum capacity of any orbital is",
        options: [
            "2",
            "6",
            "14",
            "Cannot be determined unless the principal quantum number is known"
        ],
        answer: "Cannot be determined unless the principal quantum number is known"
    },
    {
        question: "Most highly intelligent mammals are",
        options: [
            "whales",
            "dolphins",
            "elephants",
            "kangaroos"
        ],
        answer: "dolphins"
    },
    {
        question: "Photosynthesis is a process",
        options: [
            "reductive and exergonic",
            "reductive and catabolic",
            "reductive, endergonic and catabolic",
            "reductive, endergonic and anabolic"
        ],
        answer: "reductive, endergonic and anabolic"
    },
    {
        question: "Deforestation in the uplands may cause pollution in rivers through",
        options: [
            "leaching of salts",
            "erosion and silting",
            "inflow of forest material",
            "increased discharge rate"
        ],
        answer: "erosion and silting"
    },
    {
        question: "What was the purpose of establishment of NATO?",
        options: [
            "To maintain and develop individual and collective capacity to resist armed attack",
            "To defend economic and trade interests of the developing nations of the world",
            "To provide collective defence and economic cooperation in south-east Asia",
            "None of the above"
        ],
        answer: "To maintain and develop individual and collective capacity to resist armed attack"
    },
    {
        question: "The main properties of cosmic ray particles are",
        options: [
            "its electric charge",
            "its rest mass",
            "its energy",
            "All of these are its properties"
        ],
        answer: "All of these are its properties"
    },
    {
        question: "The periods of different eras are further divided into",
        options: [
            "eons",
            "epochs",
            "stages",
            "Any of the above"
        ],
        answer: "epochs"
    },
    {
        question: "Pandit Vishwa Mohan Bhatt, who has won the prestigious 'Grammy Awards' is an exponent in which of the following musical instruments?",
        options: [
            "Guitar",
            "Violin",
            "sarod",
            "Tabla"
        ],
        answer: "Guitar"
    },
    {
        question: "The 'satellite freight city' is being developed near which of the following cities?",
        options: [
            "New Delhi",
            "Orissa",
            "Gurgaon",
            "Kolkata"
        ],
        answer: "Gurgaon"
    }
];

const GeneralKnowledge4 = () => {
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
  
  
  export default GeneralKnowledge4;