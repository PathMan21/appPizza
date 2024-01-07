import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonList, IonToolbar, IonTitle, IonButton } from '@ionic/react';
import "./admin-style.css";

interface formValue {
    title: string;
    prix: string;
    ingredients: string;
    img: string;
  }
  

function Admin() {

    const [value, setValue] = useState<formValue>({
        title: "",
        prix: "",
        ingredients: "",
        img: ""

    });


    const handleInput = (event: CustomEvent, fieldName: keyof formValue) => {
        const newValue = { ...value, [fieldName]: event.detail.value ?? '' };
        setValue(newValue);
        
      };

    const handleSubmit = async () => {
        console.log("valeur de l'input : " + value);

        try {
        
        let response = await fetch('http://localhost:3000/pizzas', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(value),
        });
                            
        if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
        }
        catch (error) {
            console.error('Error fetching data:', error);


        }


    }


    return (
        <IonContent>

            <IonToolbar>
            <IonTitle>Title</IonTitle>
            </IonToolbar>

            <IonList>
            <IonItem>
                <IonInput id="title" label="Nom de la Pizza" placeholder="Pizza chorizo !"  onIonChange={(e) => handleInput(e, 'title')}></IonInput>
            </IonItem>

            <IonItem>
                <IonInput id="prix" label="Prix" placeholder="13.99 $" onIonChange={(e) => handleInput(e, 'prix')}></IonInput>
            </IonItem>

            <IonItem>
                <IonInput id="ingredients" label="Ingrédients" placeholder="pate à pain, tomates, oignons"onIonChange={(e) => handleInput(e, 'ingredients')}></IonInput>
            </IonItem>

            
            <IonItem>
                <IonInput id="image" label="Image" placeholder="https://...." onIonChange={(e) => handleInput(e, 'img')}></IonInput>
            </IonItem>

            <IonButton onClick={handleSubmit}>Submit</IonButton>
        </IonList>
      </IonContent>
      )
};

export default Admin;