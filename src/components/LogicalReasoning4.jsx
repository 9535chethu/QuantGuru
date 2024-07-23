import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. JAK, KBL, LCM, MDN, _____",
        options: [
            "OEP",
            "NEO",
            "MEN",
            "PFQ"
        ],
        direction: "Direction (Q.No. 1): In these series, you will be looking at both the letter pattern and the number pattern. Fill the blank in the middle of the series or end of the series.",
        answer: "NFO",
        explanation: "The pattern involves incrementing each letter by one: J->K->L->M->N, A->B->C->D->E, K->L->M->N->O."
    },
    {
        question: "2. SCD, TEF, UGH, ____, WKL",
        options: [
            "CMN",
            "UJI",
            "VIJ",
            "IJT"
        ],
        direction: "Direction (Q.No. 2): In these series, you will be looking at both the letter pattern and the number pattern. Fill the blank in the middle of the series or end of the series.",
        answer: "VIJ",
        explanation: "The pattern involves incrementing each letter by one: S->T->U->V, C->E->G->I, D->F->H->J."
    },
    {
        question: "3. purchase",
        options: [
            "trade",
            "money",
            "bank",
            "acquisition"
        ],
        direction: "Direction (Q.No. 3): Find the word that names a necessary part of the underlined word.",
        answer: "money",
        explanation: "Money is necessary to make a purchase."
    },
    {
        question: "4. snow, mountain, ski\nwarmth, lake, ?",
        options: [
            "sand",
            "swim",
            "sunburn",
            "vacation"
        ],
        direction: "Direction (Q.Nos. 4 - 5): The words in the bottom row are related in the same way as the words in the top row. For each item, find the word that completes the bottom row of words.",
        answer: "swim",
        explanation: "You ski on snow on a mountain. You swim in the warmth of a lake."
    },
    {
        question: "5. apples, fruit, supermarket\nnovel, book, ?",
        options: [
            "bookstore",
            "magazine",
            "vegetable",
            "shopping"
        ],
        direction: "Direction (Q.Nos. 4 - 5): The words in the bottom row are related in the same way as the words in the top row. For each item, find the word that completes the bottom row of words.",
        answer: "bookstore",
        explanation: "You buy fruit like apples at a supermarket. You buy books like novels at a bookstore."
    },
    {
        question: "6. PULSATE : THROB",
        options: [
            "walk : run",
            "tired : sleep",
            "examine : scrutinize",
            "ballet : dancer",
            "find : lose"
        ],
        direction: "Direction (Q.No. 6): Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words.",
        answer: "examine : scrutinize",
        explanation: "Pulsate and throb are synonyms, as are examine and scrutinize."
    },
    {
        question: "7. Here are some words translated from an artificial language.\ndionot means oak tree\nblyonot means oak leaf\nblycrin means maple leaf\nWhich word could mean 'maple syrup'?",
        options: [
            "blymuth",
            "hupponot",
            "patricrin",
            "crinweel"
        ],
        direction: "Direction (Q.No. 7): First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language.",
        answer: "crinweel",
        explanation: "The word 'crin' refers to maple and the word 'weel' could refer to syrup."
    },
    {
        question: "8. Though the waste of time or the expenditure on fashions is very large, yet fashions have come to stay. They will not go, come what may. However, what is now required is that strong efforts should be made to displace the excessive craze for fashion from the minds of these youngsters.\nThe passage best supports the statement that:",
        options: [
            "fashion is the need of the day.",
            "the excessive craze for fashion is detrimental to one's personality.",
            "the hoard for fashion should be done away with so as not to let down the constructive development.",
            "work and other activities should be valued more than the outward appearance."
        ],
        direction: "Direction (Q.No. 8): Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it.",
        answer: "the excessive craze for fashion is detrimental to one's personality.",
        explanation: "The passage discusses the negative impact of an excessive craze for fashion."
    },
    {
        question: "9. Statements: In a recent survey report, it has been stated that those who undertake physical exercise for at least half an hour a day are less prone to have any heart ailments.\nConclusions:\nModerate level of physical exercise is necessary for leading a healthy life.\nAll people who do desk-bound jobs definitely suffer from heart ailments.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Only conclusion I follows",
        explanation: "Moderate exercise is implied to be necessary, but it does not imply all desk-bound workers have heart ailments."
    },
    {
        question: "10. Statements: People who speak too much against dowry are those who had taken it themselves.\nConclusions:\nIt is easier said than done.\nPeople have double standards.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 9 - 10): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Only conclusion II follows",
        explanation: "The statement implies people have double standards."
    },
    {
        question: "11. Statements: The best way to escape from a problem is to solve it.\nConclusions:\nYour life will be dull if you don't face a problem.\nTo escape from problems, you should always have some solutions with you.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Only conclusion II follows",
        explanation: "The statement implies having solutions is necessary to escape problems, but does not imply life will be dull without problems."
    },
    {
        question: "12. Statement: Never before such a lucid book was available on the topic.\nAssumptions:\nSome other books were available on this topic.\nYou can write lucid books on very few topics.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The statement implies other books on the topic were available."
    },
    {
        question: "13. Statement: Should cottage industries be encouraged in rural areas?\nArguments:\nYes. Rural people are creative.\nYes. This would help to solve the problem of unemployment to some extent.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 13 - 14): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Both arguments provide strong reasons for encouraging cottage industries."
    },
    {
        question: "14. Statement: Should so much money be spent on advertisements?\nArguments:\nYes. It is an essential concomitant in a capitalist economy.\nNo. It leads to wastage of resources.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 13 - 14): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Both arguments present valid points regarding the expenditure on advertisements."
    },
    {
        question: "15. Statement: The meteorological department has reported that a severe storm is likely to hit the city during the next forty-eight hours.\nCourses of Action:\nThe administration should advise all the business and educational establishments to close down for two days.\nThe administration should not make the information public as it could create panic among the residents of the city.\nThe administration should activate its disaster management program to tackle any possible emergency situation.",
        options: [
            "Only I and II follow",
            "Only III follows",
            "Only II and III follow",
            "Only I and III follow",
            "All follow"
        ],
        direction: "Direction (Q.No. 15): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only I and III follow",
        explanation: "Closing establishments and activating disaster management are logical actions; withholding information is not."
    },
    {
        question: "16. Statement: Should government established higher level Institutes of Technology (IIT's) be privatized?\nArguments:\nYes. Privatization will make these institutes financially healthy, competitive and quality conscious.\nYes. Privatization is the key of the new era - can we survive without it?\nNo. Standard of education of these institutes will fall.",
        options: [
            "None is strong",
            "All are strong",
            "Only I is strong",
            "Only I and III are strong",
            "Only II and III are strong"
        ],
        direction: "Direction (Q.Nos. 16 - 17): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only I and III are strong",
        explanation: "Argument I provides a strong benefit of privatization; argument III provides a strong drawback."
    },
    {
        question: "17. Statement: Should trade unions be banned completely?\nArguments:\nYes. Workers can concentrate on production.\nNo. This is the only way through which employees can put their demands before the management.\nYes. Employees get their illegal demands fulfilled through these unions.\nNo. Trade unions are not banned in other economically advanced countries.",
        options: [
            "Only I is strong",
            "Only II is strong",
            "Only I and II are strong",
            "Only I, II and III are strong",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 16 - 17): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only I, II and III are strong",
        explanation: "Arguments I, II, and III present strong reasons for and against banning trade unions."
    },
    {
        question: "18. Statement: During pre-harvest kharif season, the government has decided to release vast quantity of food grains from FCI.\nAssumptions:\nThere may be a shortage of food grains in the market during this season.\nThe kharif crop may be able to replenish the stock of FCI.\nThere may be a demand from the farmers to procure kharif crop immediately after harvest.",
        options: [
            "All are implicit",
            "Only II and III are implicit",
            "None is implicit",
            "Only I and II are implicit",
            "None of these"
        ],
        direction: "Direction (Q.No. 18): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "All are implicit",
        explanation: "All assumptions are implicit as they provide valid reasons for the government's decision."
    },
    {
        question: "19. Statement: Bill Clinton is the second democrat to be re-elected as President of America, the other being the legendary Roosevelt.\nAssumptions:\nClinton has the same qualities that Roosevelt had.\nThe majority of people in America have faith in Clinton.\nThe election campaign of Clinton's rivals was not impressive.",
        options: [
            "Only I is implicit",
            "Only II is implicit",
            "Only III is implicit",
            "Either I or III is implicit",
            "Either II or III is implicit"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only II is implicit",
        explanation: "The re-election implies the majority of people have faith in Clinton."
    },
    {
        question: "20. Statement: 'Television X - the neighbour's envy, the owner's pride' - A T.V. advertisement.\nAssumptions:\nCatchy slogans appeal to people.\nPeople are envious of their neighbours superior possessions.\nPeople want to be envied by their neighbours.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit",
            "All are implicit",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "All are implicit",
        explanation: "All assumptions are implicit as they align with the implications of the advertisement."
    }
];


const LogicalReasoning4 = () => {
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
  
  
  export default LogicalReasoning4;