import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Which word does NOT belong with the others?",
        options: [
            "two",
            "three",
            "six",
            "eight"
        ],
        direction: "Direction (Q.No. 1): Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification.",
        answer: "three",
        explanation: "Two, six, and eight are all even numbers, while three is an odd number."
    },
    {
        question: "2. walk skip run toss pitch ?",
        options: [
            "swerve",
            "hurl",
            "jump",
            "dance"
        ],
        direction: "Direction (Q.No. 2): The words in the bottom row are related in the same way as the words in the top row. For each item, find the word that completes the bottom row of words.",
        answer: "hurl",
        explanation: "To toss is to throw lightly, to hurl is to throw with great force, just as to walk is to move slowly and to run is to move quickly."
    },
    {
        question: "3. People speculate when they consider a situation and assume something to be true based on inconclusive evidence. Which situation below is the best example of Speculation?",
        options: [
            "Francine decides that it would be appropriate to wear jeans to her new office on Friday after reading about 'Casual Fridays' in her employee handbook.",
            "Mary spends thirty minutes sitting in traffic and wishes that she took the train instead of driving.",
            "After consulting several guidebooks and her travel agent, Jennifer feels confident that the hotel she has chosen is first-rate.",
            "When Emily opens the door in tears, Theo guesses that she's had a death in her family."
        ],
        direction: "Direction (Q.No. 3): Read each definition and all four choices carefully, and find the answer that provides the best example of the given definition.",
        answer: "When Emily opens the door in tears, Theo guesses that she's had a death in her family.",
        explanation: "Speculation involves making assumptions based on inconclusive evidence, and Theo's guess is based on limited information."
    },
    {
        question: "4. Middletown is north of Centerville. Centerville is east of Penfield. Penfield is northwest of Middletown. If the first two statements are true, the third statement is",
        options: [
            "true",
            "false",
            "uncertain"
        ],
        direction: "Direction (Q.No. 4): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "false",
        explanation: "If Middletown is north of Centerville, and Centerville is east of Penfield, then Penfield cannot be northwest of Middletown."
    },
    {
        question: "5. Fact 1: All chickens are birds. Fact 2: Some chickens are hens. Fact 3: Female birds lay eggs. If the first three statements are facts, which of the following statements must also be a fact?",
        options: [
            "I: All birds lay eggs.",
            "II: Some Hens are birds.",
            "III: Some chickens are not hens.",
            "I only",
            "II only",
            "II and III only",
            "None of the statements is a known fact."
        ],
        direction: "Direction (Q.No. 5): The logic problems in this set present you with three true statements: Fact 1, Fact 2, and Fact 3. Then, you are given three more statements (labeled I, II, and III), and you must determine which of these, if any, is also a fact. One or two of the statements could be true; all of the statements could be true; or none of the statements could be true. Choose your answer based solely on the information given in the first three facts.",
        answer: "II only",
        explanation: "Given that all chickens are birds and some chickens are hens, it follows that some hens are birds. The other statements cannot be conclusively derived from the given facts."
    },
    {
        question: "6. Danielle has been visiting friends in Ridge-wood for the past two weeks. She is leaving tomorrow morning and her flight is very early. Most of her friends live fairly close to the airport. Madison lives ten miles away. Frances lives five miles away, Samantha, seven miles. Alexis is farther away than Frances, but closer than Samantha. Approximately how far away from the airport is Alexis?",
        options: [
            "nine miles",
            "seven miles",
            "eight miles",
            "six miles"
        ],
        direction: "Direction (Q.No. 6): Read the question carefully and choose the correct answer.",
        answer: "six miles",
        explanation: "Alexis is farther from the airport than Frances (five miles) but closer than Samantha (seven miles), so Alexis is approximately six miles away."
    },
    {
        question: "7. Which city got the most rain?",
        options: [
            "Last Stand",
            "Mile City",
            "New Town",
            "Olliopolis",
            "Polberg"
        ],
        direction: "Direction (Q.No. 7): Read the below passage carefully and answer the questions.",
        answer: "Polberg",
        explanation: "Based on the given information, the city in the forest got the most rain, and Olliopolis got 44 inches of rain, so Polberg must have received the most rain (65 inches)."
    },
    {
        question: "8. One New York publisher has estimated that 50,000 to 60,000 people in the United States want an anthology that includes the complete works of William Shakespeare. And what accounts for this renewed interest in Shakespeare? As scholars point out, his psychological insights into both male and female characters are amazing even today. This paragraph best supports the statement that",
        options: [
            "Shakespeare's characters are more interesting than fictional characters today.",
            "people even today are interested in Shakespeare's work because of the characters.",
            "academic scholars are putting together an anthology of Shakespeare's work.",
            "New Yorkers have a renewed interested in the work of Shakespeare.",
            "Shakespeare was a psychiatrist as well as a playwright."
        ],
        direction: "Direction (Q.No. 8): Read the paragraph carefully and determine the main point the author is trying to make. What conclusion can be drawn from the argument? Each paragraph is followed by five statements.One statement supports the author's argument better than the others do.",
        answer: "people even today are interested in Shakespeare's work because of the characters.",
        explanation: "The passage indicates that Shakespeare's insights into characters are a reason for the renewed interest in his work."
    },
    {
        question: "9. The Fourth Amendment to the Constitution protects citizens against unreasonable searches and seizures. No search of a person's home or personal effects may be conducted without a written search warrant issued on probable cause. This means that a neutral judge must approve the factual basis justifying a search before it can be conducted. This paragraph best supports the statement that the police cannot search a person's home or private papers unless they have",
        options: [
            "legal authorization",
            "direct evidence of a crime.",
            "read the person his or her constitutional rights.",
            "a reasonable belief that a crime has occurred.",
            "requested that a judge be present."
        ],
        direction: "Direction (Q.No. 9): Choose the statement that is best supported by the information given in the question passage.",
        answer: "legal authorization",
        explanation: "The passage states that a search warrant issued on probable cause is required, which implies legal authorization."
    },
    {
        question: "10. The government has decided to pay compensation to the tune of Rs. 1 lakh to the family members of those who are killed in railway accidents.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The decision implies that the government has enough funds to meet the expenses due to compensation."
    },
    {
        question: "11. The State Government has abolished the scheme of providing concessional air ticket to students.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The assumption is that the students who travel by air can bear the expenses without the concessional scheme."
    },
    {
        question: "12. The General Administration Department has issued a circular to all the employees informing them that henceforth the employees can avail their lunch break at any of the half-hour slots between 1.00 p.m. and 2.30 p.m.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The decision aims to ensure that employees can take lunch breaks without disrupting the organization's work."
    },
    {
        question: "13. No regular funds have been provided for welfare activities in this year's budget of the factory.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement implies that budgetary provision is necessary for carrying out welfare activities."
    },
    {
        question: "14. A large number of people visiting India from country X have been tested positive for carrying viruses of a killer disease.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 14): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Only II follows",
        explanation: "Setting up detection centers at airports and seaports is a logical step to identify and quarantine infected individuals."
    },
    {
        question: "15. The alert villagers caught a group of dreaded dacoits armed with murderous weapons.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 15): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Only II follows",
        explanation: "Rewarding the villagers for their courage and unity is a logical step."
    },
    {
        question: "16. Statements: Some men are educated. Educated persons prefer small families.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 16): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Only conclusion II follows",
        explanation: "Given that some men are educated and educated persons prefer small families, it follows that some men prefer small families."
    },
    {
        question: "17. Should we scrap the system of formal education beyond graduation?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 17 - 19): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Argument I highlights early employment, and Argument II highlights the importance of in-depth knowledge."
    },
    {
        question: "18. Should Government close down loss-making public sector enterprises?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 17 - 19): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Argument I highlights job security, and Argument II highlights the principle of 'survival of the fittest'."
    },
    {
        question: "19. Should Doordarshan be given autonomous status?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 17 - 19): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Argument I supports fair and impartial coverage, while Argument II cautions against biased decision-making."
    },
    {
        question: "20. Should India support all the international policies of United States of America?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 20): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Neither I nor II is strong",
        explanation: "Supporting policies should be based on national interest, not solely on the actions of other countries or access to funds."
    }
];


const LogicalReasoning10 = () => {
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
  
  
  export default LogicalReasoning10;