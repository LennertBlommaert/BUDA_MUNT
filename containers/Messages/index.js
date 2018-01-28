/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import NoContacts from './NoContacts';
import ContactList from './ContactList';
import styles from '../../objects/styles';

const Messages = ({ contacts }) => (
  <View style={styles.container}>
    {
      contacts.length > 0 ? <ContactList /> : <NoContacts />
    }
  </View>
);

Messages.propTypes = {
  contacts: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ contacts: store.contacts }),
)(
  observer(Messages),
);
