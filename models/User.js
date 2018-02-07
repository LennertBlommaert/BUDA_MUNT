import {
  observable,
  action,
} from 'mobx';

import Capacity from './Capacity';

export default class User {
  @observable
  uid = ''

  @observable
  firstName = ''

  @observable
  name = ''

  @observable
  email = ''

  @observable
  photoURL = ''

  @observable
  capacities = []

  @observable
  threads = {}

  @observable
  balance = 0

  @observable
  topBucketlistItemName = ''

  constructor(user) {
    this.setProps(user);
  }

  @action
  setProps({
    uid = '',
    email = '',
    name = '',
    firstName = '',
    photoURL = '',
    threads = {},
    balance = 0,
    topBucketlistItemName = '',
  }) {
    this.uid = uid;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.photoURL = photoURL;
    this.threads = threads;
    this.balance = balance;
    this.topBucketlistItemName = topBucketlistItemName;
  }

  @action
  setTopBucketListItemName = ({ name }) => {
    console.warn(name);
    this.topBucketlistItemName = name;
  }

  @action
  addCapacity(capacity, uid) {
    this.capacities.push(new Capacity({ name: capacity.name, uid }));
  }
}
