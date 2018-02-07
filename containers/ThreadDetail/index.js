import React from 'react';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import Screen from '../../components/Screen';
import Header from './Header/';

const ThreadDetail = ({ navigation, currentThread }) => (
  <Screen backButton navigation={navigation}>
    <Header navigation={navigation} demand={currentThread.demand} otherUser={currentThread.otherUser} />
  </Screen>
);

ThreadDetail.propTypes = {
  navigation: object.isRequired,
  currentThread: object.isRequired,
};

export default inject(
  ({ store }) => ({ currentThread: store.currentThread }),
)(
  observer(ThreadDetail),
);
