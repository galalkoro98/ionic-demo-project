import { useState } from "react";

export const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showQuiz, setShowQuiz] = useState(false);

    const startQuiz = () => {
        setShowQuiz(true);

    }

    return {
        showQuiz,
        startQuiz
    }
}