import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import "./menu.css"

function Menu() {
  return (
    <Router>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="titreToolbar" slot="start"><h2>The Pizza Del Angelina !</h2></IonTitle>
              <IonMenuButton />
            <IonButtons>
              <Link className="menuItem" to="/pages/page1"><img src="https://static.vecteezy.com/ti/vecteur-libre/p3/21028590-piece-de-pizza-noir-et-blanc-vecteur-ligne-illustration-vectoriel.jpg"></img>Carte</Link>
              <Link className="menuItem" to="/pages/page2"><img src="https://static.vecteezy.com/ti/vecteur-libre/p3/21028590-piece-de-pizza-noir-et-blanc-vecteur-ligne-illustration-vectoriel.jpg"></img>Page 2</Link>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <Switch>
            <Route exact path="/pages/page1" component={Page1} />
            <Route path="/pages/page2" component={Page2} />
          </Switch>
        </IonContent>
      </IonPage>
    </Router>
  );
}

export default Menu;
