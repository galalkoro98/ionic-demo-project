import React, { useState } from "react";

export const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showQuiz, setShowQuiz] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quizFinished, setQuizFinished] = React.useState(false);

    const startQuiz = () => {
        setQuizFinished(false);
        setShowQuiz(true);
    }

    return {
        showQuiz,
        startQuiz,
        quizFinished,
        setQuizFinished
    }
}