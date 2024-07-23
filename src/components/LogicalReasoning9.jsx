import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Which word does NOT belong with the others?",
        options: [
            "tulip",
            "rose",
            "bud",
            "daisy"
        ],
        direction: "Direction (Q.No. 1): Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others.",
        answer: "bud",
        explanation: "Tulip, rose, and daisy are types of flowers, while a bud is a part of a flower."
    },
    {
        question: "2. book",
        options: [
            "fiction",
            "pages",
            "pictures",
            "learning"
        ],
        direction: "Direction (Q.No. 2): Each question has an underlined word followed by four answer choices. You will choose the word that is a necessary part of the underlined word.",
        answer: "pages",
        explanation: "A book must have pages. Fiction, pictures, and learning are not necessary components of a book."
    },
    {
        question: "3. Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 3): Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        answer: "2",
        explanation: "This question requires a visual pattern that cannot be conveyed in text form."
    },
    {
        question: "4. TAILOR : SUIT",
        options: [
            "scheme : agent",
            "edit : manuscript",
            "revise : writer",
            "mention : opinion",
            "implode : building"
        ],
        direction: "Direction (Q.No. 4): Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words.",
        answer: "edit : manuscript",
        explanation: "A tailor creates a suit, just as an editor works on a manuscript."
    },
    {
        question: "5. If the legislature decides to fund the agricultural subsidy program, national radio, and the small business loan program, the only other single program that can be funded is",
        options: [
            "hurricane preparedness.",
            "harbor improvements.",
            "school music program.",
            "senate office building remodeling.",
            "international airport."
        ],
        direction: "Direction (Q.No. 5): Read the below passage carefully and answer the questions.",
        answer: "school music program.",
        explanation: "The total funding for the agricultural subsidy program ($2M), national radio ($0.5M), and the small business loan program ($3M) is $5.5M, leaving $1.5M, which is enough to fund only the school music program ($0.5M)."
    },
    {
        question: "6. There are no effective boundaries when it comes to pollutants. Studies have shown that toxic insecticides that have been banned in many countries are riding the wind from countries where they remain legal. Compounds such as DDT and toxaphene have been found in remote places like the Yukon and other Arctic regions.",
        options: [
            "toxic insecticides such as DDT have not been banned throughout the world.",
            "more pollutants find their way into polar climates than they do into warmer areas.",
            "studies have proven that many countries have ignored their own antipollution laws.",
            "DDT and toxaphene are the two most toxic insecticides in the world.",
            "even a worldwide ban on toxic insecticides would not stop the spread of DDT pollution."
        ],
        direction: "Direction (Q.Nos. 6 - 7): Choose the statement that is best supported by the information given in the question passage.",
        answer: "toxic insecticides such as DDT have not been banned throughout the world.",
        explanation: "The passage indicates that DDT and toxaphene are still legal in some countries, which implies they have not been banned worldwide."
    },
    {
        question: "7. Obesity is a serious problem in this country. Research suggests that obesity can lead to a number of health problems including diabetes, asthma, and heart disease. Recent research has even indicated that there may be a relationship between obesity and some types of cancer. Major public health campaigns that increase awareness and propose simple lifestyle changes that will, with diligence and desire, eliminate or least mitigate the incidence of obesity are a crucial first step in battling this critical problem.",
        options: [
            "public health campaigns that raise consciousness and propose lifestyle changes are a productive way to fight obesity.",
            "obesity is the leading cause of diabetes in our country.",
            "people in our country watch too much television and do not exercise enough.",
            "a decline in obesity would radically decrease the incidence of asthma.",
            "fast-food restaurants and unhealthy school lunches contribute greatly to obesity."
        ],
        direction: "Direction (Q.Nos. 6 - 7): Choose the statement that is best supported by the information given in the question passage.",
        answer: "public health campaigns that raise consciousness and propose lifestyle changes are a productive way to fight obesity.",
        explanation: "The passage suggests that public health campaigns proposing lifestyle changes are an important first step in combating obesity."
    },
    {
        question: "8. Exports and imports, a swelling favourable balance of trade, investments and bank-balances, are not an index or a balance sheet of national prosperity. Till the beginning of the Second World War, English exports were noticeably greater than what they are today. And yet England has greater national prosperity today than it ever had. Because the income of average Englishmen, working as field and factory labourers, clerks, policemen, petty shopkeepers and shop assistants, domestic workers and other low-paid workers, has gone up.",
        options: [
            "a country's economic standard can be best adjudged by per capital income.",
            "a country's balance of trade is the main criteria of determining its economic prosperity.",
            "a nation's economy strengthens with the increase in exports.",
            "English trade has continually increased since the Second World War."
        ],
        direction: "Direction (Q.No. 8): Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it.",
        answer: "a country's economic standard can be best adjudged by per capital income.",
        explanation: "The passage suggests that national prosperity is better measured by the income of average citizens rather than by trade balance."
    },
    {
        question: "9. Every library has books.",
        options: [
            "Books are only in library.",
            "Libraries are meant for books only.",
            "No library is without books.",
            "Some libraries do not have readers."
        ],
        direction: "Direction (Q.No. 9): In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements.",
        answer: "No library is without books.",
        explanation: "If every library has books, it means that no library is without books."
    },
    {
        question: "10. Statements: Video libraries are flourishing very much these days.",
        options: [
            "(A) If only conclusion I follows",
            "(B) If only conclusion II follows",
            "(C) If either I or II follows",
            "(D) If neither I nor II follows",
            "(E) If both I and II follow."
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "(E) If both I and II follow.",
        explanation: "Both conclusions logically follow from the statement that video libraries are flourishing."
    },
    {
        question: "11. Statement: If you have any problems, bring them to me.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Neither I nor II is implicit",
        explanation: "The statement does not necessarily assume that the person has problems or that the speaker can solve any problem."
    },
    {
        question: "12. Statement: Vitamin E tablets improve circulation, keep your complexion in a glowing condition.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement assumes that people like a glowing complexion and that circulation affects complexion."
    },
    {
        question: "13. Statement: Read this book to get detailed and most comprehensive information on this issue.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 11 - 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The statement assumes that the person who wants the information can read."
    },
    {
        question: "14. Statement: I can take you quickly from Kanpur to Lucknow by my cab but then you must pay me double the normal charges,",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The statement assumes that normally it takes more time to reach Lucknow from Kanpur."
    },
    {
        question: "15. Statement: The entire north India, including Delhi and the neighbouring states remained 'powerless' the whole day of 19th December as the northern grid supplying electricity to the seven states collapsed yet again.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The use of 'yet again' implies that the northern grid had collapsed earlier."
    },
    {
        question: "16. Statement: Should India have no military force at all?",
        options: [
            "(A) If only argument I is strong",
            "(B) If only argument II is strong",
            "(C) If either I or II is strong",
            "(D) If neither I nor II is strong",
            "(E) If both I and II are strong"
        ],
        direction: "Direction (Q.No. 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "(A) If only argument I is strong",
        explanation: "Argument I is strong as it highlights the global context of military necessity."
    },
    {
        question: "17. Statements: All terrorists are guilty. All terrorists are criminals.",
        options: [
            "None follows.",
            "Only I follows.",
            "Only I and III follow.",
            "Only II follows.",
            "Only II and IV follow."
        ],
        direction: "Direction (Q.No. 17): In each of the following questions, two statements are given followed by three or four conclusions numbered I, II, III and IV. You have to take the given statements to be true even if they seem to be at variance from the commonly known facts and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only II follows.",
        explanation: "If all terrorists are guilty and all terrorists are criminals, then some guilty persons are criminals."
    },
    {
        question: "18. Statement: Every year thousands of eligible students do not get admission in colleges both in urban and rural areas after passing their school leaving certificate examination.",
        options: [
            "Only I follows",
            "Only II and III follow",
            "Only I and III follow",
            "All follow",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 18 - 19): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only I and III follow",
        explanation: "Setting up more colleges and offering vocational courses in schools are logical actions to address the issue of students not getting college admissions."
    },
    {
        question: "19. Statement: Residents from Model Colony coming under North Ward of City X have complained to the Ward Officer that for last three days the tap water in the ward is contaminated and no action is being initiated by municipal staff.",
        options: [
            "Only I and II follow",
            "Only II and III follow",
            "Only I and III follow",
            "Only either I or III, and II follow",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 18 - 19): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only II and III follow",
        explanation: "Initiating actions to assess the water condition and checking water installations are logical steps to address the issue."
    },
    {
        question: "20. Statement: Should the number of holidays of government employees be reduced?",
        options: [
            "Only I and III are strong",
            "Only III is strong",
            "Only I, III and IV are strong",
            "None is strong",
            "None of these"
        ],
        direction: "Direction (Q.No. 20): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only I, III and IV are strong",
        explanation: "Arguments I, III, and IV provide strong reasons for and against reducing holidays of government employees."
    }
];


const LogicalReasoning9 = () => {
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
  
  
  export default LogicalReasoning9;