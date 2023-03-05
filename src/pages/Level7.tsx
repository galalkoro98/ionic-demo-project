import React from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';


export const Level7: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        <IonCard>
                            <img alt="Silhouette of mountains" src="../../assets/icon/js.png" />
                            <IonCardHeader>
                                <IonCardTitle color="secondary" >Level 7 </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p className='first__level__description'>
                                    A function in JavaScript defines a scope for variables declared using var , let and const . Any variable declared within that function is only accessible from that function and any nested functions </p>
                            </IonCardContent>
                        </IonCard>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level6">Back</IonButton>
                        <IonButton color="primary" className="ion-margin-top">Start Level 7  </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/home">Home</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};
