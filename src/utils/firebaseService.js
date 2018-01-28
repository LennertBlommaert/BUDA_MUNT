import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig) {
    throw new Error('Add your own firebaseConfig.json file');
  }
  firebase.initializeApp(firebaseConfig);
}

export function listenFirebaseDatabase() {
  return firebase.database().ref().child('projects');
}
