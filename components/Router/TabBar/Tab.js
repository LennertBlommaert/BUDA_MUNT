import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
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

const Tab = ({ children, routeName, navigation, active }) => {
  const onTabPress = () => {
    navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity onPress={onTabPress} style={styles.tab}>
      {
        routeName === 'Explore' ? <ActivatableImage style={styles.image} icon={'explore'} active={active} /> : null
      }
      {
        routeName === 'Messages' ? <ActivatableImage style={styles.image} icon={'messages'} active={active} /> : null
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

Tab.propTypes = {};

export default Tab;
