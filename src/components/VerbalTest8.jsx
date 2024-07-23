import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. The charges in this hospital are less than the hospital near my house.",
        options: [
            "The charges in this hospital",
            "are less than",
            "the hospital near my house.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 2): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "the hospital near my house.",
        explanation: "Correct form: 'those of the hospital near my house.'"
    },
    {
        question: "2. Even though the shirt is rather expensive but I wish to purchase it with my own money.",
        options: [
            "Even though the shirt is rather expensive",
            "but I wish to",
            "purchase it with my own money.",
            "No error."
        ],
        answer: "but I wish to",
        explanation: "Correct form: 'I wish to.'"
    },
    {
        question: "3. His father promised to give him anything what he wants if he passes in the examination.",
        options: [
            "His father promised to",
            "give him anything what he",
            "wants if he",
            "passes in the examination.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 3 - 4): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "give him anything what he",
        explanation: "Correct form: 'give him anything that he.'"
    },
    {
        question: "4. After listening to his advice, I decided to not to go abroad for studies.",
        options: [
            "After listening to",
            "his advice, I",
            "decided to not to",
            "go abroad for studies.",
            "No error."
        ],
        answer: "decided to not to",
        explanation: "Correct form: 'decided not to.'"
    },
    {
        question: "5. MELD",
        options: [
            "To soothe",
            "Merge",
            "Purchase",
            "Glisten"
        ],
        direction: "Direction (Q.No. 5): In the following the questions choose the word which best expresses the meaning of the given word.",
        answer: "Merge"
    },
    {
        question: "6. The leader nodded his approbation.",
        options: [
            "understanding",
            "approval",
            "admiration",
            "appreciation"
        ],
        direction: "Direction (Q.No. 6): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "approval"
    },
    {
        question: "7. EXPAND",
        options: [
            "Convert",
            "Condense",
            "Congest",
            "Conclude"
        ],
        direction: "Direction (Q.No. 7): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Condense"
    },
    {
        question: "8. Like poverty, affluence can sometimes create its own problems.",
        options: [
            "indigence",
            "opulence",
            "sorrow",
            "exuberance"
        ],
        direction: "Direction (Q.Nos. 8 - 9): Each sentences below consist of a word or a phrase which is bold. It is followed by four words or phrases. Select the word or pharse which is closes to the OPPOSITE in meaning of the bold word or phrase.",
        answer: "indigence"
    },
    {
        question: "9. The actor is well known both for his humility and courage.",
        options: [
            "pride",
            "determination",
            "honesty",
            "gentleness"
        ],
        answer: "pride"
    },
    {
        question: "10. Government buildings are ...... on the Republic day.",
        options: [
            "enlightened",
            "lightened",
            "illuminated",
            "glowed"
        ],
        direction: "Direction (Q.Nos. 10 - 12): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "illuminated"
    },
    {
        question: "11. Jawaharlal spent his childhood ...... Anand Bhawan.",
        options: [
            "at",
            "in",
            "on",
            "across"
        ],
        answer: "at"
    },
    {
        question: "12. We had to pay more taxi fare because the driver brought us by a ...... route.",
        options: [
            "circular",
            "circumscribed",
            "longest",
            "circuitous"
        ],
        answer: "circuitous"
    },
    {
        question: "13. Find the correctly spelt words.",
        options: [
            "Humorous",
            "Ganerous",
            "Pupolous",
            "Maretorious"
        ],
        direction: "Direction (Q.No. 13): Find the correctly spelt words.",
        answer: "Humorous"
    },
    {
        question: "14. I read an advertisement that said P: posh, air-conditioned Q: gentleman of taste R: are available for S: fully furnished rooms",
        options: [
            "PQRS",
            "PSRQ",
            "PSQR",
            "SRPQ"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.",
        answer: "PSRQ"
    },
    {
        question: "15. With her body P: dragging her unwilling feet Q: weak and infirm R: doubled with age S: she persisted in her mission",
        options: [
            "PQRS",
            "QPRS",
            "RQPS",
            "SRPQ"
        ],
        answer: "QPRS"
    },
    {
        question: "16. We met him immediately after the session in which he had been given a nice speech.",
        options: [
            "would be giving",
            "has been given",
            "will have given",
            "had given",
            "No correction required"
        ],
        direction: "Direction (Q.No. 16): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "had given"
    },
    {
        question: "17. Not long back, in Japan, a mysterious nerve gas affected a large number of people.",
        options: [
            "effected",
            "infected",
            "infested",
            "No improvement"
        ],
        direction: "Direction (Q.No. 17): In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
        answer: "infected"
    },
    {
        question: "18. Be the embodiment or perfect example of",
        options: [
            "Characterise",
            "Idol",
            "Personify",
            "Signify"
        ],
        direction: "Direction (Q.No. 18): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Personify"
    },
    {
        question: "19. His friends advised him to be fair and square in his dealings.",
        options: [
            "Careful",
            "Considerate",
            "Polite",
            "Upright"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "Upright"
    },
    {
        question: "20. We should give a wide berth to bad characters.",
        options: [
            "give publicity to",
            "publicly condemn",
            "keep away from",
            "not sympathise with"
        ],
        answer: "keep away from"
    }
];




const VerbalTest8 = () => {
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
  
  export default VerbalTest8;
  