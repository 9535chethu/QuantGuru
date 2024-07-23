import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. Looking back, I find that among the many impressions of the people of India, absorbed while I lived among them, are their reverence for great men and women.",
        options: [
            "Looking back, I find that among the many impressions of the people of India,",
            "absorbed while I lived among them,",
            "are their reverence for great men and women.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 2): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "Looking back, I find that among the many impressions of the people of India,",
        explanation: "Correct form: 'Looking back, I find that among the many impressions of the people of India that I absorbed while I lived among them, are their reverence for great men and women.'"
    },
    {
        question: "2. In management, as you rise higher, the problems you face become more and more unstructured and you can't just fall back on the tools you had been",
        options: [
            "In management, as you rise higher,",
            "the problems you face become more and more unstructured and you can't just fall back on",
            "the tools you had been",
            "No error."
        ],
        answer: "the tools you had been",
        explanation: "Correct form: 'the tools you have been using.'"
    },
    {
        question: "3. Even after worked in the office for as many as fifteen years, he still does not understand the basic objectives of the work.",
        options: [
            "Even after worked in the office",
            "for as many as fifteen years,",
            "he still does not understand",
            "the basic objectives of the work."
        ],
        direction: "Direction (Q.Nos. 3 - 5): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "Even after worked in the office",
        explanation: "Correct form: 'Even after working in the office.'"
    },
    {
        question: "4. I cannot make from what you are saying about him.",
        options: [
            "I cannot",
            "make from",
            "what you are saying",
            "about him."
        ],
        answer: "make from",
        explanation: "Correct form: 'make out from.'"
    },
    {
        question: "5. Your machine would not have given you so much trouble if you had maintained it proper.",
        options: [
            "Your machine would not have",
            "given you so much trouble",
            "if you had",
            "maintained it proper."
        ],
        answer: "maintained it proper.",
        explanation: "Correct form: 'maintained it properly.'"
    },
    {
        question: "6. Catching snakes can be hazardous for people untrained in the art.",
        options: [
            "tricky",
            "harmful",
            "difficult",
            "dangerous"
        ],
        direction: "Direction (Q.Nos. 6 - 8): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "dangerous"
    },
    {
        question: "7. She has an insatiable love for music.",
        options: [
            "unsatisfiable",
            "unchanging",
            "irreconcilable",
            "undesirable"
        ],
        answer: "unsatisfiable"
    },
    {
        question: "8. Traffic being what it is, it is lamentable that our roads are unable to take the load.",
        options: [
            "unpardonable",
            "deplorable",
            "inexcusable",
            "terrible"
        ],
        answer: "deplorable"
    },
    {
        question: "9. FLAGITIOUS",
        options: [
            "Innocent",
            "Vapid",
            "Ignorant",
            "Frivolous"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Innocent"
    },
    {
        question: "10. IMPASSE",
        options: [
            "Resurgence",
            "Breakthrough",
            "Continuation",
            "Combination"
        ],
        answer: "Breakthrough"
    },
    {
        question: "11. The paths of glory lead ...... to the grave.",
        options: [
            "straight",
            "but",
            "in",
            "directly"
        ],
        direction: "Direction (Q.Nos. 11 - 14): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "but"
    },
    {
        question: "12. He passed the examination in the first class because he ......",
        options: [
            "was hard working for it",
            "worked hardly for it",
            "had worked hard for it",
            "was working hard for it"
        ],
        answer: "had worked hard for it"
    },
    {
        question: "13. The English schemed to continue their rule in India by playing off one community ...... the other.",
        options: [
            "before",
            "upon",
            "against",
            "with"
        ],
        answer: "against"
    },
    {
        question: "14. The grapes are now ...... enough to be picked.",
        options: [
            "ready",
            "mature",
            "ripe",
            "advanced"
        ],
        answer: "ripe"
    },
    {
        question: "15. In order to help the company attain its goal of enhancing profit, all the employees ......",
        options: [
            "urged the management to grant paid leave",
            "appealed the management to implement new welfare schemes",
            "voluntarily offered to work overtime with lucrative compensation",
            "voluntarily offered to render additional services in lieu of nothing",
            "decided to enhance production at the cost of quality of the product"
        ],
        direction: "Direction (Q.No. 15): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "voluntarily offered to render additional services in lieu of nothing"
    },
    {
        question: "16. Once upon a time there lived three young men in a certain town of Hindustan.",
        options: [
            "QPRS",
            "SQPR",
            "RSQP",
            "SRPQ"
        ],
        direction: "Direction (Q.Nos. 16 - 17): In questions below, each passage consist of six sentences. The first and sixth sentence are given in the beginning. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "SQPR",
        explanation: "Proper sequence: S - The young men believed themselves to be very good friends. Q - They were so powerful that they could catch growing lions and tear them to pieces. P - All the people of the neighbourhood were mortally afraid of them. R - Someone told them that they would become immortal if they killed Death."
    },
    {
        question: "17. Ants eat worms, centipedes and spiders.",
        options: [
            "SQPR",
            "SPRQ",
            "SQRP",
            "SRQP"
        ],
        answer: "SQRP",
        explanation: "Proper sequence: S - They also eat larvae and insect adults such as flies, moths and spring tails. Q - Nevertheless, these animals do not make easy game for ants. P - They are usually much quicker than the ant itself. R - Besides, they have an extraordinary number of ways of escaping."
    },
    {
        question: "18. In spite of the immense pressure exerted by the militants, the Government has decided not to give in.",
        options: [
            "accede",
            "yield",
            "oblige",
            "confirm"
        ],
        direction: "Direction (Q.Nos. 18 - 19): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "yield"
    },
    {
        question: "19. Why do you wish to tread on the toes?",
        options: [
            "To give offence to them",
            "To follow them grudgingly",
            "To treat them indifferently",
            "To be kicked by them"
        ],
        answer: "To give offence to them"
    },
    {
        question: "20. Nita ordered her servant to bring her cup of tea.",
        options: [
            "Nita told her servant, \"Bring a cup of tea.\"",
            "Nita said, \"Bring me a cup of tea.\"",
            "Nita said to her servant, \"Bring me a cup of tea.\"",
            "Nita told her servant, \"Bring her that cup of tea.\""
        ],
        direction: "Direction (Q.No. 20): In the questions below the sentences have been given in Direct/Indirect speech. From the given alternatives, choose the one which best expresses the given sentence in Indirect/Direct speech.",
        answer: "Nita said to her servant, \"Bring me a cup of tea.\""
    }
];



const VerbalTest2 = () => {
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
  
  export default VerbalTest2;
  