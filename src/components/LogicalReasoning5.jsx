import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';

const questions = [
    {
        question: "Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 1): Look carefully at the sequence of symbols to find the pattern. Select correct pattern.",
        answer: "3",
        explanation: "This is an alternating series. In the first segment, the letter 'E' faces right, then down, then right. In the second segment, the letters all face down. To follow this pattern, in the fourth segment, the letters must all face up."
    },
    {
        question: "Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        direction: "Direction (Q.No. 2): Choose the picture that would go in the empty box so that the two bottom pictures are related in the same way as the top two are related.",
        answer: "3",
        explanation: "A penny is to a dollar as a small house is to a skyscraper. This relationship shows smaller to larger. A penny is much smaller than a dollar; a house is much smaller than a skyscraper."
    },
    {
        question: "Here are some words translated from an artificial language. slar means jump, slary means jumping, slarend means jumped. Which word could mean 'playing'?",
        options: [
            "clargslarend",
            "clargy",
            "ellaclarg",
            "slarmont"
        ],
        direction: "Direction (Q.Nos. 3 - 4): Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices.",
        answer: "clargy",
        explanation: "According to this language, slar means jump. The suffix -ing is represented by -y. Since choice b is the only one that ends in the letter y, this is the only possible option."
    },
    {
        question: "Here are some words translated from an artificial language. plekapaki means fruitcake, pakishillen means cakewalk, treftalan means buttercup. Which word could mean 'cupcake'?",
        options: [
            "shillenalan",
            "treftpleka",
            "pakitreft",
            "alanpaki"
        ],
        direction: "Direction (Q.Nos. 3 - 4): Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices.",
        answer: "alanpaki",
        explanation: "Pleka means fruit; paki means cake; shillen means walk; treft means butter; and alan means cup. Therefore, alanpaki means cupcake."
    },
    {
        question: "Eileen is planning a special birthday dinner for her husband's 35th birthday. She wants the evening to be memorable, but her husband is a simple man who would rather be in jeans at a baseball game than in a suit at a fancy restaurant. Which restaurant below should Eileen choose?",
        options: [
            "Alfredo's offers fine Italian cuisine and an elegant Tuscan decor.",
            "Pancho's Mexican Buffet is an all-you-can-eat family style smorgasbord.",
            "The Parisian Bistro is a four-star French restaurant.",
            "Marty's serves delicious, hearty meals in a setting reminiscent of a baseball clubhouse."
        ],
        direction: "Direction (Q.No. 5): Each question presents a situation and asks you to make a judgment regarding that particular circumstance. Choose an answer based on given information.",
        answer: "Marty's serves delicious, hearty meals in a setting reminiscent of a baseball clubhouse.",
        explanation: "Since Eileen's husband does not enjoy fancy restaurants, choices a and c can be ruled out. Choice b, although casual, doesn't sound as though it would be the kind of special and memorable evening that Eileen is looking for. Choice d, which is owned by a former baseball star and is described as 'charming' and 'reminiscent of a baseball clubhouse', sounds perfect for Eileen's husband, who is described as a baseball fan and a man with simple tastes."
    },
    {
        question: "Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years. Dakota: It is true that people have been allowed to receive a drivers license at sixteen for generations. However, in recent years, the increase in traffic means drivers face more dangers than ever and must be ready to respond to a variety of situations. The fact that schools can no longer afford to teach drivers education results in too many young drivers who are not prepared to face the traffic conditions of today. On what does Quinn rely in making her argument?",
        options: [
            "statistics",
            "emotion",
            "fairness",
            "anecdotes",
            "actualities"
        ],
        direction: "Direction (Q.No. 6): Read the below passage carefully and answer the questions.",
        answer: "fairness",
        explanation: "Quinn discusses the fairness of changing the law and raising the age at which one can receive a driver's license. Emotion (choice b) may be involved, but the argument relies on the fairness issue."
    },
    {
        question: "Statements: The 'Official Secrets Act' (OSA) enacted by the ABC government during the war seems to be one of the major source of corruption in the country X. Conclusions: The OSA has to be abolished immediately to put an end to the corruption in the country X. The ABC government had an intention of encouraging corruption in the government offices.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 7 - 8): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Only conclusion I follows",
        explanation: "The statement declares enactment of OSA as the direct cause of increase in corruption. So, I follows. However, enactment of an act by a government is undertaken for betterment and not with the intention of encouraging corruption though whatever may be the outcome later on. So, II does not follow."
    },
    {
        question: "Statements: About 50 per cent of the animal by-products - hair, skin, horns etc. is edible protein. American chemists have developed a method of isolating 45 per cent of this protein. They used an enzyme developed in Japan to break down soya protein. Conclusions: Americans have not been able to develop enzymes. Animal by-products protein has the same composition as soya protein.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.Nos. 7 - 8): In each question below is given a statement followed by two conclusions numbered I and II. You have to assume everything in the statement to be true, then consider the two conclusions together and decide which of them logically follows beyond a reasonable doubt from the information given in the statement.",
        answer: "Neither I nor II follows",
        explanation: "That the American chemists used an enzyme developed in Japan, does not mean that Americans have not been able to develop enzymes. So, I does not follow. Also, nothing about the compositions of animal by-products protein and soya protein is mentioned in the statement. So, II also does not follow."
    },
    {
        question: "Statements: The Government has imported large quantities of sugar as per trade agreement with other countries. The prices of sugar in the domestic market have fallen sharply in the recent months.",
        options: [
            "Statement I is the cause and statement II is its effect",
            "Statement II is the cause and statement I is its effect",
            "Both the statements I and II are independent causes",
            "Both the statements I and II are effects of independent causes",
            "Both the statements I and II are effects of some common cause"
        ],
        direction: "Direction (Q.No. 9): In each of the following questions, two statements numbered I and II are given. There may be cause and effect relationship between the two statements. These two statements may be the effect of the same cause or independent causes. These statements may be independent causes without having any relationship. Read both the statements in each question and mark your answer as",
        answer: "Statement I is the cause and statement II is its effect",
        explanation: "The increase in supply always triggers a reduction in the prices."
    },
    {
        question: "Statement: The first step in treating addicts is to re-establish their lost ties, for which a continuous personal attention should be paid to the addicts under treatment. Assumptions: Addicts under treatment respond better when shown personal interest. Addiction and strained relationships are intimately connected.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 10): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "Clearly, treatment of addiction requires personal attention as the first step. So, I is implicit. Also, since intimacy and personal attention are required to treat addicts, it implies that addiction arises out of frustration due to strained relationships. So, II is also implicit."
    },
    {
        question: "Statement: Sachin wrote to his brother at Bangalore to collect personally the application form from the University for the Post-graduation Course in Mathematics. Assumptions: The University may issue application forms to a person other than the prospective student. Sachin's brother may receive the letter well before the last date of collecting application forms.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 11): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "Since Sachin has asked his brother to collect the form, it is evident that the university may issue the form to anybody and that Sachin's brother would receive the letter before the last date of collecting the forms. So, both I and II are implicit."
    },
    {
        question: "Statement: What a fool I am to rely on trickster like Shaleen ! Assumptions: Shaleen is unreliable. I am a fool.",
        options: [
            "Only assumption I is implicit",
            "Only assumption II is implicit",
            "Either I or II is implicit",
            "Neither I nor II is implicit",
            "Both I and II are implicit"
        ],
        direction: "Direction (Q.No. 12): In each question below is given a statement followed by two assumptions numbered I and II. You have to consider the statement and the following assumptions and decide which of the assumptions is implicit in the statement.",
        answer: "Both I and II are implicit",
        explanation: "Since one condemns oneself to rely on Shaleen, so I is implicit. The statement mentions that it was foolish to rely on Shaleen. So, the person is a fool. Thus, II is implicit."
    },
    {
        question: "Statement: A large number of people in ward X of the city are diagnosed to be suffering from a fatal malaria type. Courses of Action: The city municipal authority should take immediate steps to carry out extensive fumigation in ward X. The people in the area should be advised to take steps to avoid mosquito bites.",
        options: [
            "Only I follows",
            "Only II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 13): In each question below is given a statement followed by two courses of action numbered I and II. You have to assume everything in the statement to be true and on the basis of the information given in the statement, decide which of the suggested courses of action logically follow(s) for pursuing.",
        answer: "Both I and II follow",
        explanation: "Clearly, prevention from mosquitoes and elimination of mosquitoes are two ways to prevent malaria. So, both the courses follow."
    },
    {
        question: "Statements: All windows are doors. No door is wall. Conclusions: No window is wall. No wall is door.",
        options: [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Either I or II follows",
            "Neither I nor II follows",
            "Both I and II follow"
        ],
        direction: "Direction (Q.No. 14): In each question below are given two statements followed by two conclusions numbered I and II. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Read the conclusion and then decide which of the given conclusions logically follows from the two given statements, disregarding commonly known facts.",
        answer: "Both I and II follow",
        explanation: "Since both the premises are universal and one premise is negative, the conclusion must be universal negative. Also, the conclusion should not contain the middle term. So, I follows. However, II is the converse of the second premise and thus it also holds."
    },
    {
        question: "Statement: Should import duty on all the electronic goods be dispensed with? Arguments: No. This will considerably reduce the income of the government and will adversely affect the developmental activities. No. The local manufacturers will not be able to compete with the foreign manufacturers who are technologically far superior.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 15 - 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Only argument II is strong",
        explanation: "Abolishing the import duty on electronic goods shall reduce the costs of imported goods and adversely affect the sale of the domestic products, thus giving a setback to the Indian electronics industry. So, argument II holds strong. Argument I does not provide a convincing reason."
    },
    {
        question: "Statement: Should there be uniforms for students in the colleges in India as in the schools? Arguments: Yes, this will improve the ambience of the colleges as all the students will be decently dressed. No. The college students should not be regimented and they should be left to choose their clothes for coming to the college.",
        options: [
            "Only argument I is strong",
            "Only argument II is strong",
            "Either I or II is strong",
            "Neither I nor II is strong",
            "Both I and II are strong"
        ],
        direction: "Direction (Q.Nos. 15 - 16): Each question given below consists of a statement, followed by two arguments numbered I and II. You have to decide which of the arguments is a 'strong' argument and which is a 'weak' argument.",
        answer: "Only argument II is strong",
        explanation: "Clearly, after being in strict discipline and following a formal dress code of the school for so many years, the students must be granted some liberty in college life, as they have to take on the responsibilities of life, next. Besides, schools adopt uniforms to take care of the security of the child - an aspect which doesn't matter much in the colleges. So, argument II holds strong. Also, the environment of the college depends on the students' dedication and etiquettes and not on their uniforms. So, argument I is vague."
    },
    {
        question: "Statement: Should religion be taught in our schools? Arguments: No. Ours is a secular state. Yes. Teaching religion helps inculcate moral values among children. No. How can one dream of such a step when we want the young generation to fulfil its role in the 21st century.",
        options: [
            "All are strong",
            "None is strong",
            "Only I is strong",
            "Only II is strong",
            "Only I and III are strong"
        ],
        direction: "Direction (Q.No. 17): Each question given below consists of a statement, followed by three or four arguments numbered I, II, III and IV. You have to decide which of the arguments is/are 'strong' arguments) and which is/are 'weak' arguments) and accordingly choose your answer from the alternatives given below each question.",
        answer: "Only II is strong",
        explanation: "Ours is a secular state does not mean that religion and religious values should be eradicated. In fact, these inculcate moral values. So, argument I is vague while argument II is strong. Also, teaching religion can in no way hinder the student's capability to face the challenges of the 21st century."
    },
    {
        question: "Statement: 'Join X-tuition classes for sure success. Excellent teaching by excellent teachers is our strength.' - An advertisement. Assumptions: Sure success is desirable. Students expect sure success when they join any tuition class. Just having excellent teachers does not ensure success.",
        options: [
            "Only I and II are implicit",
            "Only II and III are implicit",
            "Only I and III are implicit",
            "Only II is implicit",
            "All are implicit"
        ],
        direction: "Direction (Q.No. 18): In each question below is given a statement followed by three assumptions numbered I, II and III. You have to consider the statement and the following assumptions, decide which of the assumptions is implicit in the statement and choose your answer accordingly.",
        answer: "Only I and II are implicit",
        explanation: "The advertisement seeks to attract the students by promising them sure success. So, both I and II are implicit. Assumption III does not follow from the statement and so is not implicit."
    },
    {
        question: "Statements: All tigers are lions. No cow is lion. Some camels are cows. Conclusions: Some lions are camels. No camel is tiger. Some tigers are cows.",
        options: [
            "None follows",
            "Only I follows",
            "Only II follows",
            "Only III follows",
            "Either I or II follows"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each of the questions below are given three statements followed by three conclusions numbered I, II and III, You have to take the given statements to be true even if they seem to be at variance from the commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only II follows",
        explanation: "All tigers are lions. No cow is lion. Since both the premises are universal and one premise is negative, the conclusion must be universal negative (E-type) and shouldn't contain the middle term. So, it follows that 'No tiger is cow'. Some camels are cows. No cow is lion. Since one premise is particular and the other negative, the conclusion must be particular negative (O-type) and should not contain the middle term. So, it follows that 'Some camels are not lions'. Some camels are cows. No tiger is cow. Since one premise is particular and the other negative, the conclusion must be particular negative (O-type) and should not contain the middle term. So, it follows that 'Some camels are not tigers'."
    },
    {
        question: "Statements: Some pictures are frames. Some frames are idols. All idols are curtains. Conclusions: Some curtains are pictures. Some curtains are frames. Some idols are frames.",
        options: [
            "Only I and II follow",
            "Only II and III follow",
            "Only I and III follow",
            "All follow",
            "None of these"
        ],
        direction: "Direction (Q.Nos. 19 - 20): In each of the questions below are given three statements followed by three conclusions numbered I, II and III, You have to take the given statements to be true even if they seem to be at variance from the commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.",
        answer: "Only II and III follow",
        explanation: "III is the converse of the second premise and so it holds. Some pictures are frames. Some frames are idols. Since both the premises are particular, no definite conclusion follows. Some frames are idols. All idols are curtains. Since one premise is particular, the conclusion must be particular and should not contain the middle term. So, it follows that 'Some frames are curtains'. III is the converse of this conclusion and so it holds. Some pictures are frames. Some frames are curtains. Since both the premises are particular, no definite conclusion can be drawn."
    }
];





const LogicalReasoning5 = () => {
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
  
  
  export default LogicalReasoning5;