export default class Project {
  name = ''
  desc = ''
  uid = ''

  constructor({ name, desc }, uid = '') {
    this.name = name;
    this.desc = desc;
    this.uid = uid;
  }
}
