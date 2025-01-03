import React from 'react'

export default function 
    StartQuiz({
        setStarted, 
        setResetQuiz, 
        theme, 
        setError
    }) {

    const handleStart = () => {
        if (theme === '') {
            setError('Válassz témát!');
        } else {
            setStarted(true); 
            setResetQuiz(false);
            setError('');
        }
    };

    return (
        <button
            className='py-2 px-4 bg-green-500 rounded block mx-auto my-4'
            onClick={handleStart}
        >
            Start
        </button>
    )
}
