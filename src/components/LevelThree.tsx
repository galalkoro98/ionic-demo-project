
import React from "react";
import { IonButton } from "@ionic/react";

import { useQuizGame } from "../hooks/Levels";

export const LevelThree: React.FC = () => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        // resetGame,
        goToNextQuiz,
        goToNextLevel,
        isLastLevel,
        isLastQuiz,
        answerCorrect
    } = useQuizGame(2, 0);

    const handleTrueClick = () => {
        const answerCorrect = handleAnswer(false);
        if (answerCorrect && !isLastQuiz) {
            goToNextQuiz();
        } else if (answerCorrect && isLastQuiz && !isLastLevel) {
            goToNextLevel();
        }


    };

    const handleFalseClick = () => {
        const answerCorrect = handleAnswer(true);
        if (answerCorrect && !isLastQuiz) {
            goToNextQuiz();
        } else if (answerCorrect && isLastQuiz && !isLastLevel) {
            goToNextLevel();
        }
    };

    return (
        <div className="container__level__three">
            <h1>Level three</h1>
            <p>Score: {score}</p>
            <p>{currentQuiz.question}</p>
            <IonButton onClick={handleTrueClick}>True</IonButton>
            <IonButton onClick={handleFalseClick}>False</IonButton>
            {!answerCorrect && <p>Incorrect! Try again.</p>}
        </div>
    );
};
