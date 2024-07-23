import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. Everyone visiting the house asked the young girl how could she kill the wolf single handed and without a weapon.",
        options: [
            "Everyone visiting the house asked the young girl",
            "how could she kill the wolf",
            "single handed and without a weapon.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 2): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "how could she kill the wolf",
        explanation: "Correct form: 'how she could kill the wolf.'"
    },
    {
        question: "2. When I get a cold it takes me weeks to shake it off.",
        options: [
            "When I get a cold",
            "it takes me weeks",
            "to shake it off.",
            "No error."
        ],
        answer: "No error."
    },
    {
        question: "3. He tried as he could Naveen did not succeed in getting his car to start up.",
        options: [
            "He tried as he could",
            "Naveen did not",
            "succeed in getting",
            "his car to start up.",
            "No error."
        ],
        direction: "Direction (Q.Nos. 3 - 6): Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "He tried as he could",
        explanation: "Correct form: 'He tried as hard as he could.'"
    },
    {
        question: "4. Immediately after boarding the bus, Mahesh asked the conductor that if he knew where the museum was.",
        options: [
            "Immediately after boarding the bus,",
            "Mahesh asked the conductor.",
            "that if he knew",
            "where the museum was,",
            "No error."
        ],
        answer: "that if he knew",
        explanation: "Correct form: 'if he knew.'"
    },
    {
        question: "5. I am contacting you sometime in next week to explain to you my problem in detail.",
        options: [
            "I am contacting you",
            "sometime in next week",
            "to explain to you",
            "my problem in detail.",
            "No error."
        ],
        answer: "sometime in next week",
        explanation: "Correct form: 'sometime next week.'"
    },
    {
        question: "6. When the national anthem was being sung, everyone were standing in silence.",
        options: [
            "When the national",
            "anthem was being",
            "sung, everyone were",
            "standing in silence.",
            "No error."
        ],
        answer: "sung, everyone were",
        explanation: "Correct form: 'sung, everyone was.'"
    },
    {
        question: "7. FORAY",
        options: [
            "Maraud",
            "Contest",
            "Ranger",
            "Intuition"
        ],
        direction: "Direction (Q.No. 7): In the following the questions choose the word which best expresses the meaning of the given word.",
        answer: "Maraud"
    },
    {
        question: "8. The attitude of Western countries towards the Third World Countries is rather callous to say the least.",
        options: [
            "passive",
            "unkind",
            "cursed",
            "unfeeling"
        ],
        direction: "Direction (Q.Nos. 8 - 9): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
        answer: "unfeeling"
    },
    {
        question: "9. When he returned he was accompanied by a sprightly young girl.",
        options: [
            "beautiful",
            "lively",
            "intelligent",
            "sportive"
        ],
        answer: "lively"
    },
    {
        question: "10. A friendly dog meet us at the farmgate.",
        options: [
            "helpful",
            "understanding",
            "quiet",
            "hostile"
        ],
        direction: "Direction (Q.No. 10): Each sentences below consist of a word or a phrase which is bold. It is followed by four words or phrases. Select the word or pharse which is closes to the OPPOSITE in meaning of the bold word or phrase.",
        answer: "hostile"
    },
    {
        question: "11. Success in this examination depends ...... hard work alone.",
        options: [
            "at",
            "over",
            "for",
            "on"
        ],
        direction: "Direction (Q.No. 11): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "on"
    },
    {
        question: "12. Find the correctly spelt words.",
        options: [
            "Eflorescence",
            "Efllorescence",
            "Efflorescence",
            "Efflorascence"
        ],
        direction: "Direction (Q.No. 12): Find the correctly spelt words.",
        answer: "Efflorescence"
    },
    {
        question: "13. Psychologist, Psychaitrist, Physiologist, Psychoanalyst, All correct",
        options: [
            "Psychologist",
            "Psychaitrist",
            "Physiologist",
            "Psychoanalyst",
            "All correct"
        ],
        direction: "Direction (Q.No. 13): In each questions below five words are given. Find out that word, the spelling of which is WRONG. The letter of that word is the answer. If all the four words are spelt correctly, the answer is 'E', i.e., 'All Correct'.",
        answer: "Psychaitrist",
        explanation: "Correct spelling: 'Psychiatrist.'"
    },
    {
        question: "14. The funeral was plain and ostentatious It differed in nothing from the ordinery",
        options: [
            "The funeral",
            "was plain and ostentatious",
            "It differed",
            "in nothing from the ordinery",
            "All correct"
        ],
        direction: "Direction (Q.No. 14): In each sentence below, four words which are lettered (A), (B), (C) and (D) have been printed in bold type, one which may be either inappropriate in the context of the sentence or wrongly spelt.The letter of that word is answer.If all the four words are appropriate and also correctly spelt, mark 'E', i.e., 'All Correct' as the answer.",
        answer: "was plain and ostentatious",
        explanation: "Correct form: 'was plain and unostentatious.'"
    },
    {
        question: "15. The poor villagers have waited in the bitter cold for more than 4 hours now.",
        options: [
            "have been waiting",
            "had waited",
            "has been waiting",
            "No improvement"
        ],
        direction: "Direction (Q.No. 15): In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
        answer: "have been waiting"
    },
    {
        question: "16. Mahesh need not have purchased the bag, means ......",
        options: [
            "it was not necessary for Mahesh to purchase the bag but he has purchased it",
            "it was necessary for Mahesh to purchase the bag and he has not purchased it",
            "it was not necessary for Mahesh to purchase the bag and he has not purchased it",
            "it was necessary for Mahesh to purchase the bag but he has not purchased it",
            "Mahesh already has a bag but still he purchased another one"
        ],
        direction: "Direction (Q.Nos. 16 - 17): In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
        answer: "it was not necessary for Mahesh to purchase the bag but he has purchased it"
    },
    {
        question: "17. Because he believes in democratic principles, he always ......",
        options: [
            "decides all the matters himself",
            "listen to others views and enforces his own",
            "shown respect to others opinions if they match his own",
            "reconciles with the majority views and gives us his own",
            "imposes his own views on others"
        ],
        answer: "reconciles with the majority views and gives us his own"
    },
    {
        question: "18. There is a touching story of Professor Hardy visiting Ramanujan as he lay desperately ill in hospital at Putney. P: 'No Hardy, that is not a dull number in the very least. Q: Hardy, who was a very shy man, could not find the words for his distress. R: It was 1729. S: The best he could do, as he got to the beside was \"I say Ramanujan, I thought the number of taxi I came down in was a very dull number\"",
        options: [
            "PRSQ",
            "QSRP",
            "QSPR",
            "SQRP"
        ],
        direction: "Direction (Q.No. 18): In questions below, each passage consist of six sentences. The first and sixth sentence are given in the beginning. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "QSPR"
    },
    {
        question: "19. One who eats everything",
        options: [
            "Omnivorous",
            "Omniscient",
            "Irrestible",
            "Insolvent"
        ],
        direction: "Direction (Q.No. 19): In questions given below out of four alternatives, choose the one which can be substituted for the given word/sentence.",
        answer: "Omnivorous"
    },
    {
        question: "20. I felt like a fish out of water among all those business tycoons.",
        options: [
            "troubled",
            "stupid",
            "uncomfortable",
            "inferior"
        ],
        direction: "Direction (Q.No. 20): In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
        answer: "uncomfortable"
    }
];



const VerbalTest5 = () => {
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
  
  export default VerbalTest5;
  