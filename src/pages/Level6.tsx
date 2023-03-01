import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';


export const Level6: React.FC = () => {
    const [showLevelOne, setShowLevelOne] = useState(false);

    const handleClick = () => {
        setShowLevelOne(true);
    };

    if (showLevelOne) {
        return <div></div>
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        <IonCard>
                            <img alt="Silhouette of mountains" src="../../assets/icon/JavaScript.jpg" />
                            <IonCardHeader>
                                <IonCardTitle color="secondary" >
                                    Level 6
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p className='first__level__description'>
                                    JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS </p>
                            </IonCardContent>
                        </IonCard>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level5">
                            Back
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={handleClick}>
                            Start Level 6
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level7">
                            Next Level
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/home">
                            Home
                        </IonButton>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
