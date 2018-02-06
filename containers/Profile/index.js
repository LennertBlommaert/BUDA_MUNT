/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { bool, object } from 'prop-types';
import SignIn from '../SignIn/';
import Info from './Info';
import Screen from '../../components/Screen';

import styles from '../../objects/styles';

const Profile = ({ userIsSignedIn, navigation }) => (
  <Screen style={styles.container} navigation={navigation}>
    {
      userIsSignedIn ? <Info /> : <SignIn />
    }
  </Screen>
);

Profile.propTypes = {
  userIsSignedIn: bool.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ userIsSignedIn: store.userIsSignedIn }),
)(
  observer(Profile),
);
