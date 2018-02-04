export default class Capacity {
  name = ''
  uid = ''
  selected = false

  constructor({ name, uid, selected = false }) {
    this.name = name;
    this.uid = uid;
    this.selected = selected;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
}
