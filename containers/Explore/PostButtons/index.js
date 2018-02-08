import React from 'react';
import { object } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import NavigateToPostProjectButton from './NavigateToPostProjectButton';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 50,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const PostButtons = ({ navigation }) => (
  <View style={styles.buttonContainer}>
    <NavigateToPostDemandButton navigation={navigation} />
    <NavigateToPostProjectButton navigation={navigation} />
  </View>
);

PostButtons.propTypes = {
  navigation: object.isRequired,
};

export default PostButtons;
