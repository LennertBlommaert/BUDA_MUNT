import React from 'react';
import { StyleSheet } from 'react-native';
import { object } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import Screen from '../../components/Screen';
import Header from './Header/';
import Messages from './Messages/';
import MessageInput from './MessageInput/';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});

const ThreadDetail = ({ navigation, currentThread }) => (
  <Screen style={styles.container} backButton navigation={navigation}>
    <Header navigation={navigation} demand={currentThread.demand} otherUser={currentThread.otherUser} />
    <Messages />
    <MessageInput />
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
