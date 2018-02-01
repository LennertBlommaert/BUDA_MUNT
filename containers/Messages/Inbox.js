import React from 'react';
import { FlatList, Text } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

const Inbox = ({ userThreads }) => (
  <FlatList
    data={userThreads}
    keyExtractor={item => item.uid}
    renderItem={({ item }) => <Text key={item.uid}>{item.otherUser.firstName} {item.otherUser.name}</Text>}
  />
);

Inbox.propTypes = {
  userThreads: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ userThreads: store.userThreads }),
)(
  observer(Inbox),
);
