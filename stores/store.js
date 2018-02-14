import {
  observable,
  action,
  computed,
} from 'mobx';

import User from '../models/User';
import Project from '../models/Project';
import Demand from '../models/Demand';
import Capacity from '../models/Capacity';
import Message from '../models/Message';
import Thread from '../models/Thread';

// import AsyncStorage from 'react-native';

import FirebaseService from '../utils/firebaseService';

class Store {
  // @observable
  // user = new User({});

  @observable
  user = new User({});

  @computed
  get currentUserUID() {
    return this.user.uid;
  }

  @computed
  get userChildAccounts() {
    if (this.currentUserUID === 's7CVMe57o2QsHZDRv1gZNOyqdLD2') {
      return [{
        uid: 'WCfkzRyAV9UkIs4HfVFFJGxR4Z63',
        email: 'dirk.paenhout@test.be',
        name: 'Paenhout',
        firstName: 'Charles',
        photoURL: 'charles',
        threads: {},
        balance: 20,
      }];
    }
    if (this.currentUserUID === 'WCfkzRyAV9UkIs4HfVFFJGxR4Z63') {
      return [{
        uid: 's7CVMe57o2QsHZDRv1gZNOyqdLD2',
        email: 'test@test.be',
        name: 'Paenhout',
        firstName: 'Lisa',
        photoURL: 'lisa',
      }];
    }

    return [];
  }

  @observable
  projects = []

  @observable
  projectStages = []

  // @observable
  // demands = [{
  //   name: 'Test',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   truncatedDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq...',
  //   userId: 123,
  //   reward: 500,
  //   user: {
  //     uid: 123,
  //     email: '',
  //     name: 'Testertje',
  //     firstName: 'Test',
  //     photoURL: '',
  //     threads: {},
  //     balance: 0,
  //     topBucketlistItemName: 'Testen eja',
  //   },
  //   capacities: [new Capacity({ name: 'Test', uid: 1 })],
  // }]

  @observable
  demands = []

  @observable
  capacities = []

  @observable
  userThreadMessages = []

  // LogIn
  // NOTE: currently bypassing loginflow, strings should be empty
  @observable
  // email = 'annette.vandevelde@test.be'
  // email = 'test@test.be'
  // email = 'dirk.paenhout@test.be'
  // email = 'fabienne.deleersnyder@test.be'
  email = 'lars.decoster@test.be'
  // email = 'tim.langereat@test.be'
  // email = 'de.klein.keuken@test.be'
  // email = 'budascoop@test.be'
  // email = 'zorggroep@test.be'

  @observable
  password = 'testtest'

  // Demand Detail
  currentDemandDetailUID = '';

  // Project Detail
  currentDemandProjectDetailUID = '';

  constructor() {
    this.fb = new FirebaseService();
    this.init();
  }

  init = () => {
    this.signIn();
  }

  updateData = () => {
    this.updateDemands();
    this.updateCapacities();
    this.updateUserThreads();
    this.updateProjects();
    this.updateThreadMessages();
  }

  // NOTE: needs to be written more performantally
  updateUserThreads = () => {
    Object.keys(this.user.threads).forEach((key) => {
      this.fb.threadsRef.child(key).on('value', (snapshot) => {
        const threadData = snapshot.val();
        threadData.uid = key;

        const otherUserId = Object.keys(threadData.members).find(k => k !== this.user.uid);
        threadData.otherUser = threadData.members[otherUserId];

        this._addUserThread(threadData);
      });
    });
  }

  @action
  _addUserThread = (thread) => {
    this.userThreads = this.userThreads.filter(t => t.uid !== thread.uid);
    this.userThreads.push(new Thread(thread));
    // this._addMessagesToUserThreads();
  }

  // @action
  // _addMessagesToUserThreads = () => {
  //   this.userThreads.forEach((t) => {
  //     this.fb.threadMessagesRef.child(t.uid).on('child_added', (snap) => {
  //       t.addMessage(snap.val());
  //     });
  //   });
  // }

  @action
  updateThreadMessages = () => {
    Object.keys(this.user.threads).forEach((key) => {
      this.fb.threadMessagesRef.child(key).on('child_added', (snap) => {
        this.userThreadMessages.push(
          new Message(snap.val(), snap.key, key),
        );
      });
    });
  }

