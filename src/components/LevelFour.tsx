import React, { useState } from "react";
import { IonButton, IonCard } from "@ionic/react";

import './styles/levelFour.css'

import { useQuizGame } from "../hooks/Levels";

export const LevelFour: React.FC = () => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        goToNextQuiz,
        isLastQuiz
    } = useQuizGame(3, 0);

    const [answerShown, setAnswerShown] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleAnswerClick = (selectedOption: string) => {
        const isCorrect = handleAnswer(selectedOption);
        setSelectedAnswer(selectedOption);
        setAnswerShown(true);
        if (!isCorrect) {
            alert('Incorrect! Try again.');
        }
    }

    const resetAnswers = () => {
        setAnswerShown(false);
        setSelectedAnswer(null);
    }

    if (isLastQuiz) {
        return (
            <div>
                <h1>Congratulations! You have completed all quizzes in level four.</h1>
            </div>
        );
    }

    return (
        <div className="container__level__four">
            <h1>Level four</h1>
            <p>Score: {score}</p>
            <p>Question: {currentQuiz.question}</p>
            <IonCard>
                <ul>
                    {currentQuiz.options ? (
                        currentQuiz.options.map((option, index) => (
                            <li key={index}>
                                <IonButton
                                    onClick={() => handleAnswerClick(option)}
                                    disabled={answerShown}
                                    color={selectedAnswer === option ? 'success' : 'primary'}
                                >
                                    {option}
                                </IonButton>
                            </li>
                        ))
                    ) : null}

                </ul>
            </IonCard>
            <IonButton onClick={() => { goToNextQuiz(); resetAnswers(); }} disabled={!answerShown}>Next</IonButton>
        </div>
    );



};


