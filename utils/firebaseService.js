import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export const initializeFirebase = () => {
  // Initialize Firebase
  if (!firebaseConfig) {
    throw new Error('Add your own firebaseConfig.json file');
  }
  firebase.initializeApp(firebaseConfig);
};

export const listenFirebaseDatabase = () => firebase.database().ref().child('projects');

export const singInFirebase = ({ email, password }) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signOutFirebase = ({ email, password }) => firebase.auth().signOut();

export const createUserFirebase = ({ email, password }) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const onAuthStateChangedFirebase = (user) => {
  if (user) return user;
  return {};
};
