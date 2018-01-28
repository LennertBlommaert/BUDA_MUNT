export default class User {
  id = ''
  displayName = ''
  email = ''
  photoURL = ''

  constructor(user) {
    this.setProps(user);
  }

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
}
