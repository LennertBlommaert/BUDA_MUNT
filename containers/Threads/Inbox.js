import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import InboxItem from './InboxItem/';

const styles = StyleSheet.create({
  list: {
    marginBottom: 50,
  },
});

const Inbox = ({ userThreads, navigation }) => (
  <FlatList
    style={styles.list}
    data={userThreads}
    keyExtractor={item => item.uid}
    renderItem={({ item }) => <InboxItem key={item.uid} {...item} navigation={navigation} />}
  />
);

Inbox.propTypes = {
  userThreads: PropTypes.observableArray.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ userThreads: store.userThreads }),
)(
  observer(Inbox),
);
