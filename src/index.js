import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';



const config = {
    apiKey: "AIzaSyDNrbwI3sFyrSJyCOaQK-1Qgzt4xHbZCo0",
    authDomain: "netflixclone-1c511.firebaseapp.com",
    projectId: "netflixclone-1c511",
    storageBucket: "netflixclone-1c511.appspot.com",
    messagingSenderId: "119068312075",
    appId: "1:119068312075:web:ab29d0eb93bf687d557d0e",
    measurementId: "G-B37LWCBXZP"
};



const firebase = window.firebase.initializeApp(config);



ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
