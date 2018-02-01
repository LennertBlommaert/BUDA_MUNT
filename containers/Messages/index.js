/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import NoContacts from './NoContacts';
import Inbox from './Inbox';
import Screen from '../../components/Screen';
import styles from '../../objects/styles';

const Messages = ({ userThreads }) => (
  <Screen style={styles.container}>
    {
      userThreads.length > 0 ? <Inbox /> : <NoContacts />
    }
  </Screen>
);

Messages.propTypes = {
  userThreads: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ userThreads: store.userThreads }),
)(
  observer(Messages),
);
