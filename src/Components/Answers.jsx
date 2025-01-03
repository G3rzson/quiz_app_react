import React, { useState, useMemo } from 'react';

export default function Answers({ 
    started, 
    actualQuestion,
    setNextQuestion,  
    gameOver,
    setScore,
}) {
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);

    // Válaszok keverése
    const shuffledAnswers = useMemo(() => {
        if (started && actualQuestion?.answers) {
            const shuffleArray = (array) => {
                const shuffled = [...array];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            };
            return shuffleArray(actualQuestion.answers);
        }
        return [];
    }, [started, actualQuestion]);

    const handleAnswer = (answer) => {
        setSelectedAnswerId(answer.id);
        setTimeout(() => setSelectedAnswerId(null), 1500);
        setNextQuestion(true);
        if (answer.isCorrect) {
            setScore((prev) => prev + 1);
        }
    };

    return (
        <>
            {!gameOver && started &&(
                <div className="flex flex-col gap-2 flex-wrap w-screen items-center justify-center my-4">
                    {started && shuffledAnswers.length > 0 ? (
                        shuffledAnswers.map((ans) => (
                            <button
                                key={ans.id}
                                className={`py-2 px-4 block max-lg:w-11/12 w-9/12 rounded text-xl ${
                                    selectedAnswerId === ans.id
                                        ? ans.isCorrect
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                        : 'bg-blue-700 hover:bg-blue-400'
                                }`}
                                onClick={() => handleAnswer(ans)}
                            >
                                {ans.answer}
                            </button>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            )}
        </>
    );
}
