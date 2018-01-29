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

  // @observable
  // user = {
  //   uid: '',
  //   name: '',
  //   email: '',
  //   firstName: '',
  //   photoURL: '',
  // };

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

  constructor() {
    this.fb = new FirebaseService();
    this.init();
  }

  init() {
    this.signIn();
  }

  updateData() {
    this.postDemands();
    this.updateProjects();
    this.updateContacts();
    this.updateDemands();
  }

  updateProjects() {
    this.fb.projectsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addProjects(snapshot.val());
    });
  }

  @action
  _addProjects(projects) {
    Object.keys(projects).forEach((key) => {
      this.projects.push(
        new Project(projects[key], key),
      );
      console.log(this.projects);
    });
  }

  updateDemands() {
    this.fb.demandsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addDemands(snapshot.val());
    });
  }

  postDemands() {
    // Get a key for a new Post.
    const postData = {
      name: 'Test tes',
      desc: 'Tienduizend regenbogen kleuren de horizon',
      userId: `${this.user.uid}`,
    };

    this.fb.postData(postData, 'demands');
  }

  @action
  _addDemands(demands) {
    Object.keys(demands).forEach((key) => {
      this.demands.push(
        new Demand(demands[key], key),
      );
    });
  }

  @action
  updateContacts() {
    this.fb.contactsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this.contacts = snapshot.val();
    });
  }

  signIn = () => {
    this.fb.singIn({ email: this.email, password: this.password })
      .then((user) => {
        this._setUserProps(user);
        this._signIn(user);
        this.updateData();
      })
      .catch(err => console.warn(err));
  }

  createUser = () => {
    this.fb.createUser({ email: this.email, password: this.password })
      .then((user) => {
        this._setUserProps(user);
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  @action
  _signIn = ({ uid }) => {
    this.fb.usersRef.child(uid)
      .on('value', (snap) => {
        if (snap.val() !== null) this._setUserProps(snap.val());
      });

    this.fb.userCapacitiesRef.child(uid).on('child_added', (snap) => {
      this.fb.capacitiesRef.child(snap.key).once('value', snapshot => this.user.addCapacity(snapshot.val()));
    });
  }

  //  In an observableObject only the properties are observed
  @action
  _setUserProps = ({ uid, email, name, firstName, photoURL, capacity }) => {
    this.user.uid = uid;
    this.user.name = name;
    this.user.email = email;
    this.user.firstName = firstName;
    this.user.photoURL = photoURL;
  }

  //  LogIn
  @action
  setEmail(email) {
    this.email = email;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  @computed
  get userIsSignedIn() {
    return this.user.uid !== '';
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
