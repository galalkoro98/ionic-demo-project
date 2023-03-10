import React, { useState } from "react";

import { IonButton, } from "@ionic/react";

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
        isLastLevel,
        isLastQuiz,
        answerCorrect
    } = useQuizGame(0, 0);

    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [allAnsweredCorrectly, setAllAnsweredCorrectly] = useState(false);

    const handleAnswerClick = (selectOption: string) => {
        handleAnswer(selectOption);
        setAnsweredQuestions(answeredQuestions + 1);
        if (answerCorrect) {
            setAllAnsweredCorrectly(answeredQuestions === 5);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            score + 1

        } else {
            setAllAnsweredCorrectly(false);
        }
    };

    const handleNextClick = () => {
        if (isLastLevel && isLastQuiz) {
            onQuizFinish();
        } else if (isLastQuiz) {
            goToNextLevel();
        } else {
            goToNextQuiz();
        }
    }

    return (
        <>
            <div className="quiz__container">
                <div className="quiz__score">Score: {score}</div>
                <div className="quiz__question">QUESTION: {currentQuiz.question}</div>
                <div className="quiz__options">
                    <ul>
                        {
                            currentQuiz.options ? (
                                currentQuiz.options.map((option, index) => (
                                    <li
                                        key={index}
                                        className={`quiz__option ${answeredQuestions > 0 && answerCorrect
                                            ? "quiz__option--correct"
                                            : answeredQuestions > 0 && !answerCorrect
                                                ? "quiz__option--incorrect"
                                                : ""
                                            }`}
                                        onClick={() => handleAnswerClick(option)}
                                    >
                                        <IonButton className="option">  {option}</IonButton>

                                    </li>
                                ))
                            ) : (
                                <li>loading...</li>
                            )
                        }
                    </ul>

                </div>
                {answeredQuestions > 0 && (
                    <div className="quiz__answer">
                        {answerCorrect ? "Correct!" : "Incorrect!"}
                    </div>
                )}
                {answeredQuestions > 0 && (
                    <IonButton
                        color="primary"
                        className="quiz__next"
                        onClick={handleNextClick}
                    >
                        {isLastLevel && isLastQuiz
                            ? "Finish"
                            : isLastQuiz
                                ? "Next Level"
                                : "Next Question"}
                    </IonButton>
                )}

                {allAnsweredCorrectly && (
                    <div className="quiz__congrats">Congratulations! You answered all questions correctly.</div>
                )}





            </div>

        </>
    );

};
