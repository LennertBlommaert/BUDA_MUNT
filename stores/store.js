import {
  observable,
  action,
  computed,
} from 'mobx';

import User from '../models/User';
import Project from '../models/Project';
import Demand from '../models/Demand';
import Capacity from '../models/Capacity';

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

  @observable
  capacities = []

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

  // Demand Demand
  currentDemandDetailUID = '';

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
    this.updateCapacities();
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

  updateCapacities = () => {
    this.fb.capacitiesRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addCapacities(snapshot.val());
    });
  }

  @action
  _addCapacities = (capacities) => {
    // Firebase db works with objects
    Object.keys(capacities).forEach((key) => {
      this.capacities.push(
        new Capacity({ name: capacities[key].name, uid: key }),
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
      // wait for user data before pushing to demands
      // QUESTION: better to retrieve all users first? and preform a .find?
      this.fb.usersRef.child(demands[key].userId).once('value', (snapshot) => {
        this.demands.push(
          new Demand({
            name: demands[key].name,
            desc: demands[key].desc,
            userId: demands[key].userId,
            reward: demands[key].reward,
            uid: key,
            user: snapshot.val(),
          }),
        );
      });
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

  // DemandDetail
  @computed
  get currentDemandDetail() {
    return this.demands.find(demand => this.currentDemandDetailUID === demand.uid);
  }

  @action
  setCurrentDemandDetailUID = (uid) => {
    this.currentDemandDetailUID = uid;
  }

  // Explore
  @computed
  get feedItems() {
    return [...this.demands, ...this.projects].sort((a, b) => a.name - b.name);
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
