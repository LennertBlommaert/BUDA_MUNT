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
    uid,
    email,
    name,
    firstName,
    photoURL,
    threads,
  }) {
    if (uid !== undefined) this.uid = uid;
    if (name !== undefined) this.name = name;
    if (firstName !== undefined) this.firstName = firstName;
    if (email !== undefined) this.email = email;
    if (photoURL !== undefined) this.photoURL = photoURL;
    if (threads !== undefined) this.threads = threads;
  }

  @action
  addCapacity(capacity, uid) {
    this.capacities.push(new Capacity({ name: capacity.name, uid }));
  }
}
