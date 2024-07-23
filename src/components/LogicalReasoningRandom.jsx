import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Look at this series: 2, 6, 18, 54, ... What number should come next?",
        options: [
            "108",
            "148",
            "162",
            "216"
        ],
        direction: "Direction (Q.No. 1): In each series, look for the degree and direction of change between the numbers. In other words, do the numbers increase or decrease, and by how much",
        answer: "162",
        explanation: "Each number is multiplied by 3: 2*3=6, 6*3=18, 18*3=54, 54*3=162."
    },
    {
        question: "2. Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 2): Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        answer: "3"
    },
    {
        question: "3. Which word does NOT belong with the others?",
        options: [
            "scythe",
            "knife",
            "pliers",
            "saw"
        ],
        direction: "Direction (Q.No. 3): Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification.",
        answer: "pliers",
        explanation: "Pliers are a tool for gripping and bending, while the other words are cutting tools."
    },
    {
        question: "4. infirmary",
        options: [
            "surgery",
            "disease",
            "patient",
            "receptionist"
        ],
        direction: "Direction (Q.No. 4): Find the word that names a necessary part of the underlined word.",
        answer: "patient",
        explanation: "An infirmary is a place where patients are treated."
    },
    {
        question: "5. The high school math department needs to appoint a new chairperson, which will be based on seniority. Ms. West has less seniority than Mr. Temple, but more than Ms. Brody. Mr. Rhodes has more seniority than Ms. West, but less than Mr. Temple. Mr. Temple doesn't want the job. Who will be the new math department chairperson?",
        options: [
            "Mr. Rhodes",
            "Mr. Temple",
            "Ms.West",
            "Ms. Brody"
        ],
        direction: "Direction (Q.No. 5): Read the question carefully and choose the correct answer.",
        answer: "Mr. Rhodes"
    },
    {
        question: "6. What day is the vacuuming done?",
        options: [
            "Friday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
        ],
        direction: "Direction (Q.No. 6): Read the below passage carefully and answer the questions: Five roommates Randy, Sally, Terry, Uma, and Vernon each do one housekeeping task mopping, sweeping, laundry, vacuuming, or dusting one day a week, Monday through Friday.\n* Vernon does not vacuum and does not do his task on Tuesday.\n* Sally does the dusting, and does not do it on Monday or Friday.\n* The mopping is done on Thursday.\n* Terry does his task, which is not vacuuming, on Wednesday.\n* The laundry is done on Friday, and not by Uma.\n* Randy does his task on Monday.",
        answer: "Tuesday",
        explanation: "By elimination, Tuesday is the only day left for vacuuming."
    },
    {
        question: "7. On what does Quinn rely in making her argument?",
        options: [
            "statistics",
            "emotion",
            "fairness",
            "anecdotes",
            "actualities"
        ],
        direction: "Direction (Q.No. 7): Read the below passage carefully and answer the questions: Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years.",
        answer: "fairness",
        explanation: "Quinn's argument is based on the fairness of changing the rules suddenly."
    },
    {
        question: "8. The passage best supports the statement that",
        options: [
            "press has a great role to play in a democracy.",
            "the press is the only means to project to the masses the policies of the government.",
            "the freedom of press is essential for the proper functioning of democracy.",
            "the press can be used by the governments as an effective media for the upliftment of the backward sections of society.",
            "all the information given by the press should be well-articulated so as to gain a good opinion towards the ruling party."
        ],
        direction: "Direction (Q.No. 8): Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it.",
        answer: "the freedom of press is essential for the proper functioning of democracy.",
        explanation: "The passage emphasizes the need for a free press to criticize and support just causes."
    },
    {
        question: "9. Statements: After this amendment to the Constitution, no child below the age of 14 years will be employed to work in any factory or mine or engaged in any other hazardous employment. Conclusions:\n\nBefore this amendment, children below 14 years were employed to work in factory or mine.\nThe employers must now abide by this amendment to the Constitution.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 9): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Both I and II follow",
        explanation: "The amendment implies that such employment was allowed before, and now it must be followed."
    },
    {
        question: "10. Statements:\n\nThere is sharp decline in the production of oil seeds this year.\nThe Government has decided to increase the import quantum of edible oil.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 10): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Statement I is the cause and statement II is its effect",
        explanation: "The decline in production likely led to the increase in imports."
    },
    {
        question: "11. Statement: Why don't you go to the court if the employer does not pay you the Provident Fund contribution? Assumptions:\n\nCourts can intervene in matters of dispute between employer and employees.\nIt is obligatory for the employer to pay the Provident Fund contribution to the employees.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement implies that the court can help, and that employers are required to pay the Provident Fund."
    },
    {
        question: "12. Statement: A sentence in the letter to the candidates called for written examination - 'You have to bear your expenses on travel etc'. Assumptions:\n\nIf not clarified all the candidates may claim reimbursement of expenses.\nMany organizations reimburse expenses on travel to candidates called for written examination.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement clarifies expenses must be borne by candidates, implying assumptions I and II."
    },
    {
        question: "13. Statement: \"In the recently imposed war, global public opinion was dishonoured by the economically strong and scientifically advanced superpower.\" Assumptions:\n\nSuperpowers need not take any heed of global public opinion.\nGlobal public opinion must have been against the imposition of war.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement implies both that superpowers ignored global opinion and that opinion was against the war."
    },
    {
        question: "14. Statements: All jungles are tigers. Some tigers are horses.\nConclusions:\n\nSome horses are jungles.\nNo horse is jungle.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 14): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Either I or II follows",
        explanation: "Some tigers are horses, and since all jungles are tigers, it's possible some horses are jungles or none are."
    },
    {
        question: "15. Statements: All film stars are playback singers. All film directors are film stars.\nConclusions:\n\nAll film directors are playback singers.\nSome film stars are film directors.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 15): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Both I and II follow",
        explanation: "If all film stars are playback singers and all film directors are film stars, then both conclusions follow."
    },
    {
        question: "16. Statements: All aeroplanes are trains. Some trains are chairs.\nConclusions:\n\nSome aeroplanes are chairs.\nSome chairs are aeroplanes.\nSome chairs are trains.\nSome trains are aeroplanes.",
        options: [
            "None follows",
            "Only I and II follow",
            "Only II and III follow",
            "Only III and IV follow"
        ],
        direction: "Direction (Q.No. 16): In each of the following questions, two statements are given followed by three or four conclusions numbered I, II, III and IV. You have to take the given statements to be true even if they seem to be at variance from the commonly known facts and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only III and IV follow",
        explanation: "Some trains are chairs and some trains are aeroplanes, but not all trains are chairs or aeroplanes."
    },
    {
        question: "17. Statement: The exodus from villages to cities is detrimental to both.\nCourses of Action:\n\nRural postings must be made mandatory.\nThere should be fewer trains linking cities to smaller places.\nEmployment generation scheme should be launched in rural areas.",
        options: [
            "Only II follows",
            "Only I and II follow",
            "Only III follows",
            "Only II and III follow"
        ],
        direction: "Direction (Q.No. 17): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only III follows",
        explanation: "Employment generation in rural areas can prevent the exodus without imposing or limiting movement."
    },
    {
        question: "18. Statement: Should the income generated out of agricultural activities be taxed?\nArguments:\n\nNo. Farmers are otherwise suffering from natural calamities and low yield coupled with low procurement price and their income should not be taxed.\nYes. Majority of the population is dependent on agriculture and hence their income should be taxed to augment the resources.\nYes. Many big farmers earn much more than the majority of the service earners and they should be taxed to remove the disparity.",
        options: [
            "Only I is strong",
            "Only I and II are strong",
            "Only II and III are strong",
            "All are strong",
            "None of these"
        ],
        direction: "Direction (Q.No. 18): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only I is strong",
        explanation: "Argument I is strong as it highlights the challenges farmers face. II and III are weaker by comparison."
    },
    {
        question: "19. Statement: The successful man has the ability to judge himself correctly.\nAssumptions:\n\nInability to judge correctly causes failure.\nTo judge others is of no use to a successful man.\nThe successful man cannot make a wrong judgement.",
        options: [
            "None is implicit",
            "All are implicit",
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and II are implicit",
        explanation: "The statement implies that judging oneself correctly is key to success and that judging others is less relevant."
    },
    {
        question: "20. Statement: The address of the Principal to the students, \"Dear students, if you want a healthy mind, listen to music.\"\nAssumptions:\n\nNormally students like to follow good advice.\nIt is desirable to develop a healthy mind.\nIt is the duty of the Principal to advise the students.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit",
            "None is implicit",
            "None of these"
        ],
        answer: "Only I and II are implicit",
        explanation: "The statement assumes students value good advice and that developing a healthy mind is desirable."
    }
];



const LogicalReasoningRandom = () => {
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
  
  
  export default LogicalReasoningRandom;