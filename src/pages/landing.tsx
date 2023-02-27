import { IonPage, IonContent, IonButton, IonImg } from "@ionic/react";

import './landing.css'

export const Landing: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="landing__content">
                <section className="section">
                    <div className="landing__header">
                        <h1 className="first__title">Quiz App</h1>
                        <h2>Welcome to the Quiz Challenge</h2>
                    </div>
                    <div className="landing__image">
                        <IonImg src="../../assets/icon/quiz.png"></IonImg>
                    </div>
                    <div className="landing__text__container">
                        <p className="landing__text">You will be answering with 31 questions.</p>
                    </div>
                    <div className="landing__button">
                        <IonButton expand="block" routerLink="/Questions">Start</IonButton>
                    </div>
                </section>
            </IonContent>
        </IonPage>
    );
};
