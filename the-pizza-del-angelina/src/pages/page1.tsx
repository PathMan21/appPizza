import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './page.css';

interface Pizza {
  id: number;
  title: string;
  image: string;
  prix: string;
  ingredients: string;
}

const Page1: React.FC = () => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/pizzas");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setPizza(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    fetchData(); // Appel de la fonction fetchData() à l'intérieur de useEffect

  }, []); // Tableau de dépendances vide pour un effet se produisant une seule fois au montage

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid className='containerPizza'>
          <IonRow>
            {/* Mapping des données pizza et affichage */}
            {pizza.map((entree: Pizza, index: number) => (
            <IonCol key={index} className='itemPizza'>
              <img src={entree.image}></img>
              <h2>{entree.title}</h2>
              <p>{entree.ingredients}</p>
              <p>{entree.prix}</p>
              <button>Commander</button>
            </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
