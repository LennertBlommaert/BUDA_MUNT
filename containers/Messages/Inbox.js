import React from 'react';
import { FlatList } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import InboxItem from './InboxItem/';

const Inbox = ({ userThreads }) => (
  <FlatList
    data={userThreads}
    keyExtractor={item => item.uid}
    renderItem={({ item }) => <InboxItem key={item.uid} {...item} />}
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
