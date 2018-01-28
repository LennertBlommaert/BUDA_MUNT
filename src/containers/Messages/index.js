/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NoContacts from './NoContacts';
import ContactList from './ContactList';
import styles from '../../objects/styles';

const Messages = ({contacts}) => (
  <View style={styles.container}>
    {

      contacts.length > 0 ?

      <ContactList />

      : <NoContacts />
    }
  </View>
);

Messages.propTypes = {};

export default inject(
  ({store}) => {
    return {contacts: store.contacts};
  }
)(
  observer(Messages)
);
