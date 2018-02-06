import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { number, object } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import bell from '../../assets/img/bell.png';
import dot from '../../assets/img/notification_dot.png';

const styles = StyleSheet.create({
  container: {
  },
  bell: {
    width: 20,
    height: 20,
  },
  dot: {
    width: 9,
    height: 9,
    left: 12,
    bottom: 20,
  },
});

const NotificationsIndicator = ({ numberOfNotifications, navigation }) => {
  const onPressNotificationsIndicator = () => {
    if (navigation.state.routeName === 'Notifications') return navigation.goBack();
    return navigation.navigate('Notifications');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressNotificationsIndicator}>
      <Image
        style={styles.bell}
        source={bell}
      />
      {
        numberOfNotifications > 0 ? <Image style={styles.dot} source={dot} /> : null
      }
    </TouchableOpacity>
  );
};

NotificationsIndicator.propTypes = {
  numberOfNotifications: number.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ numberOfNotifications: store.numberOfNotifications }),
)(
  observer(NotificationsIndicator),
);
