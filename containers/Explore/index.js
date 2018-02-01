/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import FeedList from './FeedList';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

const Explore = ({ navigation }) => {

  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Screen>
      <Button onPress={onPressNavigateToPostDemand}>
        plaats een zoekertje
      </Button>
      <FeedList navigation={navigation} />
    </Screen>
  );
};

export default Explore;
