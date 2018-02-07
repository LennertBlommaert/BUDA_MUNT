export default class Project {
  name = ''
  desc = ''
  uid = ''
  stage = ''
  votes = 0

  constructor({ name, desc, stage }, uid = '') {
    this.name = name;
    this.desc = desc;
    this.stage = stage;
    this.truncatedDesc = `${desc.substring(0, 240)}${desc.length > 240 ? '...' : ''}`;
    this.uid = uid;
    this.votes = 1;
  }
}
