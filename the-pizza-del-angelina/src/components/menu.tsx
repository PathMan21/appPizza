import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Admin from '../pages/admin';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import "./menu.css";

function Menu() {
  return (
    <Router>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
          <IonTitle className="titreToolbar" slot="start"><h2>Menu</h2></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <Link className="menuItem" to="/pages/page1"><img src="https://static.vecteezy.com/ti/vecteur-libre/p3/21028590-piece-de-pizza-noir-et-blanc-vecteur-ligne-illustration-vectoriel.jpg"></img>Carte</Link><br></br>
        <Link className="menuItem" to="/pages/page2"><img src="https://static.vecteezy.com/ti/vecteur-libre/p3/21028590-piece-de-pizza-noir-et-blanc-vecteur-ligne-illustration-vectoriel.jpg"></img>Page 2</Link><br/>
        <Link className="menuItem" to="/pages/admin"><img src="https://static.vecteezy.com/ti/vecteur-libre/p3/21028590-piece-de-pizza-noir-et-blanc-vecteur-ligne-illustration-vectoriel.jpg"></img>Admin</Link><br/>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className="titreToolbar" slot="start"><h2>The Pizza Del Angelina !</h2></IonTitle>
          </IonToolbar>
        </IonHeader>
        <Switch>
          <Route exact path="/pages/page1" component={Page1}/>
          <Route exact path="/pages/page2" component={Page2} />
          <Route exact path="/pages/admin" component={Admin} />
        </Switch>
      </IonPage>
    </Router>
  );
}

export default Menu;