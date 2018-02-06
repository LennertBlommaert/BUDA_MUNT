import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tab from './Tab';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.10,
  },
});

const TabBar = ({ navigation, navigationState, getLabel, renderIcon }) => {

  return (
    <View style={styles.container}>
      {
        navigationState.routes.map((route, i) => (
          <Tab
            navigation={navigation}
            key={route.routeName}
            routeName={route.routeName}
            active={navigationState.index === i}
          >
            {/* {console.warn(navigationState.index === i)} */}
            {getLabel({ route })}
          </Tab>
        ))
      }
    </View>
  );
};

TabBar.propTypes = {};

export default TabBar;
