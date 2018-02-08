// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object } from 'prop-types';
import UserStatus from './UserStatus';
import SearchInput from './SearchInput';
import NotificationsIndicator from './NotificationsIndicator';
import SegmentendControl from './SegmentendControl';
import sharedStyles from '../../../objects/sharedStyles';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    zIndex: 100,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
});

const Header = ({ user, navigation, searchInputOpacity, searchInputOffset }) => (
  <View style={[sharedStyles.header, styles.header]}>
    <View style={styles.headerTop}>
      <UserStatus {...user} />
      <NotificationsIndicator navigation={navigation} />
    </View>
    <SearchInput opacity={searchInputOpacity} offset={searchInputOffset} />
    <SegmentendControl />
  </View>
);

Header.propTypes = {
  user: PropTypes.observableObject.isRequired,
  navigation: object.isRequired,
  searchInputOpacity: object,
  searchInputOffset: object,
};

Header.defaultProps = {
  searchInputOpacity: { opacity: 1 },
  searchInputOffset: { transform: [{ translateY: 0 }] },
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(Header),
);
