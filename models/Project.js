import { observable, action } from 'mobx';
import User from './User';

export default class Project {
  name = ''
  desc = ''
  uid = ''
  stage = ''
  userId = ''
  type = 1

  @observable
  voterUIDs = []

  @observable
  user = new User({});

  constructor({ name, desc, stage, userId }, uid = '') {
    this.name = name;
    this.desc = desc;
    this.stage = stage;
    this.truncatedDesc = `${desc.substring(0, 240)}${desc.length > 240 ? '...' : ''}`;
    this.uid = uid;
    this.userId = userId;
    this.voterUIDs = [];
    this.type = 1;
  }

  @action
  addVoterUID(voter) {
    if (!this.voterUIDs.find(v => v.uid === voter.key)) this.voterUIDs.push(voter);
    // console.warn(this.voterUIDs.find(uid => uid === 's7CVMe57o2QsHZDRv1gZNOyqdLD2') !== undefined);
  }
}
