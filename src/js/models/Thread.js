export default class Thread {
  demandId = ``
  projectId = ``
  uid = ``
  lastMessageId = ``
  members = {}
  demand = {}
  otherUser = {}

  constructor({uid, demandId = ``, projectId = ``, lastMessageId = ``, members, otherUser, demand}) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessageId = lastMessageId;
    this.members = members;
    this.demand = demand;
    this.otherUser = otherUser;
  }
}
