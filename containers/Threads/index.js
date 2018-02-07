/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import NoContacts from './NoContacts';
import Inbox from './Inbox';
import Screen from '../../components/Screen';
import styles from '../../objects/styles';

const Threads = ({ userThreads, navigation }) => (
  <Screen style={styles.container} navigation={navigation}>
    {
      userThreads.length > 0 ? <Inbox navigation={navigation} /> : <NoContacts />
    }
  </Screen>
);

Threads.propTypes = {
  userThreads: PropTypes.observableArray.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ userThreads: store.userThreads }),
)(
  observer(Threads),
);
