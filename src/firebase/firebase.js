import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD_h9syjjeuCBQ9t8oiQr3nPgFalV6VIVE",
    authDomain: "fb-opressus.firebaseapp.com",
    projectId: "fb-opressus",
    storageBucket: "fb-opressus.appspot.com",
    messagingSenderId: "569236803398",
    appId: "1:569236803398:web:465c07d41ac63c69c25f47"
}

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.firestore();

