
import { useState } from 'react';

import { Data } from '../../../data/data';


export const Question1 = () => {
    const [showAlert, setShowAlert] = useState(false)
    const [showNextButton, setShowNextButton] = useState(false);

    const handleAnswerSelected = (answer: string) => {
        if (answer === Data[0].city.name) {
            setShowAlert(true);
            setShowNextButton(true);
        } else {
            setShowAlert(true);
            setShowNextButton(false);
        }
    };

    const handleAlertDismiss = () => {
        setShowAlert(false);
    };

    const handleNextButtonClick = () => {
        // Handle next button click
    };

    return {
        handleAnswerSelected,
        handleAlertDismiss,
        handleNextButtonClick,
        showAlert,
        showNextButton
    }
}