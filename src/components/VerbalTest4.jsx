import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. There is no question of my failing in the examination.",
        options: [
            "There is no question",
            "of my failing",
            "in the examination.",
            "No error."
        ],
        direction: "Direction (Q.No. 1): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "No error."
    },
    {
        question: "2. Mr.Raman said that he had a difference with the chairman at his statement.",
        options: [
            "Mr.Raman said that",
            "he had a difference",
            "with",
            "the chairman at his statement.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 2 - 3): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "the chairman at his statement.",
        explanation: "Correct form: 'the chairman over his statement.'"
    },
    {
        question: "3. I will put on a note in this regard for your consideration and necessary decision.",
        options: [
            "I will put on",
            "a note in this regard",
            "for your consideration",
            "and necessary decision.",
            "No error."
        ],
        answer: "I will put on",
        explanation: "Correct form: 'I will put up'"
    },
    {
        question: "4. He was wanted at the outset of his career.",
        options: [
            "end",
            "beginning",
            "middle",
            "entrance"
        ],
        direction: "Direction (Q.No. 4): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "beginning"
    },
    {
        question: "5. I listened, but I had no idea what he was ...... about.",
        options: [
            "saying",
            "talking",
            "telling",
            "discussing"
        ],
        direction: "Direction (Q.Nos. 5 - 7): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "talking"
    },
    {
        question: "6. He lives near a lovely ...... of countryside.",
        options: [
            "length",
            "piece",
            "section",
            "stretch"
        ],
        answer: "stretch"
    },
    {
        question: "7. Owing to the power cut in the area, factories are being forced to ...... men",
        options: [
            "throw away",
            "send off",
            "put off",
            "lay off"
        ],
        answer: "lay off"
    },
    {
        question: "8. Hindrance",
        options: [
            "Hindrance",
            "Hinderrance",
            "Hindrence",
            "Hinderence"
        ],
        direction: "Direction (Q.No. 8): Find the correctly spelt words.",
        answer: "Hindrance"
    },
    {
        question: "9. He is a man of amiable disposition and emenable to rule and discipline",
        options: [
            "He is a man of amiable",
            "disposition",
            "and emenable",
            "to rule and discipline",
            "All correct"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In each sentence below, four words which are lettered (A), (B), (C) and (D) have been printed in bold type, one which may be either inappropriate in the context of the sentence or wrongly spelt.The letter of that word is answer.If all the four words are appropriate and also correctly spelt, mark 'E', i.e., 'All Correct' as the answer.",
        answer: "and emenable",
        explanation: "Correct spelling: 'amenable'"
    },
    {
        question: "10. Stereotypes are dysfunctional in projecting an image of an unbiased individual",
        options: [
            "Stereotypes",
            "are dysfunctional",
            "in projecting",
            "an image of an unbiased individual",
            "All correct"
        ],
        answer: "All correct"
    },
    {
        question: "11. Since the beginning of history P: have managed to catch Q: the Eskimos and Red Indians R: by a very difficulty method S: a few specimens of this aquatic animal",
        options: [
            "QRPS",
            "SQPR",
            "SQRP",
            "QPSR"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below, there is a sentence of which some parts have been jumbled up. Rearrange these parts which are labelled P, Q, R and S to produce the correct sentence. Choose the proper sequence.",
        answer: "QPSR"
    },
    {
        question: "12. We went P: along the railway line Q: and had a right to R: where other people not allowed to go S: but daddy belonged to the railway",
        options: [
            "RPQS",
            "PRSQ",
            "RSQP",
            "PRQS"
        ],
        answer: "PRQS"
    },
    {
        question: "13. I was P: and stay fro few days in Delhi Q: when my father told me R: very excited S: that I could go with him",
        options: [
            "PQRS",
            "RQSP",
            "QRSP",
            "SPQR"
        ],
        answer: "RQSP"
    },
    {
        question: "14. Ramesh is as tall if not, taller than Mahesh.",
        options: [
            "not as tall but",
            "not so tall but as",
            "as tall as, if not",
            "as if not",
            "No correction required"
        ],
        direction: "Direction (Q.Nos. 14 - 15): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "as tall as, if not"
    },
    {
        question: "15. Friends and comrades, the light has gone away from our lives and there is darkness everywhere",
        options: [
            "off",
            "out of",
            "out from",
            "out off",
            "No correction required"
        ],
        answer: "out of"
    },
    {
        question: "16. Practically, very little work could be completed in the last week as it was ......",
        options: [
            "full of working days",
            "a very hectic week",
            "full of holidays",
            "a very busy week",
            "loaded with work"
        ],
        direction: "Direction (Q.No. 16): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "full of holidays"
    },
    {
        question: "17. Ms. Parasuram started a Petrol Pump in Madras. P: A total to 12 girls now work at the pump. Q: She advertised in newspapers for women staff. R: They operate in 2 shifts. S: The response was good.",
        options: [
            "PQSR",
            "SQPR",
            "QSPR",
            "PQRS"
        ],
        direction: "Direction (Q.No. 17): In questions below, each passage consist of six sentences. The first and sixth sentence are given in the beginning. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "QSPR"
    },
    {
        question: "18. I ran out of money on my European tour.",
        options: [
            "exhausted my stock of",
            "did not have enough",
            "lost",
            "carried a lot"
        ],
        direction: "Direction (Q.Nos. 18 - 19): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "exhausted my stock of"
    },
    {
        question: "19. The robber took to his heels when the police arrived.",
        options: [
            "opened fire",
            "hid himself",
            "ran off",
            "surrendered"
        ],
        answer: "ran off"
    },
    {
        question: "20. GRAVITY:PULL",
        options: [
            "iron:metal",
            "north pole:directions",
            "magnetism:attraction",
            "dust:desert"
        ],
        direction: "Direction (Q.No. 20): Each question consist of two words which have a certain relationship to each other followed by four pairs of related words, Select the pair which has the same relationship.",
        answer: "magnetism:attraction"
    }
];




const VerbalTest4 = () => {
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
  
  export default VerbalTest4;
  