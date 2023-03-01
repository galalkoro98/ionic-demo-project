import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';


export const Level5: React.FC = () => {
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
                            <img alt="Silhouette of mountains" src="../../assets/icon/css.jpg" />
                            <IonCardHeader>
                                <IonCardTitle color="secondary" >
                                    Level 5
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p className='first__level__description'>
                                    The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. </p>
                            </IonCardContent>
                        </IonCard>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level4">
                            Back
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={handleClick}>
                            Start Level 5
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level6">
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
