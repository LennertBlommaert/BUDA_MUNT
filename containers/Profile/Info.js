import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';

const Info = ({ user }) => (
  <View>
    <Text>{user.firstName} {user.name}</Text>
    <Text>{user.email}</Text>
    <Text>{user.uid}</Text>
  </View>
);

Info.propTypes = {
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Info),
);
