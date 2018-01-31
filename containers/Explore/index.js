/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import FeedList from './FeedList';

import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import Screen from '../../components/Screen';

const Explore = ({ navigation }) => (
  <Screen>
    <NavigateToPostDemandButton navigation={navigation} />
    <FeedList navigation={navigation} />
  </Screen>
);

export default Explore;
