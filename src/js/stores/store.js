import {
  observable,
  action,
  computed,
} from 'mobx';

import User from '../models/User';
import Project from '../models/Project';
import Demand from '../models/Demand';
import Capacity from '../models/Capacity';
import Thread from '../models/Thread';

// import AsyncStorage from 'react-native';

import FirebaseService from '../utils/firebaseService';

class Store {
  @observable
  user = new User({});

  @observable
  projects = []

  @observable
  demands = []

  @observable
  capacities = []

  // LogIn
  // NOTE: currently bypassing loginflow, strings should be empty
  @observable
  email = `test@test.be`

  @observable
  password = `testtest`

  // Post demand
  @observable
  title = ``

  @observable
  desc = ``

  @observable
  reward = 0

  minReward = 0
  maxReward = 200

  // Chat
  @observable
  threadMessages = []

  @observable
  userThreads = []

  // Demand Detail
  currentDemandDetailUID = ``;

  // Project Detail
  currentDemandProjectDetailUID = ``;

  constructor() {
    this.fb = new FirebaseService();
    this.init();
  }

  init = () => {
    this.signIn();
  }

  updateData = () => {
    this.updateProjects();
    this.updateDemands();
    this.updateCapacities();
    this.updateUserThreads();
    // this.updateThreadMessages();
  }

  updateUserThreads = () => {
    Object.keys(this.user.threads).forEach(key => {
      this.fb.threadsRef.child(key).on(`value`, snapshot => {
        const threadData = snapshot.val();
        threadData.uid = key;

        threadData.demand = this.demands.find(d => d.uid === threadData.uid);

        const otherUserId = Object.keys(threadData.members).find(k => k !== this.user.uid);
        threadData.otherUser = threadData.members[otherUserId];

        this._addUserThread(threadData);
      });
    });
  }

  @action
  _addUserThread = thread => {
    this.userThreads.push(new Thread(thread));
  }

  updateProjects = () => {
    this.fb.threadMessagesRef.on(`value`, snapshot => {
      if (snapshot.val() !== null) this._addProjects(snapshot.val());
    });
  }

  // Projects
  updateProjects = () => {
    this.fb.projectsRef.on(`value`, snapshot => {
      if (snapshot.val() !== null) this._addProjects(snapshot.val());
    });
  }

  @action
  _addProjects = projects => {
    // Firebase db works with objects
    Object.keys(projects).forEach(key => {
      this.projects.push(
        new Project(projects[key], key),
      );
    });
  }

  // Capacities
  updateCapacities = () => {
    this.fb.capacitiesRef.on(`value`, snapshot => {
      if (snapshot.val() !== null) this._addCapacities(snapshot.val());
    });
  }

  @action
  _addCapacities = capacities => {
    // Firebase db works with objects
    Object.keys(capacities).forEach(key => {
      this.capacities.push(
        new Capacity({name: capacities[key].name, uid: key}),
      );
    });
  }

  postDemand = () => {
    const postData = {name: this.title, desc: this.desc, userId: `${this.user.uid}`, reward: this.reward};
    this.fb.postData(postData, `demands`);
  }

  updateDemands = () => {
    this.fb.demandsRef.on(`value`, snapshot => {
      if (snapshot.val() !== null) this._addDemands(snapshot.val());
    });
  }

  @action
  _addDemands = demands => {
    Object.keys(demands).forEach(key => {
      const demand = new Demand(demands[key]);
      demand.uid = key;

      this.demands.push(
        demand,
      );
    });

    this._addCapacitiesToDemands();
    this._addUserToDemands();
  }

  @action
  _addCapacitiesToDemands = () => {
    this.demands.forEach(d => {
      this.fb.demandCapacitiesRef.child(d.uid).on(`child_added`, snap => {
        this.fb.capacitiesRef.child(snap.key).once(`value`, snapshot => d.addCapacity(snapshot.val(), snap.key));
      });
    });
  }

  @action
  _addUserToDemands = () => {
    this.demands.forEach(d => {
      this.fb.usersRef.child(d.userId).once(`value`, snapshot => {
        d.user.setProps(snapshot.val());
      });
    });
  }

  signIn = () => {
    this.fb.singIn({email: this.email, password: this.password})
      .then(user => {
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  createUser = () => {
    this.fb.createUser({email: this.email, password: this.password})
      .then(user => {
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  @action
  _signIn = ({uid}) => {
    this.fb.usersRef.child(uid)
      .on('value', (snap) => { //eslint-disable-line
        if (snap.val() !== null) this.user.setProps(snap.val());
        this.updateData();
      });

    this.fb.userCapacitiesRef.child(uid).on(`child_added`, snap => {
      this.fb.capacitiesRef.child(snap.key).once(`value`, snapshot => this.user.addCapacity(snapshot.val(), snap.key));
    });
  }

  // Post demands
  @action
  setTitle = title => {
    this.title = title;
  }

  @action
  setDesc = desc => {
    this.desc = desc;
  }

  @action
  setReward = reward => {
    this.reward = reward;
  }

  // DemandDetail
  @computed
  get currentDemandDetail() {
    return this.demands.find(demand => this.currentDemandDetailUID === demand.uid);
  }

  @action
  setCurrentDemandDetailUID = uid => {
    this.currentDemandDetailUID = uid;
  }

  // ProjectDetail
  @computed
  get currentProjectDetail() {
    return this.projects.find(project => this.currentProjectDetailUID === project.uid);
  }

  @action
  setCurrentProjectDetailUID = uid => {
    this.currentProjectDetailUID = uid;
  }

  // Explore
  @computed
  get feedItems() {
    return [...this.demands, ...this.projects].sort((a, b) => a.name - b.name);
  }

  //  LogIn
  @action
  setEmail = email => {
    this.email = email;
  }

  @action
  setPassword = password => {
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
