import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { bool } from 'prop-types';

import ActivatableImage from '../../ActivatableImage';

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'calibre-medium',
    textAlign: 'center',
  },
  tab: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
  },
});

const Tab = ({ children, routeName, navigation, active, anyUnreadMessages }) => {
  const onTabPress = () => {
    if (!active) navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity onPress={onTabPress} style={styles.tab}>
      {
        routeName === 'Explore' ? <ActivatableImage style={styles.image} icon={'explore'} active={active} /> : null
      }
      {
        routeName === 'Threads' ? <ActivatableImage style={styles.image} icon={!anyUnreadMessages ? 'messages' : 'messagesUnread'} active={active} /> : null
      }
      {
        routeName === 'Neighbourhood' ? <ActivatableImage style={styles.image} icon={'neighbourhood'} active={active} /> : null
      }
      {
        routeName === 'Profile' ? <ActivatableImage style={styles.image} icon={'profile'} active={active} /> : null
      }
      {
        routeName === 'Pay' ? <ActivatableImage style={styles.image} icon={'pay'} active={active} /> : null
      }
      <Text style={styles.label}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Tab.propTypes = {
  anyUnreadMessages: bool.isRequired,
};

export default inject(
  ({ store }) => ({ anyUnreadMessages: store.anyUnreadMessages }),
)(
  observer(Tab),
);
