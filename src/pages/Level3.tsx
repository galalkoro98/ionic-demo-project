import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import { LevelThree } from '../components/LevelThree';

import { page } from '../hooks/customHooks';



export const Level3: React.FC = () => {
    const { showQuiz, startQuiz } = page()

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        {showQuiz ? (
                            <LevelThree />
                        ) : (
                            <IonCard>
                                <img alt="Silhouette of mountains" src="../../assets/icon/tag.png" />
                                <IonCardHeader>
                                    <IonCardTitle color="secondary" >Level 3</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className='first__level__description'>
                                    An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document <code>
                                        <p> &lt;h1&gt;This is a heading&lt;/h1&gt; </p>
                                        <p> &lt;p&gt;This is a paragraph.&lt;/p&gt; </p>
                                        <p> &lt;img This is to insert the image. /&gt;</p>
                                    </code>
                                </IonCardContent>
                            </IonCard>
                        )}
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level2"> Back</IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level4"> Next Level</IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/home"> Home</IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={startQuiz}>  Start Level 3</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
