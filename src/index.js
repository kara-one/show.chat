import './index.css';

import App from './App';
import { Database } from 'firebase/database';
import React from 'react';
import ReactDOM from 'react-dom';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);

const firebaseConfig = {
  apiKey: 'AIzaSyBEB8Pd50SWYWwsQuD1nBeG_Kiar2qzef8',
  authDomain: 'show-chat-8bd23.firebaseapp.com',
  databaseURL:
    'https://show-chat-8bd23-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'show-chat-8bd23',
  storageBucket: 'show-chat-8bd23.appspot.com',
  messagingSenderId: '629217271187',
  appId: '1:629217271187:web:89f93ee0b99aef8c99dc66',
};
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = new Database(firebase);
console.log('firebase: ', firebase);
console.log('db: ', db);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, db }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
