export default class Demand {
  name = ''
  desc = ''
  userId = ''
  uid = ''
  coins = 0

  constructor({ name, desc, userId, reward }, uid = '') {
    this.name = name;
    this.desc = desc;
    this.userId = userId;
    this.uid = uid;
    this.reward = reward;
  }
}
