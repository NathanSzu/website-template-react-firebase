import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

var config = {
  apiKey: "AIzaSyAmDYLiqikrosA0IjB_m_pZWaR0krPd7q8",
  authDomain: "website-templates-92f58.firebaseapp.com",
  projectId: "website-templates-92f58",
  storageBucket: "website-templates-92f58.appspot.com",
  messagingSenderId: "688175359553",
  appId: "1:688175359553:web:d2e2ddefcb9160788b48c0"
}
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
