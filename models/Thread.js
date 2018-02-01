export default class Thread {
  demandId = ''
  projectId = ''
  uid = ''
  lastMessageId = ''
  members = {}

  constructor({ uid, demandId = '', projectId = '', lastMessageId = '', members }) {
    this.uid = uid;
    this.demandId = demandId;
    this.projectId = projectId;
    this.lastMessageId = lastMessageId;
    this.members = {};
  }
}
