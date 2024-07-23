import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 1): Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        answer: "3"
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
        answer: "2"
    },
    {
        question: "3. diploma",
        options: [
            "principal",
            "curriculum",
            "employment",
            "graduation"
        ],
        direction: "Direction (Q.No. 3): Each question has an underlined word followed by four answer choices. You will choose the word that is a necessary part of the underlined word.",
        answer: "graduation",
        explanation: "Graduation is a necessary part of obtaining a diploma."
    },
    {
        question: "4. DIVISION : SECTION",
        options: [
            "layer : tier",
            "tether : bundle",
            "chapter : verse",
            "riser : stage",
            "dais : speaker"
        ],
        direction: "Direction (Q.No. 4): Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words.",
        answer: "chapter : verse",
        explanation: "A section is part of a division, just as a verse is part of a chapter."
    },
    {
        question: "5. Here are some words translated from an artificial language.\nhapllesh means cloudburst\nsrenchoch means pinball\nresbosrench means ninepin\nWhich word could mean 'cloud nine'?",
        options: [
            "leshsrench",
            "ochhapl",
            "haploch",
            "haplresbo"
        ],
        direction: "Direction (Q.No. 5): First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language.",
        answer: "haplresbo",
        explanation: "hapllesh (cloud) + resbosrench (nine) = haplresbo (cloud nine)."
    },
    {
        question: "6. Here are some words translated from an artificial language.\nmalgauper means peach cobbler\nmalgaport means peach juice\nmoggagrop means apple jelly\nWhich word could mean 'apple juice'?",
        options: [
            "moggaport",
            "malgaauper",
            "gropport",
            "moggagrop"
        ],
        direction: "Direction (Q.No. 6): Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices.",
        answer: "moggaport",
        explanation: "moggagrop (apple) + malgaport (juice) = moggaport (apple juice)."
    },
    {
        question: "7. Joe is younger than Kathy.\nMark was born after Joe.\nKathy is older than Mark.\nIf the first two statements are true, the third statement is",
        options: [
            "true",
            "false",
            "uncertain"
        ],
        direction: "Direction (Q.No. 7): Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain.",
        answer: "true",
        explanation: "If Joe is younger than Kathy and Mark was born after Joe, then Kathy is older than Mark."
    },
    {
        question: "8. Yoga has become a very popular type of exercise, but it may not be for everyone. Before you sign yourself up for a yoga class, you need to examine what it is you want from your fitness routine. If you're looking for a high-energy, fast-paced aerobic workout, a yoga class might not be your best choice.\nThis paragraph best supports the statement that",
        options: [
            "yoga is more popular than high-impact aerobics.",
            "before embarking on a new exercise regimen, you should think about your needs and desires.",
            "yoga is changing the world of fitness in major ways",
            "yoga benefits your body and mind",
            "most people think that yoga isn't a rigorous form of exercise."
        ],
        direction: "Direction (Q.No. 8): Choose the statement that is best supported by the information given in the question passage.",
        answer: "before embarking on a new exercise regimen, you should think about your needs and desires.",
        explanation: "The paragraph advises to consider personal fitness needs before choosing yoga."
    },
    {
        question: "9. Statements: Vegetable prices are soaring in the market.\nConclusions:\n\nVegetables are becoming a rare commodity.\nPeople cannot eat vegetables.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 9): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Neither I nor II follows",
        explanation: "Soaring prices do not necessarily mean rarity or inability to eat vegetables."
    },
    {
        question: "10. Statement: The 'M' Cooperative Housing Society has put up a notice at its gate those sales persons are not allowed inside the society.\nAssumptions:\n\nAll the sales persons will stay away from the 'M' Cooperative Housing Society.\nThe security guard posted at the gate may be able to stop the sales persons entering the society.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The notice implies that the guard will enforce the rule, but not that all salespersons will stay away."
    },
    {
        question: "11. Statement: Highly brilliant and industrious students do not always excel in the written examination.\nAssumptions:\n\nThe written examination is good mainly for mediocre students.\nThe brilliant and industrious students cannot always write good answers in the exam.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement implies that brilliant students may not excel in writing exams, but not that exams are for mediocre students."
    },
    {
        question: "12. Statement: \"Two months ago, it was announced that Central Government pensioners would get dearness relief with immediate effect but till date, banks have not credited the arrears.\" - A statement from a Pensioners' Forum.\nAssumptions:\n\nMost of the banks normally take care of the pensioners.\nTwo months time is sufficient for the government machinery to move and give effect to pensioners.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 12 - 14): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement implies that two months should be enough time, but not that banks normally take care of pensioners."
    },
    {
        question: "13. Statement: Money is the root cause of all the problems in a family.\nAssumptions:\n\nEvery problem is caused by something.\nThere are always some problems in a family.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 12 - 14): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement assumes both that problems have causes and that families have problems."
    },
    {
        question: "14. Statement: To investigate the murder of the lone resident of a flat, the police interrogated the domestic servant, the watchman of the multi-storeyed buildings and the liftman.\nAssumptions:\n\nThe domestic servant, watchman and the liftman can give a clue about the suspected murder.\nGenerally in such cases the persons known to the resident are directly or indirectly involved in the murder.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 12 - 14): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The police would interrogate those who might have clues and generally assume involvement of known persons."
    },
    {
        question: "15. Statement: Most of the development plans develop in papers only.\nCourses of Action:\n\nThe in-charges should be instructed to supervise the field-work regularly.\nThe supply of paper to such departments should be cut short.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 15 - 18): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Only I follows",
        explanation: "Supervising field work ensures implementation, while cutting paper supply is not practical."
    },
    {
        question: "16. Statement: A very large number of students have failed in the final high school examination due to faulty questions in one of the subjects.\nCourses of Action:\n\nAll the students who have failed in the subject should be allowed to take supplementary examination.\nAll those who are responsible for the error should be suspended and an enquiry should be initiated to find out the facts.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 15 - 18): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Both actions address the issue: allowing retakes and investigating errors."
    },
    {
        question: "17. Statement: Four districts in State A have been experiencing severe drought for the last three years resulting into exodus of people from these districts.\nCourses of Action:\n\nThe government should immediately start food for work programme in the district to put a halt to the exodus.\nThe government should make sincere efforts to provide drinking/potable water to these districts.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 15 - 18): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Both actions address immediate needs and long-term solutions."
    },
    {
        question: "18. Statement: The Government has decided not to provide financial support to voluntary organisations from next Five Year Plan and has communicated that all such organisations should raise funds to meet their financial needs.\nCourses of Action:\n\nVoluntary organisations should collaborate with foreign agencies.\nThey should explore other sources of financial support.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 15 - 18): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Both actions are logical steps for voluntary organizations to raise funds."
    },
    {
        question: "19. Statement: Should the educated unemployed youth be paid 'unemployment allowance' by the Government?\nArguments:\n\nYes. It will provide them some monetary help to either seek employment or to kick-start some 'self-employment' venture.\nNo. It will dampen their urge to do something to earn their livelihood and thus promote idleness among the unemployed youth.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.No. 19): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Both I and II are strong",
        explanation: "Both arguments present valid points about the benefits and drawbacks of unemployment allowance."
    },
    {
        question: "20. Statement: Lack of coordination between the University, its colleges and various authorities has resulted in students ousted from one college seeking migration to another.\nCourses of Action:\n\nIf a student is ousted from a college, the information should be sent to all the other colleges of the University\nThe admissions to all the colleges of the University should be handled by the University directly.\nA separate section should be made for taking strict action against students indulging in anti-social activities.",
        options: [
            "Only I follows",
            "Only II follows",
            "Only III follows",
            "Only I and III follow",
            "Only II and III follow"
        ],
        direction: "Direction (Q.No. 20): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only I and III follow",
        explanation: "Informing other colleges and taking action against anti-social activities address the issue directly."
    }
];



const LogicalReasoning1 = () => {
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
  
  
  export default LogicalReasoning1;