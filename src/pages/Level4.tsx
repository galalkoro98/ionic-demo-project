import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import { LevelFour } from '../components/LevelFour';

import { page } from '../hooks/customHooks';

export const Level4: React.FC = () => {
    const { showQuiz, startQuiz } = page()

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        {showQuiz ? (
                            <LevelFour />
                        ) : (
                            <IonCard>
                                <img alt="Silhouette of mountains" src="../../assets/icon/css.png" />
                                <IonCardHeader>
                                    <IonCardTitle color="secondary" > Level 4</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className='first__level__description'>
                                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web
                                </IonCardContent>
                            </IonCard>
                        )}
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level3">Back</IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={startQuiz}> Start Level 4</IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level5">Next Level</IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/home">Home</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
