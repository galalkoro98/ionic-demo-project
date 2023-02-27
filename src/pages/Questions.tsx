
import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonBackButton, IonIcon } from "@ionic/react";
import { arrowForwardOutline } from 'ionicons/icons';

import { Question1 } from "../components/Levels/1/Question-1";

import { CustomAlert } from "../custom/CustomAlert";

export const Questions: React.FC = () => {
    const { handleAnswerSelected, handleAlertDismiss, handleNextButtonClick, showAlert, showNextButton } = Question1();

    return (
        <IonPage>
            <IonContent fullscreen className="questions__content">
                <section className="section">
                    <IonBackButton defaultHref="/landing" className="back__button" />
                    <IonButton routerLink="/page2" className="forward__button" style={{ display: showNextButton ? 'block' : 'none' }} onClick={handleNextButtonClick} >
                        Next
                        <IonIcon slot="end" icon={arrowForwardOutline} />
                    </IonButton>
                    <div className="questions__header">
                        <h2>Question 1</h2>
                    </div>
                    <IonCard>
                        <img alt="Silhouette of mountains" src="../../assets/icon/city.jpg" />
                        <IonCardHeader>
                            <IonCardTitle>Graphic</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            What is the capital of Nigeria?
                        </IonCardContent>
                    </IonCard>
                    <div className="questions__button">
                        <IonButton expand="block" onClick={() => handleAnswerSelected('Lagos')}>Lagos</IonButton>
                        <IonButton expand="block" onClick={() => handleAnswerSelected('Abuja')}>Abuja</IonButton>
                        <IonButton expand="block" onClick={() => handleAnswerSelected('Kano')}>Kano</IonButton>
                        <IonButton expand="block" onClick={() => handleAnswerSelected('Ibadan')}>Ibadan</IonButton>
                    </div>
                </section>
            </IonContent>
            <CustomAlert showAlert={showAlert} handleAlertDismiss={handleAlertDismiss} showNextButton={showNextButton} />
        </IonPage>
    );
};
