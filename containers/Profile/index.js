/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import SignIn from '../SignIn/';
import Info from './Info';

import styles from '../../objects/styles';

const Profile = ({ user }) => (
  <View style={styles.container}>
    {
      user.uid !== '' ? <Info /> : <SignIn />
    }
  </View>
);

Profile.propTypes = {
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Profile),
);
