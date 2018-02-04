import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { number } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import bell from '../../assets/img/bell.png';

const styles = StyleSheet.create({
  bell: {
    width: 20,
    height: 20,
  },
});

const NotificationsIndicator = ({ numberOfNotifications }) => (
  <TouchableOpacity>
    <Image
      style={styles.bell}
      source={bell}
    />
  </TouchableOpacity>
);

NotificationsIndicator.propTypes = {
  numberOfNotifications: number.isRequired,
};

export default inject(
  ({ store }) => ({ numberOfNotifications: store.numberOfNotifications }),
)(
  observer(NotificationsIndicator),
);
