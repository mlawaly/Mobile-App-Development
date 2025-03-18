import React from 'react';
import { IonApp, IonHeader, IonFooter, IonContent, IonToolbar, IonTitle } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


const App: React.FC = () => (
  <IonApp>
	<IonHeader>
		<IonToolbar>
			<IonTitle>Welcome, Maman Lawaly</IonTitle>
		</IonToolbar>
	</IonHeader>
	<IonContent style={{ backgroundColor: "#d4fff7", padding: "16px" }}>
		<h1>Welcome to Bootcamp</h1>
	</IonContent>
	<IonFooter>
		<IonToolbar>
			<IonTitle>Day 1 Assignment</IonTitle>
		</IonToolbar>
	</IonFooter>
  </IonApp>
);

export default App;
