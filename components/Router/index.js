import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ActivatableImage from '../ActivatableImage';
import colors from '../../objects/colors';

// import Header from './HeaderRouter';

import Explore from '../../containers/Explore/indexTest';
import Threads from '../../containers/Threads/';
// import Neighbourhood from '../../containers/Neighbourhood/';
import Profile from '../../containers/Profile/';
import PostDemand from '../../containers/PostDemand/';
import DemandDetail from '../../containers/DemandDetail/';
import ProjectDetail from '../../containers/ProjectDetail/';
import PostProject from '../../containers/PostProject/';
import Neighbourhood from '../../containers/Neighbourhood/';
import ThreadDetail from '../../containers/ThreadDetail/';
import Notifications from '../../containers/Notifications/';
import Pay from '../../containers/Pay/';

import TabBar from './TabBar/';
// import transitionConfig from './transitionConfig';

const ExploreStack = StackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      // header: Header,
    },
  },
  PostDemand: {
    screen: PostDemand,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  PostProject: {
    screen: PostProject,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  DemandDetail: {
    screen: DemandDetail,
  },
  ProjectDetail: {
    screen: ProjectDetail,
  },
  Notifications: {
    screen: Notifications,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const ThreadsStack = StackNavigator({
  Threads: {
    screen: Threads,
    navigationOptions: {
      // header: Header,
    },
  },
  ThreadDetail: {
    screen: ThreadDetail,
    navigationOptions: {
      // header: Header,
    },
  },
  DemandDetail: {
    screen: DemandDetail,
    navigationOptions: {
      // header: Header,
    },
  },
  Notifications: {
    screen: Notifications,
  },
}, {
  mode: 'card',
  headerMode: 'none',
});

const TabBarStack = TabNavigator({
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: 'Buren',
      tabBarIcon: ({ focused }) => <ActivatableImage icon={'explore'} active={focused} />,
    },
  },
  Neighbourhood: {
    screen: Neighbourhood,
    navigationOptions: {
      tabBarLabel: 'Buurt',
      tabBarIcon: ({ focused }) => <ActivatableImage icon={'neighbourhood'} active={focused} />,
    },
  },
  Threads: {
    screen: ThreadsStack,
    navigationOptions: {
      tabBarLabel: 'Berichten',
      tabBarIcon: ({ focused }) => <ActivatableImage icon={'messages'} active={focused} />,
    },
  },
  Pay: {
    screen: Pay,
    navigationOptions: {
      tabBarLabel: 'Betaal',
      tabBarIcon: ({ focused }) => <ActivatableImage icon={'pay'} active={focused} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profiel',
      tabBarIcon: ({ focused }) => <ActivatableImage icon={'profile'} active={focused} />,
    },
  },
}, {
  tabBarComponent: TabBar,
  initialRouteName: 'Threads',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: colors.tabBarActiveTintColor,
    inactiveTintColor: colors.tabBarInactiveTintColor,
    backgroundColor: colors.headerBackground,
    // showLabel: false,
    iconStyle: {
      paddingRight: 10,
    },
    tabStyle: {
      height: 50,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    labelStyle: {
      fontFamily: 'calibre-medium',
      fontSize: 12,
    },
  },
});

export default TabBarStack;