  @computed
  get currentThreadDetailMessages() {
    const currentThreadDetailMessagesUIDs = this.userThreadMessages.filter(m => m.threadUID === this.currentThreadDetailUID).map(m => m.uid);
    const currentThreadDetailUniqueMessagesUIDs = [...new Set(currentThreadDetailMessagesUIDs)];

    const messages = currentThreadDetailUniqueMessagesUIDs.map(uid => this.userThreadMessages.find(m => m.uid === uid));

    return messages;
  }

  // @action
  // _updateThreadMessages = (thread) => {
  //   this.user.threads.forEach(t => {
  //     t.messages.push
  //   });
  // }

  // updateProjects = () => {
  //   this.fb.threadMessagesRef.on('value', (snapshot) => {
  //     if (snapshot.val() !== null) this._addProjects(snapshot.val());
  //   });
  // }

  // Projects
  maxProjectVotes = 5;

  updateProjects = () => {
    this.fb.projectProposalsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addProjects(snapshot.val());
    });
  }

  @action
  _addProjects = (projects) => {
    // Firebase db works with objects
    this.projects = Object.keys(projects).map(key => new Project(projects[key], key));
    this._addVoterUIDsToProjects();
    this._addUserToProjects();
  }

  @action
  _addUserToProjects = () => {
    this.projects.forEach((d) => {
      this.fb.usersRef.child(d.userId).once('value', (snapshot) => {
        d.user.setProps(snapshot.val());
        d.user.setProps({ uid: snapshot.key });
        this.fb.demandsRef.orderByChild('isBucketListItem_userId').equalTo(`1_${d.userId}`).on('child_added', (snap) => {
          d.user.setTopBucketListItemName(snap.val());
        });
      });
    });
  }

  @action
  _addVoterUIDsToProjects = () => {
    this.projects.forEach((p) => {
      this.fb.projectProposalVotersRef.child(p.uid).on('child_added', (snap) => {
        if (snap.val() !== null) p.addVoterUID(snap.key);
        // this.fb.usersRef.child(snap.key).once('value', snapshot => d.addCapacity(snapshot.val(), snap.key));
      });
    });
  }

  postProject = () => {
    if (this.user.uid !== '') {
      this._postProjectData();
    }
  }

  _postProjectData = () => {
    const data = { name: this.titlePostProject, desc: this.descPostProject, userId: `${this.user.uid}`, stage: 'voorstel', createdAt: this.fb.serverTime };
    return this.fb.postDataSingleRef({ data, updateRootRef: 'projectProposals' });
  }

  voteProjectProposal = (projectUID) => {
    this.updateUserBalance();
    this.postProjectProposalVoter(projectUID);
  }

  updateUserBalance = (price = -1) => {
    // const data = { balance: this.user.balance += price };
    // this.fb.usersRef.child(this.user.uid).child('balance').setValue(this.user.balance += price);
    this.fb.usersRef.child(this.user.uid).update({
      balance: this.user.balance += price,
    });
    // return this.fb.updateDataSingleRef({ data, updateRootRef: `users/${this.user.uid}/balance` });
  }

  postProjectProposalVoter = (projectUID) => {
    const data = { name: this.user.firstName };
    return this.fb.postDataSingleRef({ data, updateRootRef: `projectProposalVoters/${projectUID}`, key: this.user.uid });
  }

  // Capacities
  updateCapacities = () => {
    this.fb.capacitiesRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addCapacities(snapshot.val());
    });
  }

  @action
  _addCapacities = (capacities) => {
    // Firebase db works with objects
    this.capacities = Object.keys(capacities).map(key => new Capacity({ name: capacities[key].name, uid: key }));
    // Object.keys(capacities).map((key) => {
    //   this.capacities.push(
    //     new Capacity({ name: capacities[key].name, uid: key }),
    //   );
    // });
  }

  postDemand = () => {
    if (this.user.uid !== '') {
      const demandKey = this._postDemandData();
      this._postDemandCapacitiesData(demandKey);
    }

    this.clearPostDemandForm();
  }

  _postDemandData = () => {
    const data = {
      name: this.title,
      desc: this.desc,
      userId: `${this.user.uid}`,
      reward: this.reward,
      isBucketListItem: this.isBucketListItem ? 1 : 0,
      isBucketListItem_userId: `${this.isBucketListItem ? 1 : 0}_${this.user.uid}`,
      createdAt: this.fb.serverTime,
    };
    return this.fb.postDataSingleRef({ data, updateRootRef: 'demands' });
  }

  _postDemandCapacitiesData = (key) => {
    const data = {};

    this.selectedCapacities.forEach((c) => {
      data[c.uid] = { name: c.name };
    });

    this.fb.postDataSingleRef({ data, updateRootRef: 'demandCapacities', key });
  }

  @action
  _addDemands = (demands) => {
    this.demands = Object.keys(demands).map((key) => {
      const demand = new Demand(demands[key]);
      demand.uid = key;

      return demand;
    });

    this._addCapacitiesToDemands();
    this._addUserToDemands();
  }

  updateDemands = () => {
    this.fb.demandsRef.on('value', (snapshot) => {
      if (snapshot.val() !== null) this._addDemands(snapshot.val());
    });
  }

  @action
  _addCapacitiesToDemands = () => {
    this.demands.forEach((d) => {
      this.fb.demandCapacitiesRef.child(d.uid).on('child_added', (snap) => {
        this.fb.capacitiesRef.child(snap.key).once('value', snapshot => d.addCapacity(snapshot.val(), snap.key));
      });
    });
  }

  @action
  _addUserToDemands = () => {
    this.demands.forEach((d) => {
      this.fb.usersRef.child(d.userId).once('value', (snapshot) => {
        d.user.setProps(snapshot.val());
        d.user.setProps({ uid: snapshot.key });
        this.fb.demandsRef.orderByChild('isBucketListItem_userId').equalTo(`1_${d.userId}`).on('child_added', (snap) => {
          d.user.setTopBucketListItemName(snap.val());
        });
      });
    });
  }

  acceptDemand = (uid) => {
    const demand = this.demands.find(d => d.uid === uid);
    if (!demand) return;
    // this.postThreadUsers(demand);

    const message = {
      payLoad: `Hey ${demand.user.firstName}, ik wil je graag helpen met ${demand.name}`,
      senderId: this.user.uid,
      createdAt: this.fb.serverTime,
    };

    const members = {};
    members[`${this.user.uid}`] = this.user;
    members[`${demand.user.uid}`] = demand.user;

    const threadUID = this.postThread(demand, members, message);
    this.postFirstMessage(message, threadUID);
    this.postThreadUsers(members, threadUID);
    this.updateThreadUsers(members, threadUID, demand.name);
  }

  postThread = (demand, members, message) => {
    const data = { demand, demandId: `${demand.uid}`, members, lastMessage: message };
    return this.fb.postDataSingleRef({ data, updateRootRef: 'threads' });
  }

  postFirstMessage = (data, threadUID) => {
    this.fb.postDataSingleRef({ data, updateRootRef: 'threadMessages', updateRef: `${threadUID}` });
  }

  postThreadUsers = (data, threadUID) => {
    this.fb.postDataSingleRef({ data, updateRootRef: 'threadUsers', key: `${threadUID}` });
    // this.fb.postDataSingleRef({ members, updateRootRef: `threadUsers/${threadUID}` });
  }

  updateThreadUsers = (members, threadUID, name) => {
    Object.keys(members).map(key => this.fb.postDataSingleRef({ updateRootRef: `users/${key}/threads`, data: name, key: `${threadUID}` }));
  };

  updateThreadLastOpened = () => {
    this.fb.threadsRef.child(this.currentThreadDetailUID).child('members').child(`${this.currentUserUID}`).update({
      lastOpenedAt: this.fb.serverTime,
    });
  };

  // DemandDetail
  @computed
  get currentDemandDetail() {
    return this.demands.find(demand => this.currentDemandDetailUID === demand.uid);
  }

  @action
  setCurrentDemandDetailUID = (uid) => {
    this.currentDemandDetailUID = uid;
  }

  // user

  signIn = () => {
    this.fb.singIn({ email: this.email, password: this.password })
      .then((user) => {
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  signOut = () => {
    this.fb.signOut();
  }

  signInOutTest = () => {
    this.signOut();
    this.email === 'test@test.be' ? this.email = 'dirk.paenhout@test.be' : this.email = 'test@test.be';
    this.signIn();
  }

  createUser = () => {
    this.fb.createUser({ email: this.email, password: this.password })
      .then((user) => {
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  signInOut = (email) => {
    this.signOut();
    this.email = email;
    this.signIn();
  }

  createUser = () => {
    this.fb.createUser({ email: this.email, password: this.password })
      .then((user) => {
        this._signIn(user);
      })
      .catch(err => console.warn(err));
  }

  @action
  _signIn = ({ uid }) => {
    this.fb.usersRef.child(uid)
      .on('value', (snap) => { //eslint-disable-line
        const userData = snap.val();
        userData.uid = uid;

        this.user.setProps(userData);
        this.updateData();
      });

    this.fb.demandsRef.orderByChild('isBucketListItem_userId').equalTo(`1_${uid}`).on('child_added', (snap) => {
      this.user.setTopBucketListItemName(snap.val());
    });

    this.fb.userCapacitiesRef.child(uid).on('child_added', (snap) => {
      this.fb.capacitiesRef.child(snap.key).once('value', snapshot => this.user.addCapacity(snapshot.val(), snap.key));
    });
  }

  // Chat / threads
  @observable
  message = ''

  @action
  setMessage = (message) => {
    this.message = message;
  }

  @observable
  threadMessages = []

  @observable
  userThreads = []

  @observable
  currentThreadDetailUID = ''

  @computed
  get anyUnreadMessages() {
    const unreadThreads = this.userThreads.filter(t => t.containsUnreadMessages);
    return unreadThreads.length > 0;
  }

  @computed
  get currentThread() {
    return this.userThreads.find(t => t.uid === this.currentThreadDetailUID);
  }

  @action
  setCurrentThreadDetailUID = (uid) => {
    this.currentThreadDetailUID = uid;
  }

  postMessage = ({ message, threadId }) => {
    const data = { senderId: this.user.uid, createdAt: this.fb.serverTime };

    if (message) {
      data.payLoad = message;
    } else {
      data.payLoad = this.message;
    }

    if (threadId) {
      this.fb.postDataSingleRef({ data, updateRootRef: `threadMessages/${threadId}` });
      this.fb.threadsRef.child(`${threadId}`).update({
        lastMessage: data,
      });
    } else {
      this.fb.postDataSingleRef({ data, updateRootRef: `threadMessages/${this.currentThreadDetailUID}` });
      this.fb.threadsRef.child(`${this.currentThreadDetailUID}`).update({
        lastMessage: data,
      });
    }

    this.clearMessage();
    this.updateThreadLastOpened();
  }

  @action
  clearMessage = () => {
    this.message = '';
  }

  // Post projects
  @observable
  titlePostProject = ''

  @observable
  descPostProject = ''

  @observable
  currentInputIndexPostProject = 0;

  maxInputIndexPostProject = 1;

  @computed
  get enableNextInputButtonPostProject() {
    if (this.currentInputIndex === 0) return this.titlePostProject.length > 0;
    if (this.currentInputIndex === 1) return this.descPostProject.length > 0;
    return true;
  }

  @computed
  get enablePreviousInputButtonPostProject() {
    return this.currentInputIndexPostProject > 0;
  }

  @action
  nextInputIndexPostProject = () => {
    // if (this.currentInputIndex < this.maxInputIndex) this.currentInputIndex += 1;
    this.currentInputIndexPostProject += 1;
  }

  @action
  previousInputIndexPostProject = () => {
    if (this.currentInputIndexPostProject > 0) this.currentInputIndexPostProject -= 1;
  }

  @computed
  get endOfInputsPostProject() {
    return this.currentInputIndexPostProject > this.maxInputIndexPostProject;
  }

  @action
  setTitlePostProject = (title) => {
    this.titlePostProject = title;
  }

  @action
  setDescPostProject = (desc) => {
    this.descPostProject = desc;
  }

  @computed
  get truncatedDescPostProject() {
    return `${this.descPostProject.substring(0, 240)}${this.descPostProject.length > 240 ? '...' : ''}`;
  }

  @action
  clearPostProjectForm = () => {
    this.titlePostProject = '';
    this.descPostProject = '';
  };

  // Post demands
  @observable
  title = ''

  @observable
  desc = ''

  @observable
  reward = 0

  minReward = 0

  @computed
  get maxReward() {
    return this.user.balance;
  }

  @computed
  get rewardToTime() {
    const minutes = this.reward % 60;
    const hours = (this.reward - minutes) / 60;
    return `${hours} ${hours === 1 ? 'uur' : 'uren'} en ${minutes} ${minutes === 1 ? 'minuut' : 'minuten'}`;
  }

  @observable
  currentInputIndex = 0;

  maxInputIndex = 3;

  @observable
  isBucketListItem = false;

  @computed
  get enableNextInputButton() {
    if (this.currentInputIndex === 0) return this.title.length > 0;
    if (this.currentInputIndex === 1) return this.desc.length > 0;
    if (this.currentInputIndex === 2) return this.reward > 0;
    if (this.currentInputIndex === 3) return this.selectedCapacities.length > 0;
    return true;
  }
  @computed
  get enablePreviousInputButton() {
    return this.currentInputIndex > 0;
  }

  @action
  nextInputIndex = () => {
    // if (this.currentInputIndex < this.maxInputIndex) this.currentInputIndex += 1;
    this.currentInputIndex += 1;
  }

  @action
  previousInputIndex = () => {
    if (this.currentInputIndex > 0) this.currentInputIndex -= 1;
  }

  @action
  setTitle = (title) => {
    this.title = title;
  }

  @action
  setDesc = (desc) => {
    this.desc = desc;
  }

  @computed
  get truncatedDesc() {
    return `${this.desc.substring(0, 240)}${this.desc.length > 240 ? '...' : ''}`;
  }

  @action
  clearPostDemandForm = () => {
    this.title = '';
    this.desc = '';
    this.reward = 0;
    this.currentInputIndex = 0;
  };

  @computed
  get endOfInputs() {
    return this.currentInputIndex > this.maxInputIndex;
  }

  @action
  setReward = (reward) => {
    if (reward === '') reward = this.minReward;

    reward = parseInt(reward, 10);

    if (reward >= this.maxReward) reward = this.maxReward;
    if (reward <= this.minReward) reward = this.minReward;

    this.reward = reward;
  }

  @action
  toggleIsBucketListItem = () => {
    this.isBucketListItem = !this.isBucketListItem;
  }

  @action
  toggleCapacitySelected = (uid) => {
    // const cap = this.capacities.find(c => c.uid === capacity.uid);
    this.capacities = this.capacities.map((c) => {
      if (c.uid === uid) {
        c.toggleSelected();
      }
      return c;
    });
  };

  /*
  clear = () => {
  let {todos} = this.state;
  todos = todos.filter(t => !t.done);
  this.setState({todos});
}
  */

  @computed
  get selectedCapacities() {
    return this.capacities.filter(c => c.selected);
  }

  // ProjectDetail
  @computed
  get currentProjectDetail() {
    return this.projects.find(project => this.currentProjectDetailUID === project.uid);
  }

  @action
  setCurrentProjectDetailUID = (uid) => {
    this.currentProjectDetailUID = uid;
  }

  // Explore
  @observable
  currentSegmentedControlItemIndex = 0

  @action
  setCurrentSegmentedControlItemIndex = (index) => {
    this.currentSegmentedControlItemIndex = index;
  }

  @computed
  get feedItems() {
    const demands = this.demands.filter(d => d.userId !== this.user.uid);
    const projects = this.projects.filter(p => p.userId !== this.user.uid);

    if (this.currentSegmentedControlItemIndex === 1) return [...demands].sort((a, b) => b.createdAt - a.createdAt);
    if (this.currentSegmentedControlItemIndex === 2) return [...projects].sort((a, b) => b.createdAt - a.createdAt);
    return [...demands, ...projects].sort((a, b) => b.createdAt - a.createdAt);
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
    return this.user.uid !== '';
  }

  // Notifications

  @computed
  get numberOfNotifications() {
    if (this.anyUnreadMessages) return 1;
    return 0;
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
