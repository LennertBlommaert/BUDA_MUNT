// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object, bool } from 'prop-types';
import colors from '../../objects/colors';
import UserStatus from './UserStatus';
import NotificationsIndicator from './NotificationsIndicator';
import BackButton from './BackButton';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBackground,

    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 25,
    paddingBottom: 5,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
  },
});

const Header = ({ user, navigation, backButton }) => (
  <View style={styles.header}>
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
