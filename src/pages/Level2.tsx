import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import { LevelTwo } from '../components/LevelTwo';
import { page } from '../hooks/customHooks';

export const Level2: React.FC = () => {
    const { showQuiz, startQuiz } = page()

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        {showQuiz ? (
                            <LevelTwo />
                        ) : (
                            <IonCard>
                                <img alt="Silhouette of mountains" src="../../assets/icon/html.png" />
                                <IonCardHeader>
                                    <IonCardTitle color="secondary" >Level 2</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className='first__level__description'>
                                    HTML stands for Hypertext Markup Language and is the standard markup language used to create and design web pages. HTML consists of a series of elements and tags that define the structure and content of a web page
                                </IonCardContent>
                            </IonCard>
                        )}
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level1">Back</IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={startQuiz}> Start Level 2 </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level3"> Next Level </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level3"> Home </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
