
import React from "react";
import { useQuizGame } from "../hooks/Levels";

export const LevelFive: React.FC = () => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        resetGame,
        goToNextQuiz,
        goToNextLevel,
        isLastLevel,
        isLastQuiz,
    } = useQuizGame();

    return (
        <div>
            <h1>Level five</h1>
            <p>Score: {score}</p>
            <p>Question: {currentQuiz.question}</p>
            <ul>
                {/* {currentQuiz.options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(option)}>{option}</button>
                    </li>
                ))} */}
            </ul>
            {isLastQuiz && !isLastLevel ? (
                <button onClick={goToNextLevel}>Go to next level</button>
            ) : (
                <button onClick={goToNextQuiz}>Next question</button>
            )}
            <button onClick={resetGame}>Reset game</button>
        </div>
    );
};


