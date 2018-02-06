import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import Header from './HeaderRouter';

import Explore from '../../containers/Explore/';
import Messages from '../../containers/Messages/';
// import Neighbourhood from '../../containers/Neighbourhood/';
import Profile from '../../containers/Profile/';
import PostDemand from '../../containers/PostDemand/';
import DemandDetail from '../../containers/DemandDetail/';
import ProjectDetail from '../../containers/ProjectDetail/';
import PostProject from '../../containers/PostProject/';
import More from '../../containers/More/';
import MessageDetail from '../../containers/MessageDetail/';
import Notifications from '../../containers/Notifications/';

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

const MessagesStack = StackNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      // header: Header,
    },
  },
  MessageDetail: {
    screen: MessageDetail,
    navigationOptions: {
      // header: Header,
    },
  },
  Notifications: {
    screen: Notifications,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const TabBar = TabNavigator({
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: 'Buren',
      tabBarIcon: ({ tintColor }) => <Icon name={'list'} size={35} color={tintColor} />,
    },
  },
  Messages: {
    screen: MessagesStack,
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
  More: {
    screen: More,
    navigationOptions: {
      tabBarLabel: 'Meer',
      tabBarIcon: ({ tintColor }) => <Icon name={'more'} size={35} color={tintColor} />,
    },
  },
});

export default TabBar;
