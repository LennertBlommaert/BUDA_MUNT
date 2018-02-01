/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { bool } from 'prop-types';
import SignIn from '../SignIn/';
import Info from './Info';
import Screen from '../../components/Screen';

import styles from '../../objects/styles';

const Profile = ({ userIsSignedIn }) => (
  <Screen style={styles.container}>
    {
      userIsSignedIn ? <Info /> : <SignIn />
    }
  </Screen>
);

Profile.propTypes = {
  userIsSignedIn: bool.isRequired,
};

export default inject(
  ({ store }) => ({ userIsSignedIn: store.userIsSignedIn }),
)(
  observer(Profile),
);
