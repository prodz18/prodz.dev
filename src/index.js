import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import './assets/styles/index.css';
import FirebaseConfig from './firebase.config';
import App from './App';

ReactDOM.render(
	<FirebaseAppProvider firebaseConfig={FirebaseConfig}>
		<App />
	</FirebaseAppProvider>,
	document.getElementById('root')
);
