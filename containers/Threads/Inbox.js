import React from 'react';
import { StyleSheet, View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import InboxItem from './InboxItem/';

const styles = StyleSheet.create({
  list: {
    marginBottom: 50,
    flex: 1,
  },
});

const Inbox = ({ userThreads, navigation }) => (
  <View
    style={styles.list}
  >
    {
      userThreads.map(t => <InboxItem key={t.uid} {...t} navigation={navigation} />)
    }
  </View>
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
