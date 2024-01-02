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
import './page.css'



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
            <img src="https://www.dominos.fr/ManagedAssets/FR/product/PCNR/FR_PCNR_fr_menu_12472.png?v-1736087109"></img>
            <h2>Pizza Master Bacon-Fondu</h2>
            <p>Une pizza faite pour les champions, double bacon, double bonheur !</p>
            <button>Commander</button>
            </IonCol>
            
          <IonCol className='itemPizza'><img src="https://www.dominos.fr/ManagedAssets/FR/product/PCAN/FR_PCAN_fr_menu_12192.png?v654698321"></img>
            <h2>Pizza Chorizo-double dose</h2>
            <p>Les accros de la viande seront ravis ! Chorizo + poivrons + fromage = bonheur</p>
            <button>Commander</button>
            </IonCol>

          <IonCol className='itemPizza'><img src="https://www.dominos.fr/ManagedAssets/FR/product/P4FR/FR_P4FR_fr_menu_12192.png?v-713404695"></img>
            <h2>Champignon Lovers</h2>
            <p>Fromage et champignon, qui n'aimerait pas ?</p>
            <button>Commander</button>
            </IonCol>

            <IonCol className='itemPizza'><img src="https://www.dominos.fr/ManagedAssets/FR/product/PBCG/FR_PBCG_fr_menu_12192.png?v25586971"></img>
            <h2>Ketchup Mania</h2>
            <p>Ketchup fromage et du jambon, la base quoi !</p>
            <button>Commander</button>
            </IonCol>

            <IonCol className='itemPizza'><img src="https://www.dominos.fr/ManagedAssets/FR/product/PCMI/FR_PCMI_all_menu_12192.png?v-1467135987"></img>
            <h2>Pizza Fromage Lover : 4 fromages</h2>
            <p>4 fromages pour 4 fois plus de fondant</p>
            <button>Commander</button>
            </IonCol>


            <IonCol className='itemPizza'><img src="https://www.dominos.fr/ManagedAssets/FR/product/PSVY/FR_PSVY_fr_menu_12192.png?v-367335066"></img>
            <h2>Patate et lardons : pour les gourmands</h2>
            <p>Lardon et pomme de terres, pour les gourmands</p>
            <button>Commander</button>
            </IonCol>

            
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
