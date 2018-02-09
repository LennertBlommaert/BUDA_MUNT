import { observable, action } from 'mobx';

export default class Thread {
  demandId = ''
  projectId = ''
  uid = ''
  lastMessage = {}
  members = {}
  demand = {}
  otherUser = {}

  @observable
  messages = []

  constructor({ uid, demandId = '', projectId = '', lastMessage = {}, members, otherUser, demand = {} }) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessage = lastMessage;
    this.lastMessageTruncatedPayLoad = `${this.lastMessage.payLoad.substring(0, 34)}${this.lastMessage.payLoad.length > 34 ? '...' : ''}`;
    this.members = members;
    this.demand = demand;
    this.otherUser = otherUser;
    this.messages = [];
  }

  @action
  addMessage(message) {
    this.messages.push(message);
  }
}
