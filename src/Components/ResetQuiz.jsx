import React from 'react'

export default function 
    ResetQuiz({
        setResetQuiz, 
        setStarted, 
        setTheme, 
        setError, 
        setQuestions,
        setCurrentQuestion,
        setSelectedQuestions,
        setGameOver,
        setActualQuestion,
        setNextQuestion,
        setScore,
    }) {

    const handleReset = () => {
        setResetQuiz(true);
        setStarted(false);
        setTheme('');
        setError('');
        setQuestions([]);
        setGameOver(false);
        setSelectedQuestions([]); 
        setCurrentQuestion(null);
        setActualQuestion(''); 
        setNextQuestion(false);
        setScore(0);
    }

  return (
    <button
        onClick={handleReset}
        className='py-2 px-4 bg-orange-400 hover:bg-orange-300 rounded block mx-auto my-4'
    >Újra</button>
  )
}
