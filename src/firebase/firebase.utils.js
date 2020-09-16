import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBurls1tk7jTIwk99CNvhIBHuTG49RYEMk",
    authDomain: "crwn-db-5e339.firebaseapp.com",
    databaseURL: "https://crwn-db-5e339.firebaseio.com",
    projectId: "crwn-db-5e339",
    storageBucket: "crwn-db-5e339.appspot.com",
    messagingSenderId: "714015644049",
    appId: "1:714015644049:web:c5b33639d0f5648671a230"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;