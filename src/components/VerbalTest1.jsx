import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, FormGroup, FormControlLabel, Button, Radio, RadioGroup } from '@mui/material';
import './Test.css';


const questions = [
    {
        question: "1. Do you know to play the guitar?",
        options: [
            "Do you know",
            "to play",
            "the guitar?",
            "No error."
        ],
        direction: "Direction (Q.Nos. 1 - 2): Read each sentence to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any).",
        answer: "to play",
        explanation: "Correct form: 'Do you know how to play the guitar?'"
    },
    {
        question: "2. After leaving his office he went directly to a restaurant.",
        options: [
            "After leaving his office",
            "he went directly",
            "to a restaurant.",
            "No error."
        ],
        answer: "No error."
    },
    {
        question: "3. Ramesh did not like leaving his old parents alone in the house but he had no alternative as he has to go out to work.",
        options: [
            "Ramesh did not like",
            "leaving his old parents alone in the house",
            "but he had no alternative",
            "as he has to go out to work."
        ],
        direction: "Direction (Q.Nos. 3 - 4): Read each sentence to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any).",
        answer: "as he has to go out to work.",
        explanation: "Correct form: 'as he had to go out to work.'"
    },
    {
        question: "4. The observers felt that the stronger team had to face defeat because the players didn't play whole hearted.",
        options: [
            "The observers felt that",
            "the stronger team had to face",
            "defeat because the players",
            "didn't play whole hearted."
        ],
        answer: "didn't play whole hearted.",
        explanation: "Correct form: 'didn't play wholeheartedly.'"
    },
    {
        question: "5. RESCUE",
        options: [
            "Command",
            "Help",
            "Defence",
            "Safety"
        ],
        direction: "Direction (Q.Nos. 5 - 8): In the following questions choose the word which best expresses the meaning of the given word.",
        answer: "Help"
    },
    {
        question: "6. AWAKENED",
        options: [
            "Enlightened",
            "Realised",
            "Shook",
            "Waken"
        ],
        answer: "Waken"
    },
    {
        question: "7. INSOLVENT",
        options: [
            "Poor",
            "Bankrupt",
            "Penniless",
            "Broke"
        ],
        answer: "Bankrupt"
    },
    {
        question: "8. RECKLESS",
        options: [
            "Courageous",
            "Rash",
            "Bold",
            "Daring"
        ],
        answer: "Rash"
    },
    {
        question: "9. Swift is known in the world of letters for his misogynism.",
        options: [
            "hate for mankind",
            "hate for womankind",
            "love for the reasonable",
            "love for the womankind"
        ],
        direction: "Direction (Q.No. 9): In each of the sentences given below a word is printed in bold. Below it four choices are given. Pick up the one which is most nearly the same in meaning as the word printed in bold and can replace it without altering the meaning of the sentence.",
        answer: "hate for womankind"
    },
    {
        question: "10. LEND",
        options: [
            "Borrow",
            "Cheat",
            "Pawn",
            "Hire"
        ],
        direction: "Direction (Q.Nos. 10 - 12): In the following questions choose the word which is the exact OPPOSITE of the given words.",
        answer: "Borrow"
    },
    {
        question: "11. FRUGAL",
        options: [
            "Copious",
            "Extravagant",
            "Generous",
            "Ostentatious"
        ],
        answer: "Extravagant"
    },
    {
        question: "12. EXTRAVAGANCE",
        options: [
            "Luxury",
            "Poverty",
            "Economical",
            "Cheapness"
        ],
        answer: "Economical"
    },
    {
        question: "13. Adversity teaches man to be humble and self-reliant.",
        options: [
            "sincerity",
            "animosity",
            "curiosity",
            "prosperity"
        ],
        direction: "Direction (Q.Nos. 13 - 14): Each sentences below consist of a word or a phrase which is bold. It is followed by four words or phrases. Select the word or phrase which is closest to the OPPOSITE in meaning of the bold word or phrase.",
        answer: "prosperity"
    },
    {
        question: "14. Unsettled conditions in the land led to exodus of hundreds of its citizens.",
        options: [
            "invasion",
            "entry",
            "immigration",
            "expulsion"
        ],
        answer: "entry"
    },
    {
        question: "15. The river overflowed its ...... and flooded the area.",
        options: [
            "edges",
            "fronts",
            "limits",
            "banks"
        ],
        direction: "Direction (Q.No. 15): Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete.",
        answer: "banks"
    },
    {
        question: "16. People in our country are distressed by the spate of strikes, an almost perpetual go slow and increadibily low productivity.",
        options: [
            "People in our country are distressed",
            "by the spate of strikes, an almost",
            "perpetual go slow and",
            "increadibily low productivity",
            "All correct"
        ],
        direction: "Direction (Q.No. 16): In each sentence below, four words which are lettered (A), (B), (C) and (D) have been printed in bold type, one which may be either inappropriate in the context of the sentence or wrongly spelt. The letter of that word is the answer. If all the four words are appropriate and also correctly spelt, mark 'E', i.e., 'All Correct' as the answer.",
        answer: "increadibily low productivity",
        explanation: "Correct form: 'incredibly low productivity'"
    },
    {
        question: "17. They failed in their attempt to repair the demolished portion of that building.",
        options: [
            "for their attempt to repair",
            "in their attempting to repair",
            "with their attempt to repair",
            "in their attempt for repairs",
            "No correction required"
        ],
        direction: "Direction (Q.No. 17): Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer.",
        answer: "No correction required"
    },
    {
        question: "18. Most of the universities in the country are now facing financial crisis.",
        options: [
            "QRPS",
            "QSPR",
            "QRSP",
            "QPRS"
        ],
        direction: "Direction (Q.No. 18): In questions below, each passage consists of six sentences. The first and sixth sentences are given at the beginning. The middle four sentences in each have been removed and jumbled up. These are labelled as P, Q, R and S. Find out the proper order for the four sentences.",
        answer: "QRSP",
        explanation: "Proper sequence: Q - The current state of affairs cannot be allowed to continue for long. R - Universities cannot be equated with commercial enterprises. S - Proper development of universities and colleges must be ensured. P - Cost benefit yardstick thus should not be applied in the case of universities."
    },
    {
        question: "19. TEN:DECIMAL",
        options: [
            "seven:septet",
            "four:quartet",
            "two:binary",
            "five:quince"
        ],
        direction: "Direction (Q.Nos. 19 - 20): Each question consists of two words which have a certain relationship to each other followed by four pairs of related words. Select the pair which has the same relationship.",
        answer: "two:binary"
    },
    {
        question: "20. DIVA:OPERA",
        options: [
            "producer:theatre",
            "director:drama",
            "conductor:bus",
            "thespian:play"
        ],
        answer: "thespian:play"
    }
];

const VerbalTest1 = () => {
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

export default VerbalTest1;
