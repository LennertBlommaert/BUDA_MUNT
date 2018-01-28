/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {Text, View} from 'react-native';
import {inject, observer, PropTypes} from 'mobx-react/native';

import styles from '../../objects/styles';

const Profile = ({user}) => {

  return (
    <View style={styles.container}>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.coins} menten</Text>
    </View>
  );

};

Profile.propTypes = {
  user: PropTypes.observableObject.isRequired
};

export default inject(
  ({store}) => {
    return {user: store.user};
  }
)(
  observer(Profile)
);
