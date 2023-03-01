import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import { Level1 } from './pages/Level1';
import { Level2 } from './pages/Level2';
import { Level3 } from './pages/Level3';
import { Level4 } from './pages/Level4';
import { Level5 } from './pages/Level5';
import { Level6 } from './pages/Level6';
import { Level7 } from './pages/Level7';





/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
// import './theme/general.css';
import './App.css'

setupIonicReact();

const App: React.FC = () => (
  <IonApp className='IonApp'>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/level1">
          <Level1 />
        </Route>
        <Route exact path="/level2">
          <Level2 />
        </Route>
        <Route exact path="/level3">
          <Level3 />
        </Route>
        <Route exact path="/level4">
          <Level4 />
        </Route>
        <Route exact path="/level5">
          <Level5 />
        </Route>
        <Route exact path="/level6">
          <Level6 />
        </Route>
        <Route exact path="/level7">
          <Level7 />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
