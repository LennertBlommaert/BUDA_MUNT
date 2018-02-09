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
    balance = '',
    topBucketlistItemName = '',
  }) {
    if (uid !== '') this.uid = uid;
    if (name !== '') this.name = name;
    if (firstName !== '') this.firstName = firstName;
    if (email !== '') this.email = email;
    if (photoURL !== '') this.photoURL = photoURL;
    if (threads !== {}) this.threads = threads;
    if (balance !== '') this.balance = balance;
    if (topBucketlistItemName !== '') this.topBucketlistItemName = topBucketlistItemName;
  }

  @action
  setTopBucketListItemName = ({ name }) => {
    this.topBucketlistItemName = name;
  }

  @action
  addCapacity(capacity, uid) {
    this.capacities.push(new Capacity({ name: capacity.name, uid }));
  }
}
