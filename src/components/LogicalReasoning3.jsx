import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "Which word does NOT belong with the others?",
        options: ["wing", "fin", "beak", "rudder"],
        direction: "Direction (Q.No. 1): Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification.",
        answer: "rudder",
        explanation: "Wing, fin, and beak are parts of animals (birds, fish, and birds respectively), whereas rudder is a part of a boat or airplane used for steering."
    },
    {
        question: "Here are some words translated from an artificial language. lelibroon means yellow hat, plekafroti means flower garden, frotimix means garden salad. Which word could mean 'yellow flower'?",
        options: ["lelifroti", "lelipleka", "plekabroon", "frotibroon"],
        direction: "Direction (Q.No. 2): First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language.",
        answer: "lelipleka",
        explanation: "lelipleka (yellow flower) = leli (yellow) + pleka (flower)."
    },
    {
        question: "Find the statement that must be true according to the given information.\nGeorgia is older than her cousin Marsha. Marsha's brother Bart is older than Georgia. When Marsha and Bart are visiting with Georgia, all three like to play a game of Monopoly. Marsha wins more often than Georgia does.",
        options: [
            "When he plays Monopoly with Marsha and Georgia, Bart often loses.",
            "Of the three, Georgia is the oldest.",
            "Georgia hates to lose at Monopoly.",
            "Of the three, Marsha is the youngest."
        ],
        direction: "Direction (Q.No. 3): Find the statement that must be true according to the given information.",
        answer: "Of the three, Marsha is the youngest.",
        explanation: "Marsha is the youngest based on the given information."
    },
    {
        question: "Tom puts on his socks before he puts on his shoes. He puts on his shirt before he puts on his jacket. Tom puts on his shoes before he puts on his shirt. If the first two statements are true, the third statement is",
        options: ["true", "false", "uncertain"],
        direction: "Direction (Q.No. 4): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "false",
        explanation: "Based on the first two statements, Tom puts on his shirt before his shoes, making the third statement false."
    },
    {
        question: "The bookstore has a better selection of postcards than the newsstand does. The selection of postcards at the drugstore is better than at the bookstore. The drugstore has a better selection of postcards than the bookstore or the newsstand. If the first two statements are true, the third statement is",
        options: ["true", "false", "uncertain"],
        direction: "Direction (Q.No. 5): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "true",
        explanation: "If the bookstore's selection is better than the newsstand's and the drugstore's selection is better than the bookstore's, then the drugstore's selection is indeed better than both."
    },
    {
        question: "Fact 1: Islands are surrounded by water. Fact 2: Maui is an island. Fact 3: Maui was formed by a volcano. If the first three statements are facts, which of the following statements must also be a fact?\nI: Maui is surrounded by water. II: All islands are formed by volcanoes. III: All volcanoes are on islands.",
        options: ["I only", "II only", "II and III only", "None of the statements is a known fact."],
        direction: "Direction (Q.No. 6): The logic problems in this set present you with three true statements: Fact 1, Fact 2, and Fact 3. Then, you are given three more statements (labeled I, II, and III), and you must determine which of these, if any, is also a fact.",
        answer: "I only",
        explanation: "Only I is true based on the given facts. II and III are not necessarily true."
    },
    {
        question: "Statements:\nThe school authority has asked the X Std. students to attend special classes to be conducted on Sundays.\nThe parents of the X Std. students have withdrawn their wards from attending private tuitions conducted on Sundays.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 7): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship.",
        answer: "Statement I is the cause and statement II is its effect",
        explanation: "The special classes caused parents to withdraw their wards from private tuitions."
    },
    {
        question: "Statement: Please note that the company will provide accommodation to only outside candidates if selected.' - A condition in an advertisement.\nAssumptions:\nThe local candidates would be having some other arrangement for their stay.\nThe company plans to select only local candidates.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 8): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The company assumes local candidates have their own arrangements."
    },
    {
        question: "Statement: 'In order to bring punctuality in our office, we must provide conveyance allowance to our employees.' - In charge of a company tells Personnel Manager.\nAssumptions:\nConveyance allowance will not help in bringing punctuality.\nDiscipline and reward should always go hand in hand.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 9): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement assumes that rewarding employees will encourage punctuality."
    },
    {
        question: "Statement: 'Double your money in five months.' - An advertisement.\nAssumptions:\nThe assurance is not genuine.\nPeople want their money to grow.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The advertisement assumes people are interested in growing their money."
    },
    {
        question: "Statement: 'If you want to give any advertisement, give it in the newspaper X.' - A tells B.\nAssumptions:\nB wants to publicise his products.\nNewspaper X has a wide circulation.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The advice implies B wants to advertise and X is a good choice for wide reach."
    },
    {
        question: "Statement: 'In my absence, I request you to look after the affairs of our company.' - B tells C.\nAssumptions:\nC may not accept the request of B.\nC has the expertise to handle the affairs of the company.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "B's request implies that C has the capability to handle the company affairs."
    },
    {
        question: "Statement: The electric supply corporation has decided to open a few more collection centres in the business district area.\nAssumptions:\nThe people in the area may welcome the decision.\nHenceforth there may be less time required by the customers for paying electricity bill.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The decision to open more centres implies both assumptions are considered."
    },
    {
        question: "Statement: The police department has come under a cloud with recent revelations that at least two senior police officials are suspected to have been involved in the illegal sale of a large quantity of weapons from the state police armoury.\nCourses of Action:\nA thorough investigation should be ordered by the State Government to bring out all those who are involved into the illegal sale of arms.\nState police armoury should be kept under Central Government's control.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 14): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Only I follows",
        explanation: "A thorough investigation should be conducted to uncover the truth."
    },
    {
        question: "Statement: The Minister said that the teachers are still not familiarised with the need, importance and meaning of population education in the higher education system. They are not even clearly aware about their role and responsibilities in the population education programme.\nCourses of Action:\nPopulation education programme should be included in the college curriculum.\nOrientation programme should be conducted for teachers on population education.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 15): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Including the program in the curriculum and conducting orientation for teachers will address the issue."
    },
    {
        question: "Statement: The kharif crops have been affected by the insects for consecutive three years in the district and the farmers harvested less than fifty percent of produce during these years.\nCourses of Action:\nThe farmers should seek measures to control the attack of insects to protect their crops next year.\nThe Government should increase the support price of kharif crops considerably to protect the economic interests of farmers.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 16): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Controlling the insect attack and increasing the support price are both necessary measures."
    },
    {
        question: "Statements: All poles are guns. Some boats are not poles.\nConclusions:\nAll guns are boats.\nSome boats are not guns.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 17): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Neither I nor II follows",
        explanation: "There is no information provided to make a definite conclusion about the relationship between guns and boats."
    },
    {
        question: "Statement: Should there be a cap on maximum number of contestants for parliamentary elections in any constituency?\nArguments:\nYes. This will make the parliamentary elections more meaningful as the voters can make a considered judgement for casting their vote.\nNo. In a democracy any person fulfilling the eligibility criteria can contest parliamentary elections and there should be no restrictions.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 18): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Both arguments present valid points about the benefits and drawbacks of capping the number of contestants."
    },
    {
        question: "Statement: It is estimated that about twenty lakh people will visit the city during the ensuing festival.\nCourses of Action:\nThe civic authority should monitor the crowd and restrict entry of the people beyond a manageable number.\nThe local police authority should be put on high alert to maintain law and order during the festival.\nAll the hospitals in the city should be put on high alert in case of any eventuality.",
        options: [
            "Only I and II follow",
            "Only II and III follow",
            "Only I and III follow",
            "All follow",
            "None of these"
        ],
        direction: "Direction (Q.No. 19): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "All follow",
        explanation: "Monitoring the crowd, ensuring law and order, and preparing hospitals are all necessary measures."
    },
    {
        question: "Statement: A State Government suspended two additional district judges.\nAssumptions:\nThey were negligent in discharging duties.\nThere was a charge of misconduct against them.\nThe government officials were biased against them.",
        options: [
            "None is implicit",
            "Either I or II is implicit",
            "Any one of the three is implicit",
            "Only I and III are implicit",
            "Either I or III is implicit"
        ],
        direction: "Direction (Q.No. 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Any one of the three is implicit",
        explanation: "Any of the given assumptions could be the reason for the suspension."
    }
];



const LogicalReasoning3 = () => {
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
  
  
  export default LogicalReasoning3;