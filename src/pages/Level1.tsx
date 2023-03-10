import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './styles/level.css'

import { LevelOne } from '../components/LevelOne'
import { page } from '../hooks/customHooks';

export const Level1: React.FC = () => {
    const { showQuiz, startQuiz, quizFinished, setQuizFinished } = page()


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        {showQuiz ? (
                            <LevelOne onQuizFinish={() => setQuizFinished(true)} />
                        ) : (
                            <IonCard>
                                <img alt="Silhouette of mountains" src="../../assets/icon/cover.jpg" />
                                <IonCardHeader>
                                    <IonCardTitle color="secondary" >Level 1</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className='first__level__description'>
                                    Test your knowledge with our fun and challenging quiz. The quiz contains a series of questions designed to test your understanding of the subject matter.
                                </IonCardContent>
                            </IonCard>
                        )}
                        <IonButton color="primary" className="ion-margin-top" routerLink="/home"> Back</IonButton>
                        {quizFinished ? (
                            <IonButton color="primary" className="ion-margin-top" type='button' onClick={startQuiz}>Restart Level 1</IonButton>
                        ) : (
                            <IonButton color="primary" className="ion-margin-top" type='button' onClick={startQuiz}>Start Level 1</IonButton>
                        )}
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level2"> Next Level</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
