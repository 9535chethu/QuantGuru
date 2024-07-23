import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';
const questions = [
    {
        question: "Which of the following is the first Indian private company to sign an accord with Government of Myanmar for oil exploration in two offshore blocks in that country?",
        options: [
            "Reliance Energy",
            "Essar Oil",
            "GAIL",
            "ONGC"
        ],
        answer: "Essar Oil"
    },
    {
        question: "John F. Kennedy was",
        options: [
            "one of the most popular Presidents of USA",
            "the first Roman Catholic President",
            "writer of Why England slept and Profile in Courage",
            "All the above"
        ],
        answer: "All the above"
    },
    {
        question: "The Salal Project is on the river",
        options: [
            "Chenab",
            "Jhelum",
            "Ravi",
            "Sutlej"
        ],
        answer: "Chenab"
    },
    {
        question: "Light from the star, Alpha Centauri, which is nearest to the earth after the sun, reaches the earth in",
        options: [
            "4.2 seconds",
            "42 seconds",
            "4.2 years",
            "42 years"
        ],
        answer: "4.2 years"
    },
    {
        question: "CORN FLAKES - Who made them first?",
        options: [
            "Nabisco",
            "Kellogg",
            "Quaker",
            "Archers"
        ],
        answer: "Kellogg"
    },
    {
        question: "How many wickets did Yograj Singh take in his 1st ODI match?",
        options: [
            "1",
            "2",
            "4",
            "3"
        ],
        answer: "2"
    },
    {
        question: "\"FET\" is a type of transistor, Its full name is ________ Effect Transistor...?",
        options: [
            "Field",
            "Factor",
            "Flash",
            "Force"
        ],
        answer: "Field"
    },
    {
        question: "A program that neither replicates or copies itself, but does damage or compromises the security of the computer. Which 'Computer Virus' it is?",
        options: [
            "Joke Program",
            "Worm",
            "Trojan",
            "Hoax"
        ],
        answer: "Trojan"
    },
    {
        question: "The mass number of an atom is equal to",
        options: [
            "the number of protons",
            "the number of protons and electrons",
            "the number of nucleons",
            "the number of neutrons"
        ],
        answer: "the number of nucleons"
    },
    {
        question: "The language spoken in Sikkim are",
        options: [
            "Nepali, Hindi, Lepcha, Bhutani",
            "Marathi",
            "Bengali, Tripuri",
            "Manipuri"
        ],
        answer: "Nepali, Hindi, Lepcha, Bhutani"
    },
    {
        question: "The largest airport in the world is",
        options: [
            "Palam Airport",
            "Indira Gandhi International Airport",
            "Cochin International Airport",
            "King Khalid International Airport"
        ],
        answer: "King Khalid International Airport"
    },
    {
        question: "The term cover point in cricket means",
        options: [
            "the position given by the bowler to the fielder on the offside, in front of a wicket",
            "if the ball goes off the batsman's leg",
            "an off-break ball bowled by a left-handed bowler to a right-handed batsman",
            "None of the above"
        ],
        answer: "the position given by the bowler to the fielder on the offside, in front of a wicket"
    },
    {
        question: "The velocity of light was first measured by",
        options: [
            "Einstein",
            "Newton",
            "Romer",
            "Galileo"
        ],
        answer: "Romer"
    },
    {
        question: "The world's largest international organization and a successor to the League of Nations is",
        options: [
            "UNESCO",
            "UNO",
            "UNICEF",
            "None of the above"
        ],
        answer: "UNO"
    },
    {
        question: "What is the capital of Dadra and Nagar Haveli?",
        options: [
            "Daman",
            "Silvassa",
            "Dispur",
            "Shilling"
        ],
        answer: "Silvassa"
    },
    {
        question: "Bahadur Singh is famous in which of the following?",
        options: [
            "Athletics",
            "Swimming",
            "Boxing",
            "Weight Lifting"
        ],
        answer: "Athletics"
    },
    {
        question: "India first won the Olympic Hockey gold at",
        options: [
            "London",
            "Rome",
            "Berlin",
            "Amsterdam"
        ],
        answer: "Amsterdam"
    },
    {
        question: "Which of the following fields A. Nageshwara Rao is associated with?",
        options: [
            "Sports",
            "Literature",
            "Motion Pictures",
            "Politics"
        ],
        answer: "Motion Pictures"
    },
    {
        question: "Who is the author of the book 'The Future of Freedom'?",
        options: [
            "Richard Wolfee",
            "Peter Hudson",
            "Tamara Lipper",
            "Fareed Zakaria"
        ],
        answer: "Fareed Zakaria"
    },
    {
        question: "The average salinity of sea water is",
        options: [
            "3%",
            "3.5%",
            "2.5%",
            "2%"
        ],
        answer: "3.5%"
    }
];

const GeneralKnowledge5 = () => {
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
  
  
  export default GeneralKnowledge5;