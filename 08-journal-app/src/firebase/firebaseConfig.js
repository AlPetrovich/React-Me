import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

//Pag - firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_9CCWLOg9DgjITXWyPAjZ6fwQJreCUM8",
    authDomain: "react-app-project-4f5bf.firebaseapp.com",
    projectId: "react-app-project-4f5bf",
    storageBucket: "react-app-project-4f5bf.appspot.com",
    messagingSenderId: "251280741352",
    appId: "1:251280741352:web:1fce3a818d5c251abb0a5d"
};
  
firebase.initializeApp(firebaseConfig);

//referencia base de datos
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}