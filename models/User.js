import {
  observable,
  action,
} from 'mobx';

export default class User {
  @observable
  uid = ''

  @observable
  firstName = ''

  @observable
  lastName = ''

  @observable
  email = ''

  @observable
  photoURL = ''

  @observable
  capacities = []

  constructor(user) {
    this.setProps(user);
  }

  @action
  setProps({
    uid,
    displayName,
    email,
    photoURL,
  }) {
    this.uid = uid;
    this.displayName = displayName;
    this.email = email;
    this.photoURL = photoURL;
  }

  @action
  addCapacity(capacity) {
    this.capacities.push(capacity);
  }
}
