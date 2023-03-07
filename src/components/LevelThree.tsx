import React from "react";
import { IonButton } from "@ionic/react";

import { useQuizGame } from "../hooks/Levels";
import './styles/levelThree.css'

export const LevelThree: React.FC = () => {
    const {
        currentQuiz,
        handleAnswer,
        score,
        goToNextQuiz,
        // goToNextLevel,
        isLastQuiz,
        isLastLevel,
        answerCorrect
    } = useQuizGame(2, 0);

    const handleAnswerClick = (selectedOption: string) => {
        const isCorrect = handleAnswer(selectedOption);
        if (isCorrect) {
            goToNextQuiz();
        } else {
            alert('Incorrect! Try again.');
        }
    };

    if (isLastLevel && isLastQuiz && answerCorrect) {
        return (
            <div>
                <h1>Congratulations! You have completed all quizzes in level three.</h1>
                {/* <IonButton onClick={goToNextLevel}>Go to next level</IonButton> */}
            </div>
        );
    }

    return (
        <div className="container__level__three">
            <h1>Level three</h1>
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
        </div>
    );
};
