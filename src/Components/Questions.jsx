import { useEffect } from 'react';

export default function Questions({ 
    theme, 
    setError, 
    setQuestions, 
    questions, 
    started,
    setCurrentQuestion, 
    setSelectedQuestions, 
    currentQuestion,
    setActualQuestion,
    nextQuestion,
    selectedQuestions,
    setNextQuestion,
    setGameOver,
    gameOver,
    score,
}) {
    useEffect(() => {
        fetch('/quiz_app_react/Data/Quiz.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Hiba történt a kérdések lekérésekor.');
                }
                return response.json();
            })
            .then((data) => {
                setQuestions(data.Theme); 
                setError(null); 
            })
            .catch((err) => setError(err.message));
    }, [setQuestions, setError]);

    // Első kérdés beállítása
    useEffect(() => {
        if (started && questions && theme && questions[theme]) {
            handleInitialQuestion();
        }
    }, [started, theme, questions]);

    const handleInitialQuestion = () => {
        if (questions[theme] && questions[theme].length > 0) {
            const serialNumber = Math.floor(Math.random() * questions[theme].length);
            setSelectedQuestions([serialNumber]); 
            setCurrentQuestion(questions[theme][serialNumber].question);
            setActualQuestion(questions[theme][serialNumber]);
        } else {
            setError('A megadott téma alatt nincsenek kérdések.');
        }
    };

    useEffect(() => {
        if (nextQuestion){
            if (selectedQuestions.length >= questions[theme].length) {
                setTimeout(() => {
                    setGameOver(true);
                    setNextQuestion(false);
                }, 1500); // 1500 milliseconds = 1.5 seconds delay
                return;
            }

            let serialNumber;
            do {
                serialNumber = Math.floor(Math.random() * questions[theme].length);
            } while (selectedQuestions.includes(serialNumber));

            const newSelectedQuestions = [...selectedQuestions, serialNumber];
            
            setTimeout(() => {
                setSelectedQuestions(newSelectedQuestions);
                setCurrentQuestion(questions[theme][serialNumber].question);
                setActualQuestion(questions[theme][serialNumber]);
                setNextQuestion(false);
            }, 1500); 
        }
    }, [nextQuestion, questions, theme, selectedQuestions, setSelectedQuestions, setCurrentQuestion, setActualQuestion, setNextQuestion, setGameOver]);

    return (
        <>
            {gameOver ? (
                <h2 className='py-2 px-4 rounded bg-orange-400 text-2xl w-11/12 mx-auto text-center'>
                    A Játék Véget Ért! <span className='text-2xl'>Pontszám: {questions[theme].length}/{score}</span>
                </h2>
            ) : (
                questions[theme] && started && questions[theme].length > 0 ? (
                    <h2 className='py-2 px-4 rounded bg-green-500 text-4xl w-11/12 mx-auto text-center'>
                        {currentQuestion}
                    </h2>
                ) : (<></>)
            )}
        </>
    );
}
