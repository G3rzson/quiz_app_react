import Title from "./Components/Title";
import SelectTheme from "./Components/SelectTheme";
import StartQuiz from "./Components/StartQuiz";
import Questions from "./Components/Questions";
import ResetQuiz from "./Components/ResetQuiz";
import ErrorMsg from "./Components/ErrorMsg";
import Answers from './Components/Answers';

import {useState} from 'react'

function App() {
  const [theme, setTheme] = useState('');
  const [resetQuiz, setResetQuiz] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState('');
  const [actualQuestion, setActualQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null); 
  const [nextQuestion, setNextQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const [score, setScore] = useState(0);

  return (
    <>
      <Title />

      {started ? <></> 
               : <SelectTheme 
                    setTheme={setTheme} />}

      {started ? <></> 
               : <StartQuiz
                    setStarted={setStarted} 
                    setResetQuiz={setResetQuiz} 
                    theme={theme} 
                    setError={setError} />}

      {resetQuiz ? <></> 
                 : <Questions 
                      theme={theme}  
                      setError={setError} 
                      setQuestions={setQuestions} 
                      questions={questions} 
                      started={started} 
                      setCurrentQuestion={setCurrentQuestion} 
                      setSelectedQuestions={setSelectedQuestions}
                      currentQuestion={currentQuestion} 
                      setActualQuestion={setActualQuestion}
                      nextQuestion={nextQuestion} 
                      selectedQuestions={selectedQuestions} 
                      setNextQuestion={setNextQuestion} 
                      setGameOver={setGameOver}
                      gameOver={gameOver}
                      score={score} />}  

      <Answers 
          started={started} 
          actualQuestion={actualQuestion} 
          setNextQuestion={setNextQuestion}
          gameOver={gameOver}
          setScore={setScore} /> 

      <ErrorMsg error={error} />
      
      {started ? <ResetQuiz 
                    setResetQuiz={setResetQuiz} 
                    setStarted={setStarted} 
                    setTheme={setTheme} 
                    setError={setError} 
                    setQuestions={setQuestions} 
                    setCurrentQuestion={setCurrentQuestion} 
                    setSelectedQuestions={setSelectedQuestions} 
                    setGameOver={setGameOver}
                    setActualQuestion={setActualQuestion}
                    setNextQuestion={setNextQuestion}
                    setScore={setScore} />
               : <></>}
    </>
  )
}

export default App
