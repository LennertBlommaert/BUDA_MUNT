import React from 'react';
import { object } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import NavigateToPostDemandButton from './NavigateToPostDemandButton';
import NavigateToPostProjectButton from './NavigateToPostProjectButton';
import NavigateToPostDemandInputButton from './NavigateToPostDemandInputButton';
import NavigateToPostProjectButtonInputButton from './NavigateToPostProjectInputButton';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const PostButtons = ({ navigation, currentSegmentedControlItemIndex }) => (
  <View style={styles.buttonContainer}>
    {
      currentSegmentedControlItemIndex === 0 ? <NavigateToPostDemandButton navigation={navigation} /> : null
    }
    {
      currentSegmentedControlItemIndex === 0 ? <NavigateToPostProjectButton navigation={navigation} /> : null
    }
    {
      currentSegmentedControlItemIndex === 1 ? <NavigateToPostDemandInputButton navigation={navigation} /> : null
    }
    {
      currentSegmentedControlItemIndex === 2 ? <NavigateToPostProjectButtonInputButton navigation={navigation} /> : null
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
