import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Scarcely had I arrived than the train left.",
        options: [
            "Scarcely had",
            "I arrived than",
            "the train left.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 4): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "I arrived than",
        explanation: "Correct form: 'I arrived when.'"
    },
    {
        question: "2. No sooner did I open the door when the rain, heavy and stormy, rushed in making us shiver from head to foot.",
        options: [
            "No sooner did I open the door",
            "when the rain, heavy and stormy, rushed in",
            "making us shiver from head to foot",
            "No error."
        ],
        answer: "when the rain, heavy and stormy, rushed in",
        explanation: "Correct form: 'than the rain, heavy and stormy, rushed in.'"
    },
    {
        question: "3. A lot of travel delay is caused due to the inefficiency and lack of good management on behalf of the railways.",
        options: [
            "A lot of travel delay is caused",
            "due to the inefficiency and lack of good management",
            "on behalf of the railways.",
            "No error."
        ],
        answer: "on behalf of the railways.",
        explanation: "Correct form: 'by the railways.'"
    },
    {
        question: "4. Kamala's fountain-pen is as expensive as Shyama.",
        options: [
            "Kamala's fountain-pen",
            "is as expensive",
            "as Shyama.",
            "No error."
        ],
        answer: "as Shyama.",
        explanation: "Correct form: 'as Shyama's.'"
    },
    {
        question: "5. Our system of assigning different jobs to different people should be based on their strengths and weaknesses.",
        options: [
            "Our system of assigning",
            "different jobs to different people",
            "should be based on",
            "their strengths and weaknesses.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 5 - 8): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "No error."
    },
    {
        question: "6. An anti-extortion cell is opened by the district police headquarter six months ago as a precautionary measure.",
        options: [
            "An anti-extortion cell is opened",
            "by the district police headquarter",
            "six months ago",
            "as a precautionary measure.",
            "No error."
        ],
        answer: "An anti-extortion cell is opened",
        explanation: "Correct form: 'was opened.'"
    },
    {
        question: "7. All renew licences may be collected from the cashier's counter after paying the fees.",
        options: [
            "All renew licences",
            "may be collected from",
            "the cashier's counter after",
            "paying the fees.",
            "No error."
        ],
        answer: "All renew licences",
        explanation: "Correct form: 'All renewed licences.'"
    },
    {
        question: "8. The job is much worse than I expected. If I would have realised how awful it was going to be I would not have accepted it.",
        options: [
            "The job is much worse than I expected",
            "If I would have realised",
            "how awful it was going to be",
            "I would not have accepted it.",
            "No error."
        ],
        answer: "If I would have realised",
        explanation: "Correct form: 'If I had realised.'"
    },
    {
        question: "9. IMPROVEMENT",
        options: [
            "Advancement",
            "Betterment",
            "Promotion",
            "Preference"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In the following the questions choose the word which best expresses the meaning of the given word.",
        answer: "Betterment"
    },
    {
        question: "10. CANDID",
        options: [
            "Apparent",
            "Explicit",
            "Frank",
            "Bright"
        ],
        answer: "Frank"
    },
    {
        question: "11. ENCOURAGE",
        options: [
            "Dampen",
            "Disapprove",
            "Discourage",
            "Warn"
        ],
        direction: "Direction (Q.Nos. 11 - 12): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Discourage"
    },
    {
        question: "12. ESSENTIAL",
        options: [
            "Extra",
            "Noughts",
            "Minors",
            "Trivial"
        ],
        answer: "Trivial"
    },
    {
        question: "13. The commission took two years to go through the massive collection of files and documents before preparing its report.",
        options: [
            "meager",
            "heavy",
            "light",
            "short"
        ],
        direction: "Direction (Q.No. 13): Each sentences below consist of a word or a phrase which is bold. It is followed by four words or phrases. Select the word or pharse which is closes to the OPPOSITE in meaning of the bold word or phrase.",
        answer: "meager"
    },
    {
        question: "14. Find the correctly spelt words.",
        options: [
            "Friming",
            "Burnning",
            "Running",
            "Fryng"
        ],
        direction: "Direction (Q.No. 14): Find the correctly spelt words.",
        answer: "Running"
    },
    {
        question: "15. Boundary, Exhibit, Depresion, Demonstration, All correct",
        options: [
            "Boundary",
            "Exhibit",
            "Depresion",
            "Demonstration",
            "All correct"
        ],
        direction: "Direction (Q.No. 15): In each questions below five words are given. Find out that word, the spelling of which is WRONG. The letter of that word is the answer. If all the four words are spelt correctly, the answer is 'E', i.e., 'All Correct'.",
        answer: "Depresion",
        explanation: "Correct spelling: 'Depression.'"
    },
    {
        question: "16. His decision was based on adequate and acurate information",
        options: [
            "His decision was based on",
            "adequate",
            "and acurate",
            "information",
            "All correct"
        ],
        direction: "Direction (Q.No. 16): In each sentence below, four words which are lettered (A), (B), (C) and (D) have been printed in bold type, one which may be either inappropriate in the context of the sentence or wrongly spelt.The letter of that word is answer.If all the four words are appropriate and also correctly spelt, mark 'E', i.e., 'All Correct' as the answer.",
        answer: "and acurate",
        explanation: "Correct spelling: 'and accurate.'"
    },
    {
        question: "17. The long or short of it is that I do not want to deal with that new firm.",
        options: [
            "The long and short of it",
            "The long and short for it",
            "The long or short for it",
            "The shot and long for it",
            "No correction required"
        ],
        direction: "Direction (Q.No. 17): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "The long and short of it"
    },
    {
        question: "18. It is not easy to remain tranquil when those around you ......",
        options: [
            "behave in a socially acceptable manner",
            "exhibit pleasant mannerism",
            "are losing their heads",
            "agree to whatever you say",
            "exhibit generous and magnanimous gestures"
        ],
        direction: "Direction (Q.No. 18): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "are losing their heads"
    },
    {
        question: "19. A remedy for all diseases",
        options: [
            "Stoic",
            "Marvel",
            "Panacea",
            "Recompense"
        ],
        direction: "Direction (Q.No. 19): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Panacea"
    },
    {
        question: "20. HOPE:ASPIRES",
        options: [
            "love:elevates",
            "film:flam",
            "fib:lie",
            "fake:ordinary"
        ],
        direction: "Direction (Q.No. 20): Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship.",
        answer: "fib:lie"
    }
];




const VerbalTest6 = () => {
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
  
  export default VerbalTest6;
  