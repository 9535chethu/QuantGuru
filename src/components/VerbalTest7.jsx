import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. DEAR",
        options: [
            "Priceless",
            "Free",
            "Worthless",
            "Cheap"
        ],
        direction: "Direction (Q.Nos. 1 - 2): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Cheap"
    },
    {
        question: "2. MINOR",
        options: [
            "Big",
            "Major",
            "Tall",
            "Heavy"
        ],
        answer: "Major"
    },
    {
        question: "3. In high school many of us never realised the importance that grammar would ...... in later life.",
        options: [
            "figure",
            "portray",
            "play",
            "exercise"
        ],
        direction: "Direction (Q.Nos. 3 - 7): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "play"
    },
    {
        question: "4. Physically we are now all neighbors, but psychologically, we are ...... to each other.",
        options: [
            "primitives",
            "complimentary",
            "strangers",
            "cowards"
        ],
        answer: "strangers"
    },
    {
        question: "5. The robbers were arrested and ...... prison yesterday.",
        options: [
            "brought into",
            "brought to",
            "taken into",
            "taken to"
        ],
        answer: "taken to"
    },
    {
        question: "6. He is a person of sound character and ...... disposition.",
        options: [
            "beneficent",
            "morous",
            "amiable",
            "amicable"
        ],
        answer: "amiable"
    },
    {
        question: "7. This, partly, explains how the Mehta family has been able to ...... its lavish lifestyle in recent times, despite the fact that all its assets have been ......",
        options: [
            "keep, removed",
            "afford, attached",
            "develop, liquidated",
            "keep up, destroyed"
        ],
        answer: "afford, attached"
    },
    {
        question: "8. Filled, Fulfiled, Expelled, Skilled, All correct",
        options: [
            "Filled",
            "Fulfiled",
            "Expelled",
            "Skilled",
            "All correct"
        ],
        direction: "Direction (Q.No. 8): In each questions below five words are given. Find out that word, the spelling of which is WRONG. The letter of that word is the answer. If all the four words are spelt correctly, the answer is 'E', i.e., 'All Correct'.",
        answer: "Fulfiled",
        explanation: "Correct spelling: 'Fulfilled.'"
    },
    {
        question: "9. It was to be P: before their school examination Q: which was due to start R: the last expedition S: in a month's",
        options: [
            "SRQP",
            "RQSP",
            "RPQS",
            "SPRQ"
        ],
        direction: "Direction (Q.No. 9): In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.",
        answer: "RPQS"
    },
    {
        question: "10. I have got some tea, but I do not have a sugar.",
        options: [
            "some",
            "got",
            "more",
            "any",
            "No correction required"
        ],
        direction: "Direction (Q.Nos. 10 - 11): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "any"
    },
    {
        question: "11. Anand has the guts to rise from the occasion and come out successfully.",
        options: [
            "in rising from",
            "to raise with",
            "to rise to",
            "to rise against",
            "No correction required"
        ],
        answer: "to rise to"
    },
    {
        question: "12. Anand stuck up a friendship with Mahesh in just 2 days means ......",
        options: [
            "Anand friendship with Mahesh came to an end recently",
            "Anand found out the other friends of Mahesh",
            "Anand fixed a deal with Mahesh in 2 days",
            "Anand's friendship with Mahesh lasted for 2 years",
            "Anand became a friend of Mahesh in less than 2 days"
        ],
        direction: "Direction (Q.No. 12): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "Anand became a friend of Mahesh in less than 2 days"
    },
    {
        question: "13. A prima facie case is such",
        options: [
            "As it seems at first sight",
            "As it is made to seem at first sight",
            "As it turns out to be at the end",
            "As it seems to the court after a number of hearings"
        ],
        direction: "Direction (Q.Nos. 13 - 17): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "As it seems at first sight"
    },
    {
        question: "14. One absorbed in his own thoughts and feelings rather than in things outside",
        options: [
            "Scholar",
            "Recluse",
            "Introvert",
            "Intellectual"
        ],
        answer: "Introvert"
    },
    {
        question: "15. The part of government which is concerned with making of rules",
        options: [
            "Court",
            "Tribunal",
            "Bar",
            "Legislature"
        ],
        answer: "Legislature"
    },
    {
        question: "16. That which cannot be believed",
        options: [
            "Incredible",
            "Incredulous",
            "Implausible",
            "Unreliable"
        ],
        answer: "Incredible"
    },
    {
        question: "17. One who does not care for literature or art",
        options: [
            "Primitive",
            "Illiterate",
            "Philistine",
            "Barbarian"
        ],
        answer: "Philistine"
    },
    {
        question: "18. He struck several bad patches before he made good.",
        options: [
            "came across bad soil",
            "Had a bad time",
            "Went through many illness",
            "Had many professional difficulties"
        ],
        direction: "Direction (Q.Nos. 18 - 20): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "Had many professional difficulties"
    },
    {
        question: "19. Do not imagine that Dharmendra is really sorry that his wife died. Those are only crocodile tears.",
        options: [
            "Pretended sorrow",
            "Tears a crocodile",
            "A weeping crocodile",
            "Mild regret"
        ],
        answer: "Pretended sorrow"
    },
    {
        question: "20. The case was held over due to the great opposition to it.",
        options: [
            "stopped",
            "postponed",
            "dropped",
            "cancelled"
        ],
        answer: "postponed"
    }
];




const VerbalTest7 = () => {
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
  
  export default VerbalTest7;
  