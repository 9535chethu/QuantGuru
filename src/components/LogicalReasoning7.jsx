import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';



const questions = [
    {
        question: "1. Which word does NOT belong with the others?",
        options: [
            "leopard",
            "cougar",
            "elephant",
            "lion"
        ],
        direction: "Direction (Q.No. 1): Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others.",
        answer: "elephant",
        explanation: "Leopard, cougar, and lion are all big cats (felids), while elephant is not."
    },
    {
        question: "2. Reptile is to lizard as flower is to",
        options: [
            "petal",
            "stem",
            "daisy",
            "alligator"
        ],
        direction: "Direction (Q.Nos. 2 - 3): A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the first two words. Then, try to use the same sentence to find out which of the answer choices completes the same relationship with the third word.",
        answer: "daisy",
        explanation: "A lizard is a type of reptile, and a daisy is a type of flower."
    },
    {
        question: "3. Odometer is to mileage as compass is to",
        options: [
            "speed",
            "hiking",
            "needle",
            "direction"
        ],
        direction: "Direction (Q.Nos. 2 - 3): A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the first two words. Then, try to use the same sentence to find out which of the answer choices completes the same relationship with the third word.",
        answer: "direction",
        explanation: "An odometer measures mileage, and a compass indicates direction."
    },
    {
        question: "4. Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 4): Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        answer: "2",
        explanation: "This question requires a visual pattern that cannot be conveyed in text form."
    },
    {
        question: "5. Mark is working with a realtor to find a location for the toy store he plans to open in his town. He is looking for a place that is either in, or not too far from, the center of town and one that would attract the right kind of foot traffic. Which of the following locations should Mark's realtor call to his attention?",
        options: [
            "a storefront in a new high-rise building near the train station in the center of town whose occupants are mainly young, childless professionals who use the train to commute to their offices each day.",
            "a little shop three blocks away from the town's main street, located across the street from an elementary school and next door to an ice cream store",
            "a stand-alone storefront on a quiet residential street ten blocks away from the town's center",
            "a storefront in a small strip mall located on the outskirts of town that is also occupied by a pharmacy and a dry cleaner"
        ],
        direction: "Direction (Q.No. 5): Each question presents a situation and asks you to make a judgment regarding that particular circumstance. Choose an answer based on given information.",
        answer: "a little shop three blocks away from the town's main street, located across the street from an elementary school and next door to an ice cream store",
        explanation: "This location is close to the center of town and is near an elementary school and an ice cream store, which would attract children and their parents."
    },
    {
        question: "6. In the university examination, most of the candidates write in Hindi medium.",
        options: [
            "Some candidates of this examination write in Hindi.",
            "Mostly candidates with Hindi medium appear in this examination.",
            "In this examination no candidate writes answers in medium other than Hindi.",
            "All the candidates who appear in this examination write answers in Hindi."
        ],
        direction: "Direction (Q.No. 6): In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements.",
        answer: "Some candidates of this examination write in Hindi.",
        explanation: "If most candidates write in Hindi, it logically follows that at least some candidates write in Hindi."
    },
    {
        question: "7. Statements: All the schools in the area had to be kept closed for most part of the week. Many parents have withdrawn their children from the local schools.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.Nos. 7 - 8): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Statement I is the cause and statement II is its effect",
        explanation: "Parents withdrawing their children could be an effect of schools being closed for most of the week."
    },
    {
        question: "8. Statements: The prices of petrol and diesel in the domestic market have remained unchanged for the past few months. The crude oil prices in the international market have gone up substantially in the last few months.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.Nos. 7 - 8): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Both the statements I and II are independent causes",
        explanation: "The increase in international crude oil prices does not directly explain why domestic petrol and diesel prices have remained unchanged."
    },
    {
        question: "9. Statement: Please do not use lift while going down - an instruction on the top floor of a five-storey building.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Neither I nor II is implicit",
        explanation: "The statement does not imply that the lift cannot carry a load or that using the lift is not a right."
    },
    {
        question: "10. Statement: The government has decided to disinvest a large chunk of its equity in select public sector undertakings for better fiscal management.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The decision to disinvest implies that it is expected to help reduce fiscal deficits and that there will be demand for the shares."
    },
    {
        question: "11. Statement: Nobody can predict as to how long our country would take to contain the unfortunate and disastrous terrorist activities.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "Efforts to control terrorist activities are implied, but not that it is impossible to end them."
    },
    {
        question: "12. Statement: I cannot contact you on phone from Karshik.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The statement directly implies that phone facilities are not available at Karshik."
    },
    {
        question: "13. Statement: \"To buy a X - T.V, contact Y - the sole agent of X-T.V.\" - An advertisement.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "It can be assumed that people generally prefer to buy through a sole agent; otherwise, the advertisement would not highlight this point."
    },
    {
        question: "14. Statement: \"Blue tie would help us identify our staff from others.\" - A suggestion in a company.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The suggestion implies that the company needs to identify its staff. Fashion trends are not relevant to the suggestion."
    },
    {
        question: "15. Statement: \"A visit of school children to forest to widen their knowledge of natural resources has been arranged.\" - A notice in the school.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement implies that forests have natural resources and that children will learn from the visit."
    },
    {
        question: "16. Statement: Should all the colleges in India be allowed to devise their own curriculum and syllabus for the vocational courses promoting self-employment?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Argument I addresses the benefit of generating employment, and Argument II addresses the potential drawback of lack of uniformity in education."
    },
    {
        question: "17. Statements: All politicians are honest. All honest are fair.",
        options: [
            "None follows.",
            "Only I follows.",
            "Only I and II follow.",
            "Only I and III follow"
        ],
        direction: "Direction (Q.No. 17): In each of the following questions, two statements are given followed by three or four conclusions numbered I, II, III and IV. You have to take the given statements to be true even if they seem to be at variance from the commonly known facts and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only I and III follow",
        explanation: "From the given statements, it follows that some honest people are politicians and some fair people are politicians."
    },
    {
        question: "18. Statement: In the recently held All India Commerce Conference the session on 'Management of Service Sector in India' surprisingly attracted large number of participants and also received a very good media coverage in the leading newspapers.",
        options: [
            "None is implicit",
            "Only I is implicit",
            "All are implicit",
            "Only II and III are implicit",
            "Only either I or III is implicit"
        ],
        direction: "Direction (Q.No. 18): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I is implicit",
        explanation: "The statement implies that the large number of participants and good media coverage were unexpected."
    },
    {
        question: "19. Statement: To improve the employment situation in India, there is a need to recast the present educational system towards implementation of scientific discoveries in daily life.",
        options: [
            "None is implicit",
            "Only I and II are implicit",
            "Only III is implicit",
            "Only I and III are implicit",
            "None of these"
        ],
        direction: "Direction (Q.No. 19): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and II are implicit",
        explanation: "The statement implies that such education may help students earn a livelihood and bring meaning to their education."
    },
    {
        question: "20. Statements: Some blades are hammers. Some hammers are knives. Some knives are axes.",
        options: [
            "None follows",
            "Only I follows",
            "Only II follows",
            "Only III follows",
            "None of these"
        ],
        direction: "Direction (Q.No. 20): In each of the questions below are given three statements followed by three conclusions numbered I, II and III, You have to take the given statements to be true even if they seem to be at variance from the commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "None follows",
        explanation: "The given statements do not provide enough information to draw any of the given conclusions."
    }
];


const LogicalReasoning7 = () => {
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
  
  
  export default LogicalReasoning7;