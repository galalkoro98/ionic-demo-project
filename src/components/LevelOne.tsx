
import React, { useState } from "react";

import { IonButton } from "@ionic/react";

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
            setTimeout(() => {
                setAnswerCorrect(true);
                if (answeredQuestions + 1 === 5) {
                    setAllAnsweredCorrectly(true);
                    onQuizFinish();
                }
            }, 1000);
        } else {
            setTimeout(() => {
                setAnswerCorrect(false);

            }, 1000);
        }

        setAnsweredQuestions(answeredQuestions + 1);
    };

    return (
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
            {!answerCorrect && <p>Incorrect! Try again.</p>}
            {answerCorrect && !isLastQuiz ? (
                <IonButton onClick={goToNextQuiz}>Next question</IonButton>
            ) : null}
            {answerCorrect && isLastQuiz && answeredQuestions === 5 ? (
                <div>
                    {allAnsweredCorrectly && (
                        <>
                            <p>Congratulations, you have finished Level One!</p>
                            <IonButton onClick={goToNextLevel}>Go to next level</IonButton>
                        </>
                    )}
                </div>
            ) : null}
        </div>
    );
};
