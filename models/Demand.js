export default class Demand {
  name = ''
  desc = ''
  userId = ''
  uid = ''

  constructor({ name, desc, userId }, uid) {
    this.name = name;
    this.desc = desc;
    this.userId = userId;
    this.uid = uid;
  }
}
