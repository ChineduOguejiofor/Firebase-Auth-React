import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA4e8s9kuZvJBMAJVX4VUdxABoVwqwAu8A",
  authDomain: "cleanit-7147d.firebaseapp.com",
  databaseURL: "https://cleanit-7147d.firebaseio.com",
  projectId: "cleanit-7147d",
  storageBucket: "cleanit-7147d.appspot.com",
  messagingSenderId: "620697968925",
  appId: "1:620697968925:web:a2681385e2af82ba6c81f4",
  measurementId: "G-EXLP9M43XJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
