import React from 'react';

import { IonPage, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './home.css';
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
                        <animated.h1 style={textAnimation}>Welcome to My Game</animated.h1>
                        <animated.p style={textAnimation}>Choose your level:</animated.p>
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
