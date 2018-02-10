export default class Message {
  senderId = '';
  payLoad = '';
  uid = '';
  threadUID = '';
  createdAt = '';

  constructor({ payLoad, senderId, createdAt }, uid, threadUID) {
    this.payLoad = payLoad;
    this.senderId = senderId;
    this.payLoad = payLoad;
    this.uid = uid;
    this.threadUID = threadUID;
    this.createdAt = new Date(createdAt);
    this.time = `${this.createdAt.getHours() < 10 ? '0' : ''}${this.createdAt.getHours()}:${this.createdAt.getMinutes() < 10 ? '0' : ''}${this.createdAt.getMinutes()}`;
  }
}
