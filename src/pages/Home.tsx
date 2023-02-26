import { IonContent, IonPage } from '@ionic/react';
import { StartButton } from '../components/StartButton';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <StartButton />
      </IonContent>
    </IonPage>
  );
};


