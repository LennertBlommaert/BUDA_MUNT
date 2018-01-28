export default class User {
  _id = ``
  firstName = ``
  lastName = ``
  coins = 0
  isActive = true

  constructor({
    _id,
    firstName,
    lastName,
    coins,
    isActive
  }) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.coins = coins;
    this.isActive = isActive;
  }
};
