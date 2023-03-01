import React from "react";

import { useGameLevel } from "../../hooks/useGameLevel";
import { Level } from "../Level";
import { HtmlData } from "../../data/HtmlData";


export const LevelOne: React.FC = () => {
    const { currentLevel, advanceToNextLevel } = useGameLevel(7);

    const handleLevelCompletion = () => {
        // Do something to mark the current level as completed
        advanceToNextLevel();
    };

    const levels = [
        { name: 'Level 1', completed: currentLevel > 1 },
        { name: 'Level 2', completed: currentLevel > 2 },
        { name: 'Level 3', completed: currentLevel > 3 },
        { name: 'Level 4', completed: currentLevel > 4 },
        { name: 'Level 5', completed: currentLevel > 5 },
        { name: 'Level 6', completed: currentLevel > 6 },
        { name: 'Level 7', completed: currentLevel > 7 },
    ];

    const quizzes = HtmlData.map((quiz, index) => {
        return {
            question: quiz.question,
            answer: quiz.answer,
            completed: currentLevel > index + 1
        }
    })


    return (
        <Level levelIndex={0} levels={levels}>
            <div>
                <h1>Level 1</h1>
                <p>Welcome to Level 1!</p>
                <p>Here are the first 3 questions:</p>
                <ol>
                    <li>{quizzes[0].question}</li>
                    <li>{quizzes[1].question}</li>
                    <li>{quizzes[2].question}</li>
                </ol>
                <button onClick={handleLevelCompletion}>Complete Level</button>
            </div>
        </Level>
    );
};