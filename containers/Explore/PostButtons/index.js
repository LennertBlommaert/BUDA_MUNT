import React from 'react';
import { object } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import NavigateToPostProjectButton from './NavigateToPostProjectButton';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 50,
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const PostButtons = ({ navigation, currentSegmentedControlItemIndex }) => (
  <View style={styles.buttonContainer}>
    {
      currentSegmentedControlItemIndex !== 2 ? <NavigateToPostDemandButton navigation={navigation} /> : null
    }
    {
      currentSegmentedControlItemIndex !== 1 ? <NavigateToPostProjectButton navigation={navigation} /> : null
    }
  </View>
);

PostButtons.propTypes = {
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ currentSegmentedControlItemIndex: store.currentSegmentedControlItemIndex }),
)(
  observer(PostButtons),
);
