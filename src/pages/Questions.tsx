import { IonPage, IonContent, IonImg, IonButton } from "@ionic/react";

export const Questions: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="questions__content">
                <section className="section">
                    <div className="questions__header">
                        <h1 className="first__title">Quiz App</h1>
                        <h2>Question 1</h2>
                    </div>
                    <div className="questions__image">
                        <IonImg src="../../assets/icon/quiz.png"></IonImg>
                    </div>
                    <div className="questions__text__container">
                        <p className="questions__text">What is the capital of Nigeria?</p>
                    </div>
                    <div className="questions__button">
                        <IonButton expand="block" routerLink="/question">Lagos</IonButton>
                        <IonButton expand="block" routerLink="/question">Abuja</IonButton>
                        <IonButton expand="block" routerLink="/question">Kano</IonButton>
                        <IonButton expand="block" routerLink="/question">Ibadan</IonButton>
                    </div>
                </section>
            </IonContent>
        </IonPage>
    );
};
