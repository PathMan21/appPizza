import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import './page.css'

const Page2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Simple Ionic Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Ceci est une page Ionic de démonstration numéro 2.</p>
          <p>-------------TEST-------------</p>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
