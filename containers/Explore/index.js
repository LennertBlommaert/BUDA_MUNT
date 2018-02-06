/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { object } from 'prop-types';

import FeedList from './FeedList';

import Screen from '../../components/Screen';
import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import NavigateToPostProjectButton from './NavigateToPostProjectButton';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Explore = ({ navigation }) => {
  return (
    <Screen navigation={navigation}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <NavigateToPostDemandButton navigation={navigation} />
          <NavigateToPostProjectButton navigation={navigation} />
        </View>
        <FeedList navigation={navigation} />
      </ScrollView>
    </Screen>
  );
};

Explore.propTypes = {
  navigation: object.isRequired,
};

export default Explore;
