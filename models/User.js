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
  }) {
    this.uid = uid;
    this.name = name;
    this.firstName = firstName;
    this.email = email;
    this.photoURL = photoURL;
    this.threads = threads;
  }

  @action
  addCapacity(capacity, uid) {
    this.capacities.push(new Capacity({ name: capacity.name, uid }));
  }
}
