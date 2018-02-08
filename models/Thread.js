export default class Thread {
  demandId = ''
  projectId = ''
  uid = ''
  lastMessage = {}
  members = {}
  demand = {}
  otherUser = {}

  constructor({ uid, demandId = '', projectId = '', lastMessage = {}, members, otherUser, demand = {} }) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessage = lastMessage;
    this.members = members;
    this.demand = demand;
    this.otherUser = otherUser;
  }
}
