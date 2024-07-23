import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "1. Which word does NOT belong with the others?",
        options: [
            "book",
            "index",
            "glossary",
            "chapter"
        ],
        direction: "Direction (Q.Nos. 1 - 2): Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others.",
        answer: "book",
        explanation: "Index, glossary, and chapter are all parts of a book, but a book is not a part of itself."
    },
    {
        question: "2. Which word does NOT belong with the others?",
        options: [
            "rye",
            "sourdough",
            "pumpernickel",
            "loaf"
        ],
        direction: "Direction (Q.Nos. 1 - 2): Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others.",
        answer: "loaf",
        explanation: "Rye, sourdough, and pumpernickel are types of bread, while loaf is a form of bread."
    },
    {
        question: "3. Which word does NOT belong with the others?",
        options: [
            "biology",
            "chemistry",
            "theology",
            "zoology"
        ],
        direction: "Direction (Q.No. 3): Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification.",
        answer: "theology",
        explanation: "Biology, chemistry, and zoology are sciences, while theology is the study of religion."
    },
    {
        question: "4. Find the word that names a necessary part of the underlined word. (antique)",
        options: [
            "rarity",
            "artifact",
            "aged",
            "prehistoric"
        ],
        direction: "Direction (Q.No. 4): Find the word that names a necessary part of the underlined word.",
        answer: "aged",
        explanation: "An antique must be aged; it must be old. The other options are characteristics or types of antiques but not necessary parts."
    },
    {
        question: "5. Careful is to cautious as boastful is to",
        options: [
            "arrogant",
            "humble",
            "joyful",
            "suspicious"
        ],
        direction: "Direction (Q.Nos. 5 - 6): A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the first two words. Then, try to use the same sentence to find out which of the answer choices completes the same relationship with the third word.",
        answer: "arrogant",
        explanation: "Careful and cautious are synonyms, as are boastful and arrogant."
    },
    {
        question: "6. Yard is to inch as quart is to",
        options: [
            "gallon",
            "ounce",
            "milk",
            "liquid"
        ],
        direction: "Direction (Q.Nos. 5 - 6): A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the first two words. Then, try to use the same sentence to find out which of the answer choices completes the same relationship with the third word.",
        answer: "ounce",
        explanation: "A yard is a larger unit of measure that contains inches, just as a quart is a larger unit of measure that contains ounces."
    },
    {
        question: "7. Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 7): Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        answer: "2",
        explanation: "This question requires a visual pattern that cannot be conveyed in text form."
    },
    {
        question: "8. If the first three statements are facts, which of the following statements must also be a fact? (Mary said, \"Ann and I both have cats.\" Ann said, \"I don't have a cat.\" Mary always tells the truth, but Ann sometimes lies.)",
        options: [
            "I only",
            "II only",
            "I and II only",
            "All the statements are facts."
        ],
        direction: "Direction (Q.No. 8): The logic problems in this set present you with three true statements: Fact 1, Fact 2, and Fact 3. Then, you are given three more statements (labeled I, II, and III), and you must determine which of these, if any, is also a fact. One or two of the statements could be true; all of the statements could be true; or none of the statements could be true. Choose your answer based solely on the information given in the first three facts.",
        answer: "II only",
        explanation: "Since Mary always tells the truth, Ann must be lying when she says she doesn't have a cat. Therefore, Mary has a cat, and Ann is lying, but it is not necessarily true that Ann has a cat."
    },
    {
        question: "9. Four people witnessed a mugging. Each gave a different description of the mugger. Which description is probably right?",
        options: [
            "He was average height, thin, and middle-aged.",
            "He was tall, thin, and middle-aged.",
            "He was tall, thin, and young.",
            "He was tall, of average weight, and middle-aged."
        ],
        direction: "Direction (Q.No. 9): Read the question carefully and choose the correct answer.",
        answer: "He was tall, thin, and middle-aged.",
        explanation: "Two people agree that the mugger was tall and thin. Of these, the one that matches the description given by a third person (middle-aged) is the most likely to be correct."
    },
    {
        question: "10. What task does Terry do on Wednesday? (Five roommates Randy, Sally, Terry, Uma, and Vernon each do one housekeeping task mopping, sweeping, laundry, vacuuming, or dusting one day a week, Monday through Friday. * Vernon does not vacuum and does not do his task on Tuesday. * Sally does the dusting, and does not do it on Monday or Friday. * The mopping is done on Thursday. * Terry does his task, which is not vacuuming, on Wednesday. * The laundry is done on Friday, and not by Uma. * Randy does his task on Monday.)",
        options: [
            "vacuuming",
            "dusting",
            "mopping",
            "sweeping",
            "laundry"
        ],
        direction: "Direction (Q.No. 10): Five roommates Randy, Sally, Terry, Uma, and Vernon each do one housekeeping task mopping, sweeping, laundry, vacuuming, or dusting one day a week, Monday through Friday.",
        answer: "sweeping",
        explanation: "Since Terry does not vacuum and does his task on Wednesday, and mopping is done on Thursday, Terry must be doing the sweeping on Wednesday."
    },
    {
        question: "11. Television convinces viewers that the likelihood of their becoming the victim of a violent crime is extremely high; at the same time by its very nature, TV persuades viewers to passively accept whatever happens to them.",
        options: [
            "TV viewing promotes criminal behaviour.",
            "TV viewers are most likely to be victimized than others.",
            "People should not watch TV.",
            "TV promotes a feeling of helpless vulnerability in viewers."
        ],
        direction: "Direction (Q.No. 11): In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements.",
        answer: "TV promotes a feeling of helpless vulnerability in viewers.",
        explanation: "The statement that TV persuades viewers to passively accept whatever happens to them suggests that TV promotes a feeling of helpless vulnerability."
    },
    {
        question: "12. Statements: Large number of people living in the low-lying areas has been evacuated during the last few days to safer places. The Government has rushed in relief supplies to the people living in the affected areas.",
        options: [
            "(A) Statement I is the cause and statement II is its effect",
            "(B) Statement II is the cause and statement I is its effect",
            "(C) Both the statements I and II are independent causes",
            "(D) Both the statements I and II are effects of independent causes",
            "(E) Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 12): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Statement I is the cause and statement II is its effect",
        explanation: "The evacuation of people is likely the cause of the government rushing in relief supplies."
    },
    {
        question: "13. Statement: Cases of food poisoning due to consumption of liquor are increasing in rural areas.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement indicates an increase in food poisoning due to liquor, which suggests there are many unauthorized spurious liquor shops in rural areas."
    },
    {
        question: "14. Statement: \"Computer education should start at schools itself.\"",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 14): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Neither I nor II is implicit",
        explanation: "The statement about starting computer education at schools does not necessarily imply that learning computers is easy or that it fetches jobs easily."
    },
    {
        question: "15. Statement: An advertisement: If you want to follow the footprints of an ideal leader, wear 'X' brand of shoes.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 15): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Neither I nor II is implicit",
        explanation: "The advertisement suggests that wearing 'X' brand of shoes will help follow the footprints of an ideal leader, but it does not imply that most people want to become ideal leaders or that one can't become an ideal leader without 'X' brand of shoes."
    },
    {
        question: "16. Statement: Is paying ransom or agreeing to the conditions of kidnappers of political figures, a proper course of action?",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Both arguments are strong: Argument I highlights the necessity of saving the victims, and Argument II emphasizes the danger of encouraging kidnappers."
    },
    {
        question: "17. Statement: The residents of the locality wrote a letter to the Corporation requesting to restore normalcy in the supply of drinking water immediately as the supply at present is just not adequate.",
        options: [
            "Only I and III are implicit",
            "Only II is implicit",
            "Only II and III are implicit",
            "Only III is implicit",
            "None of these"
        ],
        direction: "Direction (Q.No. 17): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only II and III are implicit",
        explanation: "Assumptions II and III are implicit as the letter assumes the municipality has enough water and the water supply was adequate in the past."
    },
    {
        question: "18. Statement: The employees association has appealed to the Managers of Company Z to introduce written examinations for clerical cadre recruitment to prevent selection of incompetent persons.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit",
            "Only III is implicit",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 18 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and II are implicit",
        explanation: "Assumptions I and II are implicit as the appeal assumes that currently there are no written exams and that such exams can help identify competent persons."
    },
    {
        question: "19. Statement: In order to reduce the gap between income and expenditure, the company has decided to increase the price of its product from next month.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only III is implicit",
            "All are implicit",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 18 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and II are implicit",
        explanation: "Assumptions I and II are implicit as the decision assumes the price increase will help reduce the gap, and the expenditure will remain constant."
    },
    {
        question: "20. Statement: Quality of life of a person is not dependent only on his wealth.",
        options: [
            "Only I is implicit",
            "Only I and II are implicit",
            "Only II is implicit",
            "Only II and III are implicit",
            "Only I and III are implicit"
        ],
        direction: "Direction (Q.Nos. 18 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only II is implicit",
        explanation: "The statement implies that there are factors other than wealth that contribute to the quality of life."
    }
];



const LogicalReasoning8 = () => {
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
  
  
  export default LogicalReasoning8;