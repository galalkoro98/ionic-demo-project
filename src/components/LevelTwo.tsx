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
    const [showHint, setShowHint] = useState(false);

    const handleAnswerClick = () => {
        const isCorrect = handleAnswer(userAnswer);
        if (isCorrect) {
            setShowError(false);
            setShowHint(false);
            setUserAnswer("");
            if (isLastQuiz) {
                goToNextQuiz();
            } else {
                setTimeout(() => {
                    goToNextQuiz();
                }, 1000);
            }
        } else {
            setShowError(true);
            setShowHint(true);
            setTimeout(() => {
                setShowError(false);
            }, 1000);
        }
    };

    const handleHintClick = () => {
        setShowHint(true);
    };

    return (

        <div className="level__two__container">
            <h1>Level two</h1>
            <h3>{currentQuiz.question}</h3>
            {showError && <p className="error">Incorrect! Try again.</p>}
            <p>Enter your answer:</p>
            <IonInput className="input__background"
                value={userAnswer}
                onIonChange={(e) => setUserAnswer(e.detail.value!)}
            />
            <IonButton onClick={handleAnswerClick}>Submit</IonButton>
            {!showHint && <IonButton onClick={handleHintClick}>Hint</IonButton>}
            {showHint && <p>Hint: {currentQuiz.hint}</p>}
            <p>Score: {score}</p>
        </div>

    );
};
