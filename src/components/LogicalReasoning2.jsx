import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "The words in the bottom row are related in the same way as the words in the top row. For each item, find the word that completes the bottom row of words.\ncandle\tlamp\tfloodlight\nhut\tcottage\t?",
        options: ["tent", "city", "dwelling", "house"],
        direction: "Direction (Q.No. 1): The words in the bottom row are related in the same way as the words in the top row. For each item, find the word that completes the bottom row of words.",
        answer: "house",
        explanation: "Candle, lamp, and floodlight are increasing in brightness; hut, cottage, and house are increasing in size."
    },
    {
        question: "All the trees in the park are flowering trees.\nSome of the trees in the park are dogwoods.\nAll dogwoods in the park are flowering trees.\nIf the first two statements are true, the third statement is",
        options: ["true", "false", "uncertain"],
        direction: "Direction (Q.No. 2): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "true",
        explanation: "If all trees in the park are flowering and some of these trees are dogwoods, then all dogwoods in the park are flowering trees."
    },
    {
        question: "Spot is bigger than King and smaller than Sugar.\nRalph is smaller than Sugar and bigger than Spot.\nKing is bigger than Ralph.\nIf the first two statements are true, the third statement is",
        options: ["true", "false", "uncertain"],
        direction: "Direction (Q.No. 3): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "false",
        explanation: "If Spot is bigger than King and Ralph is bigger than Spot, King cannot be bigger than Ralph."
    },
    {
        question: "During the last six years, the number of practicing physicians has increased by about 20%. During the same time period, the number of healthcare managers has increased by more than 600%. These percentages mean that many doctors have lost the authority to make their own schedules, determine the fees that they charge, and decide on prescribed treatments.\nThis paragraph best supports the statement that doctors",
        options: [
            "resent the interference of healthcare managers.",
            "no longer have adequate training.",
            "care a great deal about their patients.",
            "are less independent than they used to be.",
            "are making a lot less money than they used to make."
        ],
        direction: "Direction (Q.No. 4): Choose the statement that is best supported by the information given in the question passage.",
        answer: "are less independent than they used to be.",
        explanation: "The increase in healthcare managers and the loss of doctors' authority suggest that doctors are less independent."
    },
    {
        question: "Some groups want to outlaw burning the flag. They say that people have fought and died for the flag and that citizens of the United States ought to respect that. But I say that respect cannot be legislated. Also, most citizens who have served in the military did not fight for the flag, they fought for what the flag represents. Among the things the flag represents is freedom of speech, which includes, I believe, the right for a citizen to express displeasure with the government by burning the flag in protest.\nWhich of the following, if true, would weaken the speaker's argument?",
        options: [
            "An action is not considered a part of freedom of speech.",
            "People who burn the flag usually commit other crimes as well.",
            "The flag was not recognized by the government until 1812.",
            "State flags are almost never burned.",
            "Most people are against flag burning."
        ],
        direction: "Direction (Q.No. 5): Read the below passage carefully and answer the questions.",
        answer: "An action is not considered a part of freedom of speech.",
        explanation: "If flag burning is not considered a part of freedom of speech, it weakens the argument that it is a protected form of expression."
    },
    {
        question: "The virtue of art does not allow the work to be interfered with or immediately ruled by anything other than itself. It insists that it alone shall touch the work in order to bring it into being. Art requires that nothing shall attain the work except through art itself.\nThis passage best supports the statement that:",
        options: [
            "art is governed by external rules and conditions.",
            "art is for the sake of art and life.",
            "art is for the sake of art alone.",
            "artist realises his dreams through his artistic creation.",
            "artist should use his art for the sake of society."
        ],
        direction: "Direction (Q.No. 6): Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it.",
        answer: "art is for the sake of art alone.",
        explanation: "The passage emphasizes that art should be influenced only by itself and not by external factors."
    },
    {
        question: "The consumption of harmful drugs by the people can be prevented not only by banning their sale in the market but also by instructing users about their dangerous effects which they must understand for their safety. Also the drug addicts may be provided with proper medical facilities for their rehabilitation. This will help in scaling down the use of drugs.\nThe passage best supports the statement that consumption of harmful drugs -",
        options: [
            "are on increase in the society.",
            "can always be reduced.",
            "are due to lack of medical facilities.",
            "can be eliminated with the help of banning their sale.",
            "may be channelized through proper system."
        ],
        direction: "Direction (Q.No. 7): Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it.",
        answer: "can always be reduced.",
        explanation: "The passage suggests that a combination of education, banning, and rehabilitation can help reduce drug consumption."
    },
    {
        question: "To pass the examination, one must work hard.",
        options: [
            "Examination is related with hard work.",
            "All those who work hard, pass.",
            "Examination causes some anxiety and those who work hard overcome it.",
            "Without hard work, one does not pass.",
            "Hard-working person is a satisfied person."
        ],
        direction: "Direction (Q.No. 8): In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements.",
        answer: "Without hard work, one does not pass.",
        explanation: "The statement implies that hard work is necessary to pass the examination."
    },
    {
        question: "Statements:\nThe government has recently fixed the fees for professional courses offered by the unaided institutions which are much lower than the fees charged last year.\nThe parents of the aspiring students launched a severe agitation last year protesting against the high fees charged by the unaided institutions.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 9): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship.",
        answer: "Statement II is the cause and statement I is its effect",
        explanation: "The agitation by parents caused the government to lower the fees."
    },
    {
        question: "Statement: The next meeting of the Governing Board of the Institute will be held after one year.\nAssumptions:\nThe Institute will remain in function after one year.\nThe Governing Board will be dissolved after one year.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption I is implicit",
        explanation: "The assumption that the institute will function after one year is implicit in planning a meeting for that time."
    },
    {
        question: "Statement: The cinema halls are incurring heavy losses these days as people prefer to watch movies in home on TV than to visit cinema halls.\nCourses of Action:\nThe cinema halls should be demolished and residential multi-storey buildings should be constructed there.\nThe cinema halls should be converted into shopping malls.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Neither I nor II follows",
        explanation: "Demolishing or converting cinema halls may not be the best solutions without further analysis."
    },
    {
        question: "Statement: The Meteorology Department has forecast that a severe cyclonic storm would hit coastal Andhra Pradesh and Orissa in the next forty-eight hours.\nCourses of Action:\nThe local administration should advise the fishermen not to go to dangerous area in the sea.\nThe local administration should alert the people of coastal areas of these two states and they should be prepared to shift to safer places.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Both advising fishermen and alerting coastal residents are necessary actions."
    },
    {
        question: "Statements: Some books are tables. Some tables are mirrors.\nConclusions:\nSome mirrors are books.\nNo book is mirror.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 13): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Neither I nor II follows",
        explanation: "There is no direct relationship between mirrors and books."
    },
    {
        question: "Statements: All fishes are grey in colour. Some fishes are heavy.\nConclusions:\nAll heavy fishes are grey in colour.\nAll light fishes are not grey in colour.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 14): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Only conclusion I follows",
        explanation: "All heavy fishes are grey, but not all light fishes are necessarily not grey."
    },
    {
        question: "Statement: Should Indian scientists working abroad be called back to India?\nArguments:\nYes. They must serve the motherland first and forget about discoveries, honours, facilities and all.\nNo. We have enough talent; let them stay where they want.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 15): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Neither I nor II is strong",
        explanation: "Both arguments have valid points but neither is definitively strong."
    },
    {
        question: "Statement: Should the vehicles older than 15 years be rejected in metros in India?\nArguments:\nYes. This is a significant step to lower down the pollution level in metros.\nNo. It will be very difficult for vehicle owners to shift to other parts in country because they will not get suitable job for their very existence.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Only argument I is strong",
        explanation: "Argument I addresses a significant environmental issue."
    },
    {
        question: "Statement: Is pen mightier than a sword?\nArguments:\nYes. Writers influence the thinking of the people.\nNo. With the help of physical force one can conquer all.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 17): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Only argument I is strong",
        explanation: "Influencing thoughts is a powerful tool, making argument I strong."
    },
    {
        question: "Statement: There are more than 200 villages in the hill area of Uttar Pradesh which are severely damaged due to cyclone and it causes an extra burden of Rs 200 crore on State Government for relief and rehabilitation work.\nCourses of Action:\nPeople of hill area should be shifted to other safer places.\nState Government should ask more financial support from Central Government.\nGovernment should levy relief tax to the corporate sector to ease the additional burden.",
        options: [
            "None follows",
            "Only I and II follow",
            "Only II and III follow",
            "Only I and III follow",
            "None of these"
        ],
        direction: "Direction (Q.No. 18): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only I and II follow",
        explanation: "Shifting people to safer places and asking for financial support are necessary actions."
    },
    {
        question: "Statement: Should seniority be the only criterion for the promotion?\nArguments:\nNo. It would be an injustice to those juniors who are more deserving and suitable for higher positions than their senior counterparts.\nYes. Otherwise senior employees do feel humiliated.\nYes. Senior employees are more experienced and must be rewarded for the same.",
        options: [
            "None is strong",
            "Only I is strong",
            "Only I and III are strong",
            "Only I and II are strong",
            "All are strong"
        ],
        direction: "Direction (Q.No. 19): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only I is strong",
        explanation: "Argument I addresses the fairness and merit-based promotion."
    },
    {
        question: "Statement: Should workers/employees be allowed to participate in the management of factories in India?\nArguments:\nYes. It is the present management theory.\nNo. Many workers are illiterate and so their contributions will not be of any value.\nYes. Employees-owned companies generally have higher productivity.\nNo. Employee-union ownership drives up salaries and wages.",
        options: [
            "Only I and II are strong",
            "None is strong",
            "Only II and III are strong",
            "All are strong",
            "None of these"
        ],
        direction: "Direction (Q.No. 20): In each question below is given a statement followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only II and III are strong",
        explanation: "Argument II and III address the literacy issue and productivity benefits respectively."
    }
];


const LogicalReasoning2 = () => {
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
  
  
  export default LogicalReasoning2;