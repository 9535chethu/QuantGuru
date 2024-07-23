import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. She sang very well isn't it?",
        options: [
            "She sang",
            "very well",
            "isn't it?",
            "No error."
        ],
        direction: "Direction (Q.No. 1): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "isn't it?",
        explanation: "Correct form: 'didn't she?'"
    },
    {
        question: "2. In spite of his being a Quiz Master show was a big flop.",
        options: [
            "In spite of his",
            "being a Quiz Master",
            "show was",
            "a big flop.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 2 - 5): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "show was",
        explanation: "Correct form: 'the show was.'"
    },
    {
        question: "3. The patient recover so fast that the expert doctors also were surprised.",
        options: [
            "The patient recover",
            "so fast that",
            "the expert doctors",
            "also were surprised.",
            "No error."
        ],
        answer: "The patient recover",
        explanation: "Correct form: 'The patient recovered.'"
    },
    {
        question: "4. He deserted the path of honour in order to satisfy his ambition and then went down his doom very quickly.",
        options: [
            "He deserted the path of honour",
            "in order to",
            "satisfy his ambition",
            "and then went down his doom very quickly.",
            "No error."
        ],
        answer: "and then went down his doom very quickly.",
        explanation: "Correct form: 'and then went down to his doom very quickly.'"
    },
    {
        question: "5. Looking forward to seeing you soon.",
        options: [
            "Looking forward",
            "to seeing",
            "you",
            "soon.",
            "No error."
        ],
        answer: "No error."
    },
    {
        question: "6. Being a member of this club, he has certain rights.",
        options: [
            "status",
            "truth",
            "virtues",
            "privileges"
        ],
        direction: "Direction (Q.No. 6): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "privileges"
    },
    {
        question: "7. NIGGARDLY",
        options: [
            "Frugal",
            "Thrifty",
            "Stingy",
            "Generous"
        ],
        direction: "Direction (Q.No. 7): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Generous"
    },
    {
        question: "8. Harish displays enthusiasm whenever he is posed with a problem.",
        options: [
            "eagerness",
            "weakness",
            "indifference",
            "softness"
        ],
        direction: "Direction (Q.No. 8): Each sentences below consist of a word or a phrase which is bold. It is followed by four words or phrases. Select the word or pharse which is closes to the OPPOSITE in meaning of the bold word or phrase.",
        answer: "indifference"
    },
    {
        question: "9. West Bengal ...... plentiful rainfall and is consequently a very green part of the country.",
        options: [
            "misses",
            "receives",
            "expects",
            "regrets"
        ],
        direction: "Direction (Q.Nos. 9 - 11): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "receives"
    },
    {
        question: "10. Brothers must live in harmony. They must never fall ......",
        options: [
            "off",
            "out",
            "apart",
            "away"
        ],
        answer: "out"
    },
    {
        question: "11. If negotiations are to prove fruitful, there must not only be sincerity on each side, but there must also be ...... in the sincerity of the other side.",
        options: [
            "faith",
            "belief",
            "substance",
            "certainty"
        ],
        answer: "faith"
    },
    {
        question: "12. This time P: exactly what he had been told Q: the young man did R: beyond his dreams S: and the plan succeeded",
        options: [
            "QPRS",
            "QPSR",
            "PQSR",
            "QSRP"
        ],
        direction: "Direction (Q.Nos. 12 - 13): In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.",
        answer: "QPSR"
    },
    {
        question: "13. It would P: appear from his statement Q: about the policy of management R: in dealing with the strike S: that he was quite in the dark",
        options: [
            "RPSQ",
            "PSQR",
            "RQPS",
            "PRQS"
        ],
        answer: "PSQR"
    },
    {
        question: "14. But in all these cases conversion from scale have well-formulated.",
        options: [
            "can be well-formulated",
            "are well-formulated",
            "well-formulated",
            "No improvement"
        ],
        direction: "Direction (Q.No. 14): In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
        answer: "are well-formulated"
    },
    {
        question: "15. Despite his best efforts to conceal his anger ......",
        options: [
            "we could detect that he was very happy",
            "he failed to give us an impression of his agony",
            "he succeeded in camouflaging his emotions",
            "he could succeed in doing it easily",
            "people came to know that he was annoyed"
        ],
        direction: "Direction (Q.No. 15): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "people came to know that he was annoyed"
    },
    {
        question: "16. I usually sleep quite well in the train, but this time I slept only a little. P: Most people wanted it shut and I wanted it open. Q: As usual, I got angry about the window. R: The quarrel left me completely upset. S: There were too many people too much huge luggage all around.",
        options: [
            "RSQP",
            "SQPR",
            "SQRP",
            "RSPQ"
        ],
        direction: "Direction (Q.No. 16): In questions below, each passage consist of six sentences. The first and sixth sentence are given in the begining. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "SQRP"
    },
    {
        question: "17. A person who tries to deceive people by claiming to be able to do wonderful things",
        options: [
            "Trickster",
            "Imposter",
            "Magician",
            "Mountebank"
        ],
        direction: "Direction (Q.No. 17): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Mountebank"
    },
    {
        question: "18. He visits the doctor off and on.",
        options: [
            "everyday",
            "regularly",
            "never at all",
            "occasionally"
        ],
        direction: "Direction (Q.Nos. 18 - 20): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "occasionally"
    },
    {
        question: "19. The authorities took him to task for his negligence.",
        options: [
            "gave him additional work",
            "suspended his assignment",
            "reprimanded him",
            "forced him to resign"
        ],
        answer: "reprimanded him"
    },
    {
        question: "20. Though he has lot of money, yet all his plans are built upon sand.",
        options: [
            "established on insecure foundations",
            "based on inexperience",
            "resting on cheap material",
            "resting on immature ideas"
        ],
        answer: "established on insecure foundations"
    }
];



const VerbalTest10 = () => {
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
  
  export default VerbalTest10;
  