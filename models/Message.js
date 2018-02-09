export default class Message {
  senderId = '';
  payLoad = '';
  uid = '';
  threadUID = '';

  constructor({ payLoad, senderId, createdAt }, uid, threadUID) {
    this.payLoad = payLoad;
    this.senderId = senderId;
    this.payLoad = payLoad;
    this.uid = uid;
    this.threadUID = threadUID;
  }
}
