export default class Demand {
  name = ''
  desc = ''
  userId = ''
  uid = ''
  coins = 0

  constructor({ name = '', desc = '', userId = '', reward = 0, uid = '', user }) {
    this.name = name;
    this.desc = desc;
    this.userId = userId;
    this.uid = uid;
    this.reward = reward;
    this.user = user;
  }
}
