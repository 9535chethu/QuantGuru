import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. Though he stoutly persisted in denying his involvement in the case, the facts made it very clear that he had hand in the cruel murder of his wife.",
        options: [
            "Though he stoutly persisted in denying his involvement in the case,",
            "the facts made it very clear",
            "that he had hand in the cruel murder of his wife.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 4): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "that he had hand in the cruel murder of his wife.",
        explanation: "Correct form: 'that he had a hand in the cruel murder of his wife.'"
    },
    {
        question: "2. The tall three girls had left the day before.",
        options: [
            "The tall three girls",
            "had left",
            "the day before.",
            "No error."
        ],
        answer: "The tall three girls",
        explanation: "Correct form: 'The three tall girls.'"
    },
    {
        question: "3. The school is within hundred yards from the church.",
        options: [
            "The school is",
            "within hundred yards",
            "from the church.",
            "No error."
        ],
        answer: "within hundred yards",
        explanation: "Correct form: 'within a hundred yards.'"
    },
    {
        question: "4. The eminent speaker's speech was broadcasted over all the major radio-stations.",
        options: [
            "The eminent speaker's speech",
            "was broadcasted over",
            "all the major radio-stations.",
            "No error."
        ],
        answer: "was broadcasted over",
        explanation: "Correct form: 'was broadcast over.'"
    },
    {
        question: "5. The book is making waves and the sale is quite brisk in all major cities.",
        options: [
            "The book is making",
            "waves and the sale",
            "is quite brisk in",
            "all major cities.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 5 - 6): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "No error."
    },
    {
        question: "6. While luminaries of the dance world have a dearth of opportunities to display their art, upcoming dancers suffer from an unfortunate lack of exposure.",
        options: [
            "While luminaries of the dance world",
            "have a dearth of opportunities to display their art",
            "upcoming dancers suffer from",
            "an unfortunate lack of exposure.",
            "No error."
        ],
        answer: "have a dearth of opportunities to display their art",
        explanation: "Correct form: 'have plenty of opportunities to display their art.'"
    },
    {
        question: "7. VORACIOUS",
        options: [
            "Wild",
            "Greedy",
            "Angry",
            "Quick"
        ],
        direction: "Direction (Q.No. 7): In the following the questions choose the word which best expresses the meaning of the given word.",
        answer: "Greedy"
    },
    {
        question: "8. The soldier displayed exceptional courage and saved Major from the enemy's hand.",
        options: [
            "avoidable",
            "unusual",
            "strange",
            "abnormal"
        ],
        direction: "Direction (Q.Nos. 8 - 9): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "unusual"
    },
    {
        question: "9. The thief outwitted the constable on some pretext and disappeared on the way to the police station.",
        options: [
            "defeated",
            "be fooled",
            "cheated",
            "outmanoeuvred"
        ],
        answer: "outmanoeuvred"
    },
    {
        question: "10. PATCHY",
        options: [
            "Attractive",
            "Uniform",
            "Simple",
            "Clear"
        ],
        direction: "Direction (Q.No. 10): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Uniform"
    },
    {
        question: "11. Gentalman, Criticise, Valuable, Continuous, All correct",
        options: [
            "Gentalman",
            "Criticise",
            "Valuable",
            "Continuous",
            "All correct"
        ],
        direction: "Direction (Q.No. 11): In each questions below five words are given. Find out that word, the spelling of which is WRONG. The letter of that word is the answer. If all the four words are spelt correctly, the answer is 'E', i.e., 'All Correct'.",
        answer: "Gentalman",
        explanation: "Correct spelling: 'Gentleman.'"
    },
    {
        question: "12. We were not the wiser for all this effort to explain the case to us.",
        options: [
            "none",
            "neither",
            "nevertheless",
            "No improvement"
        ],
        direction: "Direction (Q.Nos. 12 - 13): In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
        answer: "none"
    },
    {
        question: "13. 20 kms are not a great distance in these days of fast moving vehicles.",
        options: [
            "is not a great distance",
            "is no distance",
            "aren't a great distance",
            "No improvement"
        ],
        answer: "is not a great distance"
    },
    {
        question: "14. It was an extremely pleasant surprise for the hutment-dweller when the Government officials told him that ......",
        options: [
            "he had to vacate hutment which he had been unauthorisedly occupying",
            "he had been gifted with a furnished apartment in a multi-storeyed building",
            "he would be arrested for wrongfully encroaching on the pavement outside his dwelling",
            "they would not accede to his request",
            "they had received the orders from the court to take possession of all his belongings"
        ],
        direction: "Direction (Q.No. 14): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "he had been gifted with a furnished apartment in a multi-storeyed building"
    },
    {
        question: "15. American private lies may seem shallow. P: Students would walk away with books they had not paid for. Q: A Chinese journalist commented on a curious institution: the library R: Their public morality, however, impressed visitors. S: But in general they returned them.",
        options: [
            "PSQR",
            "QPSR",
            "RQPS",
            "RPSQ"
        ],
        direction: "Direction (Q.Nos. 15 - 16): In questions below, each passage consist of six sentences. The first and sixth sentence are given in the begining. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "QPSR"
    },
    {
        question: "16. Moncure Conway devoted his life to two great objects freedom of thought, and freedom of the individual. P: They threaten both kinds of freedom. Q: But something also has been lost. R: There are now dangers, somewhat different in form from those of the past ages. S: In regard to both these objects, something has been gained since his time.",
        options: [
            "PQRS",
            "QSPR",
            "SQRP",
            "RSPQ"
        ],
        answer: "SQRP"
    },
    {
        question: "17. A religious discourse",
        options: [
            "Preach",
            "Stanza",
            "Sanctorum",
            "Sermon"
        ],
        direction: "Direction (Q.Nos. 17 - 18): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Sermon"
    },
    {
        question: "18. One who is determined to exact full vengeance for wrongs done to him",
        options: [
            "Virulent",
            "Vindictive",
            "Usurer",
            "Vindicator"
        ],
        answer: "Vindictive"
    },
    {
        question: "19. I did not mind what he was saying, he was only through his hat.",
        options: [
            "talking nonsense",
            "talking ignorantly",
            "talking irresponsibly",
            "talking insultingly"
        ],
        direction: "Direction (Q.No. 19): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "talking nonsense"
    },
    {
        question: "20. The man said, 'No, I refused to confess guilt.'",
        options: [
            "The man emphatically refused to confess guilt.",
            "The man refused to confess his guilt.",
            "The man told that he did not confess guilt.",
            "The man was stubborn enough to confess guilt."
        ],
        direction: "Direction (Q.No. 20): In the questions below the sentences have been given in Direct/Indirect speech. From the given alternatives, choose the one which best expresses the given sentence in Indirect/Direct speech.",
        answer: "The man emphatically refused to confess guilt."
    }
];




const VerbalTest9 = () => {
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
  
  export default VerbalTest9;
  
