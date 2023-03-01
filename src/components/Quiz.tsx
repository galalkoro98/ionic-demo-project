
// quiz component 

type QuizProps = {
    index: number;
    content: string;
    isCompleted: boolean;
    onComplete: () => void;
};

export const Quiz = ({ index, content, isCompleted, onComplete }: QuizProps) => {
    const handleClick = () => {
        if (isCompleted) {
            onComplete();
        } else {
            // Show error message or take some other action
            alert('You must complete the previous quiz first!');
        }
    };

    return (
        <div>
            <h3>Quiz {index + 1}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>{isCompleted ? 'Completed' : 'Start Quiz'}</button>
        </div>
    );
};
