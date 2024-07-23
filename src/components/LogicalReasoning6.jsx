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
        explanation: "Leopard, cougar, and lion are all big cats, while elephant is not."
    },
    {
        question: "2. Reptile is to lizard as flower is to",
        options: [
            "petal",
            "stem",
            "daisy",
            "alligator"
        ],
        direction: "Direction (Q.No. 2): A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the first two words. Then, try to use the same sentence to find out which of the answer choices completes the same relationship with the third word.",
        answer: "daisy",
        explanation: "Lizard is a type of reptile, and daisy is a type of flower."
    },
    {
        question: "3. Erratic Behavior occurs when an individual acts in a manner that lacks consistency, regularity, and uniformity. Which situation below is the best example of Erratic Behavior?",
        options: [
            "Julia cannot contain her anger whenever the subject of local politics is discussed.",
            "Martin has just been told that he is being laid off. Before leaving his supervisor's office, he punches a hole in the door.",
            "Rhonda has visited the dealership several times, but she still cannot decide which car to buy.",
            "In the past month, Jeffrey, who has been a model employee for three years, has repeatedly called in sick, forgotten important meetings, and been verbally abusive to colleagues."
        ],
        direction: "Direction (Q.No. 3): Read each definition and all four choices carefully, and find the answer that provides the best example of the given definition.",
        answer: "In the past month, Jeffrey, who has been a model employee for three years, has repeatedly called in sick, forgotten important meetings, and been verbally abusive to colleagues.",
        explanation: "Jeffrey's behavior is inconsistent with his previous behavior, which is the definition of erratic behavior."
    },
    {
        question: "4. Today's high school students spend too much time thinking about trivial and distracting matters such as fashion. Additionally, they often dress inappropriately on school grounds. Rather than spending time writing another detailed dress policy, we should make school uniforms mandatory. If students were required to wear uniforms, it would increase a sense of community and harmony in our schools and it would instill a sense of discipline in our students. Another positive effect would be that teachers and administrators would no longer have to act as clothing police, freeing them up to focus on more important issues. This paragraph best supports the statement that",
        options: [
            "inappropriate clothing leads to failing grades.",
            "students who wear school uniforms get into better colleges.",
            "teachers and administrators spend at least 25% of their time enforcing the dress code.",
            "students are not interested in being part of a community",
            "school uniforms should be compulsory for high school students."
        ],
        direction: "Direction (Q.No. 4): Read the paragraph carefully and determine the main point the author is trying to make. What conclusion can be drawn from the argument? Each paragraph is followed by five statements. One statement supports the author's argument better than the others do.",
        answer: "school uniforms should be compulsory for high school students.",
        explanation: "The paragraph argues that school uniforms would solve several problems related to students' focus and discipline."
    },
    {
        question: "5. In the 1966 Supreme Court decision Miranda v. Arizona, the court held that before the police can obtain statements from a person subjected to an interrogation, the person must be given a Miranda warning. This warning means that a person must be told that he or she has the right to remain silent during the police interrogation. Violation of this right means that any statement that the person makes is not admissible in a court hearing. This paragraph best supports the statement that",
        options: [
            "police who do not warn persons of their Miranda rights are guilty of a crime.",
            "a Miranda warning must be given before a police interrogation can begin.",
            "the police may no longer interrogate persons suspected of a crime unless a lawyer is present.",
            "the 1966 Supreme Court decision in Miranda should be reversed",
            "persons who are interrogated by police should always remain silent until their lawyer comes"
        ],
        direction: "Direction (Q.No. 5): Choose the statement that is best supported by the information given in the question passage.",
        answer: "a Miranda warning must be given before a police interrogation can begin.",
        explanation: "The passage states that a Miranda warning must be given before interrogation, otherwise the statements are inadmissible in court."
    },
    {
        question: "6. Giving children computers in grade school is a waste of money and teachers time. These children are too young to learn how to use computers effectively and need to spend time on learning the basics, like arithmetic and reading. After all, a baby has to crawl before she can walk. Which of the following, if true, would weaken the speaker's argument?",
        options: [
            "a demonstration that computers can be used to teach reading and arithmetic",
            "analysis of the cost-effectiveness of new computers versus repairing old computers",
            "examples of adults who do not know how to use computers",
            "recent grade reports of students in the computer classes",
            "a visit to a classroom where computers are being used"
        ],
        direction: "Direction (Q.No. 6): Read the below passage carefully and answer the questions:",
        answer: "a demonstration that computers can be used to teach reading and arithmetic",
        explanation: "If it can be shown that computers are effective tools for teaching basic skills like reading and arithmetic, it would weaken the argument that they are a waste for young children."
    },
    {
        question: "7. Statements: Modern man influences his destiny by the choice he makes unlike in the past. Conclusions: Earlier there were fewer options available to man. There was no desire in the past to influence the destiny.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 7): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Only conclusion I follows",
        explanation: "The statement implies that modern man has more choices to influence his destiny compared to the past, but it does not imply that there was no desire to influence destiny in the past."
    },
    {
        question: "8. Statements: The prices of vegetables have been increased considerably during this summer. There is tremendous increase in the temperature during this summer thereby damaging crops greatly.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 8): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Statement II is the cause and statement I is its effect",
        explanation: "The increase in temperature damaged crops, leading to a rise in vegetable prices."
    },
    {
        question: "9. Statement: The regulatory authority has set up a review committee to find out the reasons for unstable stock prices. Assumptions: The investors may regain confidence in stock market by this decision. The review committee has the expertise to find out the causes for volatility in the stock market.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 9): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The formation of a review committee implies both that the committee has the necessary expertise and that it is expected to restore investor confidence."
    },
    {
        question: "10. Statement: The present examination system needs overhauling thoroughly. Assumptions: The present examination system is obsolete. Overhauling results in improvement.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 10 - 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The need for overhauling implies that the system is considered obsolete and that overhauling is expected to bring improvement."
    },
    {
        question: "11. Statement: I have written several letters to the branch manager regarding my account in the bank but did not receive any reply so far. Assumptions: Branch manager is expected to read letters received from the customer. Branch manager is expected to reply to the letters received from the customers.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 10 - 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The statement implies that the branch manager is expected to read and reply to customer letters."
    },
    {
        question: "12. Statement: The end of a financial year is the ideal time to take a look at the performance of various companies. Assumptions: All the companies take such a review at the end of a financial year. The performance data of various companies is available.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.Nos. 10 - 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Only assumption II is implicit",
        explanation: "The statement implies that performance data is available for review, but not that all companies necessarily conduct such reviews."
    },
    {
        question: "13. Statement: Children, who get encouragement, usually perform better. - A note by the Principal to the parents. Assumptions: Some parents do not encourage children. Parents may follow Principal's advice.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "The note implies that some parents may not currently encourage their children and that they might follow the Principal's advice."
    },
    {
        question: "14. Statement: Exporters in the capital are alleging that commercial banks are violating a Reserve Bank of India directive to operate a post-shipment export credit denominated in foreign currency at international rates from January this year. Courses of Action: The officers concerned in the commercial banks are to be suspended. The RBI should be asked to stop giving such directives to commercial banks.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Neither I nor II follows",
        explanation: "Suspending officers or stopping RBI directives are extreme actions not justified by the information provided. Other corrective measures should be considered first."
    },
    {
        question: "15. Statement: Most of those who study in premier engineering colleges in India migrate to developed nations for better prospects in their professional pursuits. Courses of Action: All the students joining these colleges should be asked to sign a bond at the time of admission to the effect that they will remain in India at least for ten years after they complete education. All those students who desire to settle in the developed nations should be asked to pay the entire cost of their education which the government subsidizes.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 14 - 15): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Both actions aim to address the problem of brain drain and ensure that the government investment in education benefits the country."
    },
    {
        question: "16. Statement: The Union Ministry of Tourism and Civil Aviation has fixed an annual target of Rs 10,000 crores by way of tourism earnings towards the end of the current decade. Courses of Action: There is no need of development of further new tourist spots to meet the target. The Ministry should evolve attractive packages to woo the foreign tourists to meet the target.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 16): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Only II follows",
        explanation: "Developing attractive packages is a proactive approach to increase tourism earnings, while not developing new tourist spots does not directly help in achieving the target."
    },
    {
        question: "17. Statement: A large number of students who have passed their XII Std. terminal examination in the country could not get admission to colleges as the number of seats available are grossly inadequate. Courses of Action: The evaluation system of XII Std. terminal examination should be made more tough so that fewer students pass the examination. The Government should encourage the private sector to open new colleges by providing them land at cheaper rate. The rich people should be asked to send their wards to foreign countries for higher studies enabling the needy students to get admission in colleges within the country.",
        options: [
            "Only I follows",
            "Only II follows",
            "Only I and II follow",
            "Only II and III follow",
            "None of these"
        ],
        direction: "Direction (Q.No. 17): In each question below is given a statement followed by three courses of action numbered I, II and III. You have to assume everything in the statement to be true, then decide which of the three given suggested courses of action logically follows for pursuing.",
        answer: "Only II follows",
        explanation: "Encouraging the private sector to open new colleges addresses the root cause of inadequate seats. Making exams tougher or sending rich students abroad are not practical solutions."
    },
    {
        question: "18. Statement: 'A rare opportunity to be a professional while you are at home.' - An advertisement for computer literate housewives by a computer company. Assumptions: Some housewives simultaneously desire to become professional. Computer industry is growing at a fast pace. It is possible to be a professional as well as a housewife.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit",
            "Only II is implicit",
            "None of these"
        ],
        direction: "Direction (Q.No. 18): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and III are implicit",
        explanation: "The advertisement implies that some housewives want to become professionals and that it is possible to balance professional work with being a housewife."
    },
    {
        question: "19. Statements: All pencils are birds. All birds are skies. All skies are hills. Conclusions: All pencils are hills. All hills are birds. All skies are pencils. All birds are hills.",
        options: [
            "Only I and II follow",
            "Only I and III follow",
            "Only III and IV follow",
            "All follow",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each of the following questions, three statements are given followed by four conclusions numbered I, II, III and IV. You have to take the given statements to be true even if they seem to be at variance with commonly known facts and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only I and II follow",
        explanation: "From the statements, it follows that all pencils are hills and all birds are hills. The other conclusions do not logically follow."
    },
    {
        question: "20. Statements: All myths are fictions. No fiction is novel. All novels are stories. Conclusions: No myth is novel. Some fictions are novels. Some fictions are myths. Some myths are novels.",
        options: [
            "Only either I or II and both III and IV follow",
            "Only either I or IV and II follow",
            "Only either I or IV and both II and III follow",
            "All follow",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each of the following questions, three statements are given followed by four conclusions numbered I, II, III and IV. You have to take the given statements to be true even if they seem to be at variance with commonly known facts and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only either I or IV and both II and III follow",
        explanation: "From the statements, it follows that no myth is novel, some fictions are myths, and some myths are novels. Either I or IV can be true, but not both."
    }
];



const LogicalReasoning6 = () => {
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
  
  
  export default LogicalReasoning6;