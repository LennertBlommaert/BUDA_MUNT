import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Explore from '../containers/Explore/';
import Messages from '../containers/Messages/';
import Neighbourhood from '../containers/Neighbourhood/';
import Profile from '../containers/Profile/';

const Router = TabNavigator({
  Neighbourhood: {
    screen: Neighbourhood,
    navigationOptions: {
      tabBarLabel: 'Buurt',
      tabBarIcon: ({ tintColor }) => <Icon name={'list'} size={35} color={tintColor} />,
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Buren',
      tabBarIcon: ({ tintColor }) => <Icon name={'list'} size={35} color={tintColor} />,
    },
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: 'Berichten',
      tabBarIcon: ({ tintColor }) => <Icon name={'inbox'} size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profiel',
      tabBarIcon: ({ tintColor }) => <Icon name={'account-circle'} size={35} color={tintColor} />,
    },
  },
});

export default Router;
