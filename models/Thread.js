import {
  observable,
} from 'mobx';

import User from './User';

export default class Thread {
  demandId = ''
  projectId = ''
  uid = ''
  lastMessageId = ''
  members = {}

  @observable
  otherUser = ''

  @observable
  demand = ''

  constructor({ uid, demandId = '', projectId = '', lastMessageId = '', members, otherUser, demand }) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessageId = lastMessageId;
    this.otherUser = otherUser;
    this.demand = demand;
  }
}
