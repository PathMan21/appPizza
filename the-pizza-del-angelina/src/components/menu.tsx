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
  IonToolbar
} from '@ionic/react';

function Menu() {
  return (
    <Router>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Link to="../pages/page1">Page 1</Link>
          <br />
          <Link to="../pages/page2">Page 2</Link>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Switch>
          <Route exact path="../pages/page1" component={Page1}/>
          <Route path="../pages/page2" component={Page2} />
        </Switch>
      </IonPage>
    </Router>
  );
}

export default Menu;
