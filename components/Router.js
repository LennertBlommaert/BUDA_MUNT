import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Explore from '../containers/Explore/';
import Messages from '../containers/Messages/';
// import Neighbourhood from '../containers/Neighbourhood/';
import Profile from '../containers/Profile/';
import PostDemand from '../containers/PostDemand/';
import DemandDetail from '../containers/DemandDetail/';
import More from '../containers/More/';

const ExploreStack = StackNavigator({
  Explore: {
    screen: Explore,
  },
  PostDemand: {
    screen: PostDemand,
  },
  DemandDetail: {
    screen: DemandDetail,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const TabBar = TabNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: 'Berichten',
      tabBarIcon: ({ tintColor }) => <Icon name={'inbox'} size={35} color={tintColor} />,
    },
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: 'Buren',
      tabBarIcon: ({ tintColor }) => <Icon name={'list'} size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profiel',
      tabBarIcon: ({ tintColor }) => <Icon name={'account-circle'} size={35} color={tintColor} />,
    },
  },
  More: {
    screen: More,
    navigationOptions: {
      tabBarLabel: 'Meer',
      tabBarIcon: ({ tintColor }) => <Icon name={'more'} size={35} color={tintColor} />,
    },
  },
});

export default TabBar;
