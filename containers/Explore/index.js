/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { ScrollView } from 'react-native';
import { object } from 'prop-types';

import FeedList from './FeedList';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

const Explore = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Screen navigation={navigation}>
      <ScrollView>
        <Button onPress={onPressNavigateToPostDemand}>
          plaats een zoekertje
        </Button>
        <FeedList navigation={navigation} />
      </ScrollView>
    </Screen>
  );
};

Explore.propTypes = {
  navigation: object.isRequired,
};

export default Explore;
