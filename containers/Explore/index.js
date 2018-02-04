/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { ScrollView } from 'react-native';

import FeedList from './FeedList';

import Screen from '../../components/Screen';
import Header from '../../components/Header/';
import Button from '../../components/Button';

const Explore = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Screen>
      <Header />
      <ScrollView>
        <Button onPress={onPressNavigateToPostDemand}>
          plaats een zoekertje
        </Button>
        <FeedList navigation={navigation} />
      </ScrollView>
    </Screen>
  );
};

export default Explore;
