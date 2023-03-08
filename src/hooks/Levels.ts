// useQuizGame.ts

import { useState } from "react";
import quizData from "../data/dataQuiz";


interface Quiz {
    question: string;
    options?: string[];
    answer?: string;
    hint?: string;
    answerInput?: boolean;
    isTrue?: boolean;
}

interface Level {
    levelNumber: number;
    quizzes: Quiz[];
}

export const useQuizGame = (initialLevelIndex = 0, initialQuizIndex = 0) => {
    const [levelIndex, setLevelIndex] = useState(initialLevelIndex);
    const [quizIndex, setQuizIndex] = useState(initialQuizIndex);
    const [score, setScore] = useState(0);
    const [answerCorrect, setAnswerCorrect] = useState(true);
    const currentLevel: Level = quizData[levelIndex];

    const currentQuiz: Quiz = currentLevel.quizzes[quizIndex];

    const handleAnswer = (selectedOption: string | boolean )  => {
        if (selectedOption === currentQuiz.answer) {
            setScore(score + 1);
            // setAnswerCorrect(true);
            return true;

        } else {
            // setAnswerCorrect(false);
            return false;
        }
    };

    const resetGame = () => {
        setLevelIndex(0);
        setQuizIndex(0);
        setScore(0);
        setAnswerCorrect(true);
    };

    const goToNextQuiz = () => {
        setQuizIndex(quizIndex + 1);
        setAnswerCorrect(true);
    };

    const goToNextLevel = () => {
        setLevelIndex(levelIndex + 1);
        setQuizIndex(0); // reset quiz index when moving to next level
        setAnswerCorrect(true);
    };

    const isLastLevel = levelIndex === quizData.length - 1;
    const isLastQuiz = quizIndex === currentLevel.quizzes.length - 1;

    return {
        currentQuiz,
        handleAnswer,
        score,
        resetGame,
        goToNextQuiz,
        goToNextLevel,
        isLastLevel,
        isLastQuiz,
        answerCorrect
    };
};

