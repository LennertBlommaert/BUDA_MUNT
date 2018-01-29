import {
  observable,
  action,
  computed,
} from 'mobx';

import User from '../models/User';
import Project from '../models/Project';
import Demand from '../models/Demand';

// import AsyncStorage from 'react-native';

import FirebaseService from '../utils/firebaseService';

class Store {
  @observable
  user = new User({});

  @observable
  projects = []

  @observable
  contacts = []

  @observable
  demands = []

  // LogIn
  // NOTE: currently bypassing loginflow, strings should be empty
  @observable
  email = 'test@test.be'

  @observable
  password = 'testtest'

  // Post demand
  @observable
  title = ''

  @observable
  desc = ''

  @observable
  reward = 0

  minReward = 0
  maxReward = 200

  constructor() {
    this.fb = new FirebaseService();
    this.init();
  }

  init = () => {
    this.signIn();
  }

  updateData = () => {
    this.updateProjects();
    this.updateContacts();
    this.updateDemands();
  }

  updateProjects = () => {
    this.fb.projectsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addProjects(snapshot.val());
    });
  }

  @action
  _addProjects = (projects) => {
    // Firebase db works with objects
    Object.keys(projects).forEach((key) => {
      this.projects.push(
        new Project(projects[key], key),
      );
    });
  }

  updateDemands = () => {
    this.fb.demandsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addDemands(snapshot.val());
    });
  }

  postDemand = () => {
    // Get a key for a new Post
    const postData = { name: this.title, desc: this.desc, userId: `${this.user.uid}`, reward: this.reward };

    this.fb.postData(postData, 'demands');
  }

  @action
  _addDemands = (demands) => {
    Object.keys(demands).forEach((key) => {
      this.demands.push(
        new Demand(demands[key], key),
      );
    });
  }

  @action
  updateContacts = () => {
    this.fb.contactsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this.contacts = snapshot.val();
    });
  }

  signIn = () => {
    this.fb.singIn({ email: this.email, password: this.password })
      .then((user) => {
        this.user.setProps(user);
        this._signIn(user);
        this.updateData();
      })
      .catch(err => console.warn(err));
  }

  createUser = () => {
    this.fb.createUser({ email: this.email, password: this.password })
      .then((user) => {
        this.user.setProps(user);
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  @action
  _signIn = ({ uid }) => {
    this.fb.usersRef.child(uid)
      .on('value', (snap) => {
        if (snap.val() !== null) this.user.setProps(snap.val());
      });

    this.fb.userCapacitiesRef.child(uid).on('child_added', (snap) => {
      this.fb.capacitiesRef.child(snap.key).once('value', snapshot => this.user.addCapacity(snapshot.val()));
    });
  }

  // Post demands
  @action
  setTitle = (title) => {
    this.title = title;
  }

  @action
  setDesc = (desc) => {
    this.desc = desc;
  }

  @action
  setReward = (reward) => {
    this.reward = reward;
  }

  //  LogIn
  @action
  setEmail = (email) => {
    this.email = email;
  }

  @action
  setPassword = (password) => {
    this.password = password;
  }

  @computed
  get userIsSignedIn() {
    return true;
  }

  // NOTE: Check if user is already logged in
  // Can be replaced by fetches?
  // @computed
  // get userIsSignedIn() {
  //   return (async () => {
  //     try {
  //       const userIsSignedIn = await AsyncStorage.getItem('userIsSignedIn');
  //       if (userIsSignedIn !== null) return userIsSignedIn;
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //
  //     return false;
  //   })();
  // }
  //
  // async _setUserSignedInFlag() {
  //   try {
  //     await AsyncStorage.setItem('userIsSignedIn', true);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }
}

const store = new Store();

export default store;
