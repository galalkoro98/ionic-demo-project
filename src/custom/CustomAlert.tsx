import React from 'react';
import { IonAlert } from '@ionic/react';

interface Props {
    showAlert: boolean;
    handleAlertDismiss: () => void;
    showNextButton: boolean;
}

export const CustomAlert: React.FC<Props> = ({ showAlert, handleAlertDismiss, showNextButton }) => {
    return (
        <IonAlert
            isOpen={showAlert}
            onDidDismiss={handleAlertDismiss}
            header={showNextButton ? 'Correct!' : 'Incorrect'}
            message={showNextButton ? 'Your answer is correct!' : 'Your answer is incorrect.'}
            buttons={['OK']}
        />
    );
};

