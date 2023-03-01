import React from 'react';

import { IonPage, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import './styles/home.css';
import { useSpring, animated } from 'react-spring';



const Home: React.FC = () => {

    const textAnimation = useSpring({
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
    });


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background">
                    <div className="ion-text-center ion-padding">
                        <IonCard>
                            <img alt="Silhouette of mountains" src="../../assets/icon/welcome.jpg" />
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle color="secondary" >
                                        <animated.h1 style={textAnimation}>To our Quiz Game</animated.h1>
                                    </IonCardTitle>
                                </IonCardHeader>
                            </IonCardContent>
                        </IonCard>
                        <animated.h2 style={textAnimation}>Choose your level:</animated.h2>
                        <Link to="/level1">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 1
                            </IonButton>
                        </Link>
                        <Link to="/level2">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 2
                            </IonButton>
                        </Link>
                        <Link to="/level3">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 3
                            </IonButton>
                        </Link>
                        <Link to="/level4">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 4
                            </IonButton>
                        </Link>
                        <Link to="/level5">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 5
                            </IonButton>
                        </Link>
                        <Link to="/level6">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 6
                            </IonButton>
                        </Link>
                        <Link to="/level7">
                            <IonButton color="primary" className="ion-margin-top">
                                Level 7
                            </IonButton>
                        </Link>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
