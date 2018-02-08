/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { object } from 'prop-types';

import FeedList from './FeedList';
import Header from './Header';

import Screen from '../../components/Screen';

const Explore = ({ navigation }) => (
  <Screen noHeader>
    <Header navigation={navigation} />
    <FeedList navigation={navigation} />
  </Screen>
);

Explore.propTypes = {
  navigation: object.isRequired,
};

export default Explore;
