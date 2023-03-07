import React, { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { useQuizGame } from "../hooks/Levels";

import './styles/levelTwo.css'

export const LevelTwo: React.FC = () => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        goToNextQuiz,
        isLastQuiz,
    } = useQuizGame(1, 0);

    const [userAnswer, setUserAnswer] = useState("");
    const [showError, setShowError] = useState(false);

    const handleAnswerClick = () => {
        const isCorrect = handleAnswer(userAnswer);
        if (isCorrect) {
            setShowError(false);
            setUserAnswer("");
            if (isLastQuiz) {
                // If this is the last quiz, go to the next level
                goToNextQuiz();
            } else {
                // Otherwise, go to the next quiz in this level
                setTimeout(() => {
                    goToNextQuiz();
                }, 1000);
            }
        } else {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 1000);
        }
    };

    return (
        <>
            <h1>Level two</h1>
            <h3>{currentQuiz.question}</h3>
            {showError && <p>Incorrect answer. Please try again.</p>}
            <IonInput
                value={userAnswer}
                placeholder="Your answer"
                onIonChange={(e) => setUserAnswer(e.detail.value!)}


            />
            <IonButton onClick={handleAnswerClick}>Check Answer</IonButton>
            <p>Score: {score}</p>
        </>
    );
};
