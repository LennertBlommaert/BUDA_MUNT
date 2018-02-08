import { observable, computed, action } from 'mobx';

export default class Project {
  name = ''
  desc = ''
  uid = ''
  stage = ''

  @observable
  voterUIDs = []

  constructor({ name, desc, stage }, uid = '') {
    this.name = name;
    this.desc = desc;
    this.stage = stage;
    this.truncatedDesc = `${desc.substring(0, 240)}${desc.length > 240 ? '...' : ''}`;
    this.uid = uid;
    this.voterUIDs = [];
  }

  @action
  addVoterUID(voter) {
    if (!this.voterUIDs.find(v => v.uid === voter.key)) this.voterUIDs.push(voter);
    // console.warn(this.voterUIDs.find(uid => uid === 's7CVMe57o2QsHZDRv1gZNOyqdLD2') !== undefined);
  }
}
