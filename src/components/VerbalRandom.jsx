import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1.(solve as per the direction given below)",
        options: [
            "They have been",
            "very close friends",
            "until they quarrelled.",
            "No error."
        ],
        direction:"Direction (Q.Nos. 1 - 3)Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "They have been",
        explanation: "They had been"
  },
  {
    question: "2. (solve as per the direction given above)",
    options: ["The party chief made it a point to state that", "the Prime Minister and the Union Home Minister should also come.", "and they see what his party men had seen.", "No error."],
    answer: "and they see what his party men had seen.",
    explanation: "and see what his party men had seen"
  },
  {
    question: "3. (solve as per the direction given above)",
    options: [
      "At the station,",
      "I'll hire a coolie",
      "Ito carry my baggages","error"
    ],
    answer: "to carry my baggages",
    explanation: "to carry my baggage"
  },
  {
    question: "4. (solve as per the direction given above)",
    options: ["Honesty and integrity are", "the qualities which cannot be", "done away with", "and hence assume a lot of importance.","No error."],
    direction:"Direction (Q.Nos. 4 - 5)Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
    answer: "No error.",
    explanation: "No error."
  },
  {
    question: "5. (solve as per the direction given above)",
    options: ["When I stood up spontaneously", "and questioned the speaker;", "someone commented that", "it was a boldly step."],
    answer: "it was a boldly step.",
    explanation: "it was a bold step."
  },
  {
    question: "6. STRINGENT",
    options: ["Dry", "Strained", "Rigorous", "Shrill"],
    direction:" Direction (Q.No. 6)In the following the questions choose the word which best expresses the meaning of the given word.",
    answer: "Rigorous"
  },
  {
    question: "7.The visitor had a bohemian look.",
    options: [
      "hostile",
      "unconventional",
      "sinister","unfriendly"
    ],
    direction: "Direction (Q.No. 7)In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printer in bold and can replaces it without altering the meaning of the sentence.",
    answer: "unconventional"
    
  },
  {
    question: "8. About twenty clerks were made ...... when the banks introduced computers.",
    options: ["dispensable", "redundant", "expandable", "obsolete"],
    direction:"Direction (Q.No. 8)Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
    answer: "redundant"
  },
  {
    question: "9.Find the correctly spelt words.",
    options: ["Inoculation", "Innoculation", "Inocculation", "Inocullation"],
    answer: "Inoculation"
  },
  {
    question: "10.They failed in their attempt to repair the demolished portion of that building.",
    options: [
      "for their attempt to repair",
      "in their attempting to repair",
      "with their attempt to repair",
      "in their attempt for repairs",
      "No correction required"
    ],
    direction: " Direction (Q.Nos. 10 - 12)Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
    answer: "No correction required"
  },
  {
    question: "11. Can you tell me why did you not speak the truth?",
    options: ["why did not you speak", "that why did you not speak", "why you did not speak", "why did you not spoke"],
    answer: "why you did not speak"
  },
  {
    question: "12. Technology must use to feed the forces of change.",
    options: ["must be used to feed", "must have been using to feed", "must use having fed", "must be using to feed"],
    answer: "must be used to feed"
  },
  {
    question: "Due to these reason we are all in favour of universal compulsory education.",
    options: ["Out of these reasons.", "For these reasons", "By these reasons", "No improvement"],
    direction:"Direction (Q.No. 13)In questions given below, a part of the sentence is italicised and underlined. Below are given alternatives to the italicised part which may improve the sentence. Choose the correct alternative. In case no improvement is needed, option 'D' is the answer.",
    answer: "For these reasons"
  },
  {
    question: "14. Owing to the acute power shortage, the people of our locality have decided to ......",
    options: ["dispense with other non-conventional energy sources", "resort to abundant use of electricity for illumination", "off-switch the electrical appliance while not in use", "explore other avenues for utilising the excess power","resort to use of electricity only when it is inevitable"],
    direction:" Direction (Q.No. 14)In each question, an incomplete statement (Stem) followed by fillers is given. Pick out the best one which can complete incomplete stem correctly and meaningfully.",
    answer: "resort to use of electricity only when it is inevitable"
  },
  {
    question: "15. S1:	Several sub-cities have been planned around capital.P :	Dwarga is the first among them.Q :	They are expected to alleviate the problem of housing.R :	It is coming up in the south west of capital.S :	It will cater to over one million people when completed.S6:	Hopefully the housing problem will not be as acute at present after these sub-cities are built.The Proper sequence should be:",
    options: ["QPRS", "PRSQ", "PQRS", "QRSP"],
    direction: " Direction (Q.No. 15)In questions below, each passage consist of six sentences. The first and sixth sentence are given in the begining. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
    answer: "QPRS"
    
  },
  {
    question: "16. Which of the sentences should come second in the paragraph ?",
    options: ["5", "1", "4", "3","6"],
    direction:"Direction (Q.No. 16)Rearrange the following six sentences in proper sequence to form a meaningful paragraph, then answer the questions given below.A taxi was summoned and Venu was taken to Lifeline hospital.While hurrying home from school.since they did not succeed, they decided to take him to a hospital.When Venu opened his eyes, he found himself surrounded by doctors and nurses.Some people rushed towards him and tried to bring him to his senses.He was thrown a couple of feet away and lost consciousness.",
    answer: "6",
  },
  {
    question: "17. (solve as per the direction given above)",
    options: ["bad", "worse", "good"],
    direction:"Direction (Q.No. 17)Many of us believe that science is something modern ...(1)... the truth is that ...(2)... has been using science for ...(3)... very long time. However, it has ...(4)... a greater effect on human lives in the last 25 ...(5)... 30 years than in the hundreds of years ...(6)... the invention of the plough. The ...(7)... gifts of science have modern life ...(8)... and comfortable. But science has ...(9)... the same time created new problems. one of these which may become ...(10)... in the years to come, is ...(11)... of 'jet-lag'. With the coming of modern jets. flying at more than 900 km/hr, the world ...(12)... very small indeed. Today if you ...(13)... New Delhi at 4.00 in the morning, you ...(14)... eat an early breakfast in the sky ...(15)... kabul, and be in London by about 1.00pm.",
    answer: "worse"
  },
  {
    question: "18. The class could not keep a straight face on hearing the strange pronunciation of the new teacher.",
    options: ["remain silent", "remain serious", "remain mute", "remain disturbed"],
    direction:" Direction (Q.Nos. 18 - 20)In the following questions four alternatives are given for the idiom/phrase italicised and underlined in the sentence. Choose the alternative which best expresses the meaning of idiom/phrase.",
    answer: "remain serious"
  },
  {
    question: "19. He was in high spirits when I met him in the restaurant.",
    options: ["He was in a drunken state", "He was very cheerful", "He talked incoherently", "He was deeply engrossed in thoughts"],
    answer: "He was very cheerful",
  },
  {
    question: "20. The university will have to shelve its plans for expansion in view of present situation",
    options: ["cancel", "discuss", "reconsider", "postpone"],
    answer: "postpone",
  }
];




const VerbalRandom = () => {
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
  
  export default VerbalRandom;
  