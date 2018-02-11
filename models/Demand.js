import {
  observable,
  action,
} from 'mobx';

import Capacity from './Capacity';
import User from './User';

export default class Demand {
  name = ''
  desc = ''
  userId = ''
  uid = ''
  coins = 0
  type = '0'

  @observable
  user = new User({});

  @observable
  capacities = []

  constructor({ name = '', desc = '', userId = '', reward = 0, uid = '' }) {
    this.name = name;
    this.desc = desc;
    this.truncatedDesc = `${desc.substring(0, 240)}${desc.length > 240 ? '...' : ''}`;
    this.userId = userId;
    this.uid = uid;
    this.reward = reward;
    this.type =  0;
  }

  @action
  addCapacity(capacity, uid) {
    this.capacities.push(new Capacity({ name: capacity.name, uid }));
  }
}
