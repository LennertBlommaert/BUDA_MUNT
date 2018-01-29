import React from 'react';
import { FlatList, Text } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

const ContactList = ({ contacts }) => (
  <FlatList
    data={contacts}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <Text key={item.name}>{item.firstName} {item.lastName}</Text>}
  />
);

ContactList.propTypes = {
  contacts: PropTypes.observableArray.isRequired,
};

export default inject(
  ({ store }) => ({ contacts: store.contacts }),
)(
  observer(ContactList),
);
