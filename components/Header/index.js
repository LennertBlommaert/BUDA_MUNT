// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { View } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object, bool } from 'prop-types';
import UserStatus from './UserStatus';
import NotificationsIndicator from './NotificationsIndicator';
import BackButton from './BackButton';
import sharedStyles from '../../objects/sharedStyles';

const Header = ({ user, navigation, backButton }) => (
  <View style={sharedStyles.header}>
    {
      backButton ? <BackButton navigation={navigation} /> : null
    }
    <UserStatus {...user} />
    <NotificationsIndicator navigation={navigation} />
  </View>
);

Header.propTypes = {
  user: PropTypes.observableObject.isRequired,
  navigation: object.isRequired,
  backButton: bool.isRequired,
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Header),
);
