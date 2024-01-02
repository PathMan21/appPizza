import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import "/src/theme/page.css";



const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nos Pizzas !</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid className='containerPizza'>
        <IonRow>
          <IonCol className='itemPizza'>
            <img src="https://www.dominos.fr/ManagedAssets/FR/product/PRAC/FR_PRAC_fr_hero_12472.png?v-1247508819"></img>
            <h2>Pizza Master Bacon-Fondu</h2>
            <p>Une pizza faite pour les champions, double bacon, double bonheur !</p>
            <button>Commander</button>
            </IonCol>
          <IonCol className='itemPizza'>2</IonCol>
          <IonCol className='itemPizza'>3</IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
