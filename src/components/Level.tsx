// level component

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Quiz } from './Quiz';


type LevelProps = {
    levelIndex: number;
    levels: {
        name: string;
        completed: boolean;
    }[];
    children?: React.ReactNode;
}


export const Level = ({ levelIndex, levels }: LevelProps) => {
    const history = useHistory();
    const [completed, setCompleted] = useState(levels[levelIndex].completed);
    const [quizCompletionStatus, setQuizCompletionStatus] = useState(Array(21).fill(false));



    const handleQuizCompletion = (quizIndex: number) => {
        // check if all previous quizzes are completed
        const previousQuizzesCompleted = quizCompletionStatus
            .slice(0, quizIndex)
            .every((isCompleted) => isCompleted);

        if (previousQuizzesCompleted) {
            // mark the current quiz as completed
            const newQuizCompletionStatus = [...quizCompletionStatus];
            newQuizCompletionStatus[quizIndex] = true;
            setQuizCompletionStatus(newQuizCompletionStatus);

            // check if all quizzes are completed
            if (newQuizCompletionStatus.every((isCompleted) => isCompleted)) {
                // mark the level as completed and go to the next level
                setCompleted(true);
                levels[levelIndex].completed = true;

                if (levelIndex < levels.length - 1) {
                    history.push(`/level/${levelIndex + 2}`);
                } else {
                    // Congratulate the user on completing the game!
                }
            }
        } else {
            // show error message or take some other action
            alert('You must complete the previous quiz first!');
        }
    };

    const quizzes = [
        { content: 'Quiz 1 content' },
        { content: 'Quiz 2 content' },
        { content: 'Quiz 3 content' },
        // add more quizzes here
    ];

    return (
        <div>
            <h2>Level {levelIndex + 1}: {levels[levelIndex].name}</h2>
            <p>{completed ? 'Completed!' : 'Incomplete'}</p>
            {!completed && quizzes.map((quiz, index) => (
                <Quiz
                    key={index}
                    index={index}
                    content={quiz.content}
                    isCompleted={quizCompletionStatus[index]}
                    onComplete={() => handleQuizCompletion(index)}
                />
            ))}
        </div>
    );
};


