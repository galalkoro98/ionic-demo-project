import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';


export const Level3: React.FC = () => {
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
                            <img alt="Silhouette of mountains" src="../../assets/icon/tag.png" />
                            <IonCardHeader>
                                <IonCardTitle color="secondary" >Level 3</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p className='first__level__description'>An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document <code>
                                    <p> &lt;h1&gt;This is a heading&lt;/h1&gt; </p>
                                    <p> &lt;p&gt;This is a paragraph.&lt;/p&gt; </p>
                                    <p> &lt;img This is to insert the image. /&gt;</p>
                                </code> </p>
                            </IonCardContent>
                        </IonCard>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level2">
                            Back
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" onClick={handleClick}>
                            Start Level 3
                        </IonButton>
                        <IonButton color="primary" className="ion-margin-top" routerLink="/level4">
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
