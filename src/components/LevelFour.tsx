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

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, option: string) => {
        if (event.dataTransfer) {
            event.dataTransfer.setData("option", option);
            event.currentTarget.classList.add("dragging");
        }
    };

    const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
        if (event.dataTransfer) {
            const option = event.dataTransfer.getData("option");
            const isCorrect = handleAnswer(option);
            if (!isCorrect) {
                alert("Incorrect answer. Try again.");
            } else {
                setAnswerShown(true);

                if (isLastQuiz) {
                    alert("You've completed the quiz!");
                } else {
                    alert("Correct answer!");
                }
            }
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null); // reset selectedAnswer to null
        setAnswerShown(false);
        goToNextQuiz();

    };



    return (
        <div className="container__level__four">
            <h1>Level four</h1>
            <p>Score: {score}</p>
            <p>Question: {currentQuiz.question}</p>
            <p>Note: drag the write option and drop in the white area</p>
            <ul>
                {currentQuiz.options ? (
                    currentQuiz.options.map((option, index) => (
                        <li key={index}>
                            <div
                                className="option__drop"
                                draggable
                                onDragStart={(event) => handleDragStart(event, option)}
                            >
                                {option}
                            </div>
                        </li>
                    ))
                ) : null}
            </ul>
            <div
                className="question"
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <IonCard className="drop__card">
                    {answerShown && selectedAnswer ? currentQuiz.answer : currentQuiz.question}
                </IonCard>
            </div>
            {!isLastQuiz ? (
                <IonButton onClick={handleNextQuestion}>Next question</IonButton>
            ) : null}
        </div>
    )
};


