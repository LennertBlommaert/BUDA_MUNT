/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { bool } from 'prop-types';
import SignIn from '../SignIn/';
import Info from './Info';

import styles from '../../objects/styles';

const Profile = ({ userIsSignedIn }) => (
  <View style={styles.container}>
    {
      userIsSignedIn ? <Info /> : <SignIn />
    }
  </View>
);

Profile.propTypes = {
  userIsSignedIn: bool.isRequired,
};

export default inject(
  ({ store }) => ({ userIsSignedIn: store.userIsSignedIn }),
)(
  observer(Profile),
);
