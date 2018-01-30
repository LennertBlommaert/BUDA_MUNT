import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

// export const initializeFirebase = () => {
//   // Initialize Firebase
//
//   if (!firebaseConfig) {
//     throw new Error('Add your own firebaseConfig.json file');
//   }
//   firebase.initializeApp(firebaseConfig);
// };
//
// //
//
// export const listenFirebaseDatabase = () => firebase.database().ref().child('projects');
//
// export const singInFirebase = ({ email, password }) => firebase.auth().signInWithEmailAndPassword(email, password);
//
// export const signOutFirebase = ({ email, password }) => firebase.auth().signOut();
//
// export const createUserFirebase = ({ email, password }) => firebase.auth().createUserWithEmailAndPassword(email, password);
//
// export const onAuthStateChangedFirebase = (user) => {
//   if (user) return user;
//   return {};
// };

export default class FirebaseService {
  constructor() {
    if (!firebaseConfig) {
      throw new Error('Add your own firebaseConfig.json file');
    }
    firebase.initializeApp(firebaseConfig);

    // const db = firebase.firestore();
    // firebase.firestore().enablePersistence();

    this._setupRefs();
  }

  _setupRefs() {
    this.rootRef = firebase.database().ref();

    this.usersRef = this.rootRef.child('users');
    this.projectsRef = this.rootRef.child('projects');
    this.contactsRef = this.rootRef.child('contacts');
    this.capacitiesRef = this.rootRef.child('capacaties');
    this.demandsRef = this.rootRef.child('demands');
    this.userCapacitiesRef = this.rootRef.child('userCapacities');
  }

  /* NOTE: NOT IN USE
  getUserByUID(uid) {
    return new Promise((resolve) => {
      this.usersRef.child(uid).on('value', (snap) => {
        if (snap.val() !== null) {
          resolve(snap.val());
        }
        resolve({});
      });
    });
  }

  getUserCapacitiesByUserUID(userUID) {
    // Resolves directly when one child is added
    return new Promise((resolve) => {
      this.userCapacitiesRef.child(userUID).on('child_added', (snap) => {
        this.capacities.child(snap.key).once('value', snapshot => resolve(snapshot.val()));
      });
    });
  }
  */

  singIn({ email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signOut({ email, password }) {
    return firebase.auth().signOut();
  }

  createUser({ email, password }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  onAuthStateChanged(user) {
    if (user) return user;
    return {};
  }

  postData(data, ...updateRefs) {
    // Get a key for a new Post.
    const newDemandKey = this.demandsRef.push().key;

    // Write the new post's data simultaneously to multiple refs
    const updates = {};
    updateRefs.forEach((ref) => {
      updates[`/${ref}/${newDemandKey}`] = data;
    });

    return this.rootRef.update(updates);
  }
}
