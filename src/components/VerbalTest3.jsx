import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. My wife has got a new job a month ago.",
        options: [
            "My wife has got",
            "a new job",
            "a month ago.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 3): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "My wife has got",
        explanation: "Correct form: 'My wife got a new job a month ago.'"
    },
    {
        question: "2. A body of volunteers have been organised to spread the message of the saint.",
        options: [
            "A body of volunteers",
            "have been organised",
            "to spread the message of the saint.",
            "No error."
        ],
        answer: "have been organised",
        explanation: "Correct form: 'has been organised' (singular collective noun)"
    },
    {
        question: "3. In spite of several reminders, he did not so far send any reply to me, letters.",
        options: [
            "In spite of several reminders,",
            "he did not so far send",
            "any reply to me, letters.",
            "No error."
        ],
        answer: "he did not so far send",
        explanation: "Correct form: 'he has not so far sent'"
    },
    {
        question: "4. He being the eldest son, his father expects him to take care of several things besides his regular studies.",
        options: [
            "He being the eldest son,",
            "his father expects him",
            "to take care of several things",
            "besides his regular studies.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 4 - 5): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "No error."
    },
    {
        question: "5. He was very disappointed when he found that someone else had secured higher marks.",
        options: [
            "He was very disappointed",
            "when he found",
            "that someone else",
            "had secured higher marks.",
            "No error."
        ],
        answer: "No error."
    },
    {
        question: "6. She baffled all our attempts to find her.",
        options: [
            "defeated",
            "thwarted",
            "foiled",
            "circumvented"
        ],
        direction: "Direction (Q.Nos. 6 - 8): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "thwarted"
    },
    {
        question: "7. Even today many people are guided by abstruse moral values.",
        options: [
            "dangerous",
            "impracticable",
            "obscure",
            "irrational"
        ],
        answer: "obscure"
    },
    {
        question: "8. The pioneers left a blazing trial of courage, manliness and chivalry.",
        options: [
            "inventors",
            "explorers",
            "colonialist",
            "settlers"
        ],
        answer: "explorers"
    },
    {
        question: "9. She has an aversion ...... taking even onion and garlic.",
        options: [
            "with",
            "at",
            "against",
            "to"
        ],
        direction: "Direction (Q.Nos. 9 - 10): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "to"
    },
    {
        question: "10. He is a very careful person, he never takes side but remains ......",
        options: [
            "impartial",
            "unbiased",
            "neutral",
            "prejudiced"
        ],
        answer: "neutral"
    },
    {
        question: "11. The national unity of a free people P: to make it impracticable Q: for there to be an arbitrary administration R: depends upon a sufficiently even balance of political power S: against a revolutionary opposition that is irreconcilably opposed to it",
        options: [
            "QRPS",
            "QRSP",
            "RPQS",
            "RSPQ"
        ],
        direction: "Direction (Q.No. 11): In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.",
        answer: "RPQS"
    },
    {
        question: "12. We don't know how did the thief made an escape.",
        options: [
            "how the thief did make",
            "how the thief does make",
            "how the thief made",
            "how was the thief made",
            "No correction required"
        ],
        direction: "Direction (Q.No. 12): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "how the thief made"
    },
    {
        question: "13. The old man felled some trees in the garden with hardly no effort at all.",
        options: [
            "hard effort",
            "hardly any effort",
            "a hardly any effort",
            "No improvement"
        ],
        direction: "Direction (Q.Nos. 13 - 14): In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
        answer: "hardly any effort"
    },
    {
        question: "14. As he is past his teens now, he can look for himself.",
        options: [
            "after",
            "to",
            "around",
            "No improvement"
        ],
        answer: "after"
    },
    {
        question: "15. This weather-vane often tops a church spire, tower or high building.",
        options: [
            "PQRS",
            "PSRQ",
            "PRSQ",
            "SPQR"
        ],
        direction: "Direction (Q.Nos. 15 - 16): In questions below, each passage consists of six sentences. The first and sixth sentence are given in the beginning. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "PRSQ",
        explanation: "Proper sequence: P - They are only wind-vanes. R - They are designed to point to direction from which the wind is coming. S - Just as the barometer only tells us the pressure of air, the weather-vane tells us the direction of wind. Q - Neither alone can tell us what the weather will be."
    },
    {
        question: "16. I took cigarettes from my case.",
        options: [
            "PSQR",
            "QPSR",
            "QSRP",
            "SRPQ"
        ],
        answer: "QPSR",
        explanation: "Proper sequence: Q - I lit one of them and placed it between the lips. P - But when the fit of coughing was over, he replaced it between his lips. S - Slowly he took a pull at it and coughed violently. R - Then with a feeble hand he removed the cigarette."
    },
    {
        question: "17. A voice loud enough to be heard",
        options: [
            "Audible",
            "Applaudable",
            "Laudable",
            "Oral"
        ],
        direction: "Direction (Q.Nos. 17 - 19): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Audible"
    },
    {
        question: "18. A drawing on transparent paper",
        options: [
            "Red print",
            "Blue print",
            "Negative",
            "Transparency"
        ],
        answer: "Transparency"
    },
    {
        question: "19. Extreme old age when a man behaves like a fool",
        options: [
            "Imbecility",
            "Senility",
            "Dotage",
            "Superannuation"
        ],
        answer: "Dotage"
    },
    {
        question: "20. It was he who put a spoke in my wheel.",
        options: [
            "tried to cause an accident",
            "helped in the execution of the plan",
            "thwarted in the execution of the plan",
            "destroyed the plan"
        ],
        direction: "Direction (Q.No. 20): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "thwarted in the execution of the plan"
    }
];



const VerbalTest3 = () => {
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
  
  export default VerbalTest3;
  