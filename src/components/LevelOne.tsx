import React, { useState } from "react";

import { IonButton, IonPage } from "@ionic/react";

import "./styles/levelOne.css";

import { useQuizGame } from "../hooks/Levels";

interface LevelOneProps {
    onQuizFinish: () => void;
}

export const LevelOne: React.FC<LevelOneProps> = ({ onQuizFinish }) => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        resetGame,
        goToNextQuiz,
        goToNextLevel,
        isLastQuiz,
    } = useQuizGame(0, 0);
    const [answerCorrect, setAnswerCorrect] = useState(true);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [allAnsweredCorrectly, setAllAnsweredCorrectly] = useState(false);

    const handleAnswerClick = (selectedOption: string) => {
        const isCorrect = handleAnswer(selectedOption);
        setAnswerCorrect(isCorrect);

        if (isCorrect) {
            setAnsweredQuestions(answeredQuestions + 1);
            if (answeredQuestions === 4) {
                setAllAnsweredCorrectly(true);
                onQuizFinish();
            } else {
                setTimeout(() => {
                    setAnswerCorrect(true);
                }, 1000);
            }
        } else {
            setTimeout(() => {
                setAnswerCorrect(false);
                window.alert("Incorrect answer. Please try again.");
            }, 1000);
        }
    };

    return (
        <>
            <div className="container__level__one">
                <h1>Level one</h1>
                <p>Score: {score}</p>
                <p>Question: {currentQuiz.question}</p>
                <ul>
                    {currentQuiz.options ? (
                        currentQuiz.options.map((option, index) => (
                            <li key={index}>
                                <IonButton onClick={() => handleAnswerClick(option)}>
                                    {option}
                                </IonButton>
                            </li>
                        ))
                    ) : null}
                </ul>
                {answerCorrect ? <p>Correct!</p> : <p>Incorrect!</p>}
                {isLastQuiz ? (
                    <IonButton onClick={goToNextLevel}>Next Level</IonButton>
                ) : (
                    <IonButton onClick={goToNextQuiz}>Next Question</IonButton>
                )}
                {allAnsweredCorrectly ? (
                    <p>Congratulations! You answered all questions correctly.</p>
                ) : null}
            </div>
        </>
    );
};
