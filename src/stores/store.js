import {
  observable,
  action
} from 'mobx';

import * as firebase from 'firebase';

import { initializeFirebase, listenFirebaseDatabase } from '../utils/firebaseService';

//import User from '../models/User';

class Store {

  @observable
  user = {}

  @observable
  projects = []

  @observable
  contacts = []

  @observable
  demands = []

  constructor() {
    initializeFirebase();
    this.init();
  }

  @action
  init() {

    this.user = {
      _id: 1,
      firstName: `Lennert`,
      lastName: `Blommaert`,
      coins: 20,
      isActive: true
    }

    this.updateProjects();
  }

  @action
  updateProjects() {
    listenFirebaseDatabase().on('value', (snapshot) => {
      this.projects = snapshot.val();
    });
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
