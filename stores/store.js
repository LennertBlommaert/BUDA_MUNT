import {
  observable,
  action,
} from 'mobx';

import { initializeFirebase, listenFirebaseDatabase, singInFirebase, createUserFirebase } from '../utils/firebaseService';

class Store {
  @observable
  user = {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
  };

  @observable
  projects = []

  @observable
  contacts = []

  @observable
  demands = []

  //  LogIn
  @observable
  email = ''

  @observable
  password = ''

  constructor() {
    initializeFirebase();
    this.init();
  }

  init() {
    // this.user = {
    //   _id: 1,
    //   firstName: 'Lennert',
    //   lastName: 'Blommaert',
    //   coins: 20,
    //   isActive: true,
    // };

    this.updateProjects();
    this.updateContacts();
  }

  @action
  updateProjects() {
    listenFirebaseDatabase().on('value', (snapshot) => {
      this.projects = snapshot.val();
    });
  }

  @action
  updateContacts() {
    this.contacts = [
      {
        id: 1,
        firstName: 'Stuurman Francis',
        lastName: 'De Clercq',
        coins: 20,
        isActive: true,
      },
      {
        id: 2,
        firstName: 'Nico',
        lastName: 'De Batser',
        coins: 20,
        isActive: true,
      },
      {
        id: 3,
        firstName: 'Piet',
        lastName: 'Piraat',
        coins: 20,
        isActive: true,
      },
    ];
  }

  signIn = () => {
    singInFirebase({ email: this.email, password: this.password })
      .then(user => this._signIn(user))
      .catch(err => console.warn(err));
  }

  createUser = () => {
    createUserFirebase({ email: this.email, password: this.password })
      .then(user => this._signIn(user))
      .catch(err => console.warn(err));
  }

  @action
  //  In an observableObject only the properties are observed
  _signIn = (user) => {
    // Better with for in loop
    this.user.uid = user.uid;
    this.user.displayName = user.displayName;
    this.user.email = user.email;
    this.user.photoURL = user.photoURL;
  }

  //  LogIn
  @action
  setEmail = (email) => {
    this.email = email;
  }

  //  LogIn
  @action
  setPassword = (password) => {
    this.password = password;
  }
}

const store = new Store();

export default store;
