import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Explore from '../containers/Explore/';
import Messages from '../containers/Messages/';
import Neighbourhood from '../containers/Neighbourhood/';
import Profile from '../containers/Profile/';

const Router = TabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: `Buren`
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: `Berichten`
    }
  },
  Neighbourhood: {
    screen: Neighbourhood,
    navigationOptions: {
      tabBarLabel: `Buurt`
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: `Profiel`
    }
  },
});

export default Router;
