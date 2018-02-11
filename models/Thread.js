import { observable, action } from 'mobx';

export default class Thread {
  demandId = ''
  projectId = ''
  lastOpenedByUserId = ''
  uid = ''
  lastMessage = {}
  members = {}
  demand = {}
  otherUser = {}

  @observable
  messages = []

  constructor({ uid, demandId = '', projectId = '', lastMessage = {}, members, otherUser, demand = {}, lastOpenedByUserId }) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessage = lastMessage;
    this.lastMessage.createdAt = new Date(lastMessage.createdAt);
    this.lastMessageTime = `${this.lastMessage.createdAt.getHours() < 10 ? '0' : ''}${this.lastMessage.createdAt.getHours()}:${this.lastMessage.createdAt.getMinutes() < 10 ? '0' : ''}${this.lastMessage.createdAt.getMinutes()}`;
    this.lastMessageTruncatedPayLoad = `${this.lastMessage.payLoad.substring(0, 34)}${this.lastMessage.payLoad.length > 34 ? '...' : ''}`;
    this.members = members;
    this.demand = demand;
    this.otherUser = otherUser;
    this.messages = [];
    this.containsUnreadMessages = this.getContainsUnreadMessages(this.members, this.lastMessage.createdAt, this.lastMessage.senderId);
  }

  getContainsUnreadMessages(members, lastMessageCreatedAt, lastMessageSenderId) {
    const currentUserUID = Object.keys(members).find(k => k !== this.otherUser.uid);
    const currentUser = members[`${currentUserUID}`];
    if (!currentUser.lastOpenedAt && (lastMessageSenderId !== currentUser.uid)) return true;
    if (!currentUser.lastOpenedAt && (lastMessageSenderId === currentUser.uid)) return false;
    return new Date(currentUser.lastOpenedAt) < lastMessageCreatedAt;
  }

  @action
  addMessage(message) {
    this.messages.push(message);
  }
}
