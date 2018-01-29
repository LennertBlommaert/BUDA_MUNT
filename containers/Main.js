
// NOTE: Not in use, if Router not used in App.js => Router will not be displayed, for some reason

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { TabBar } from '../components/Router';
import SignIn from './SignIn/';

const Main = ({ user }) => (
  <View>
    {
      // if user is not assigned, go to Log in screen
      user.uid !== '' ? <TabBar /> : <SignIn />
    }
  </View>
);

Main.propTypes = {
  user: PropTypes.observableObject.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Main),
);
