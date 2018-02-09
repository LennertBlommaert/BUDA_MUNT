/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { number } from 'prop-types';

import colors from '../../../../objects/colors';

const styles = StyleSheet.create({
  line: {
    width: 111,
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.addDemandButtonBackground,
    transform: [{ translateY: 7 }, { translateX: -7 }],
  },
});

class ActiveSegmentIndicator extends Component {
  state = {
    translateValue: new Animated.Value(0),
  }

  componentDidUpdate() {
    const { currentSegmentedControlItemIndex } = this.props;

    Animated.timing(
      this.state.translateValue,
      {
        toValue: currentSegmentedControlItemIndex,
        duration: 150,
        easing: Easing.ease.inOut,
      },
    ).start();
  }

  render() {
    const { translateValue } = this.state;
    const translate = translateValue.interpolate({
      inputRange: [0, 2],
      outputRange: [0, 225],
    });

    return (
      <Animated.View
        style={[styles.line, { transform: [{ translateY: 7 }, { translateX: translate }] }]}
      >
      </Animated.View>
    );
  }
}

ActiveSegmentIndicator.propTypes = {};

ActiveSegmentIndicator.propTypes = {
  currentSegmentedControlItemIndex: number.isRequired,
};

export default inject(
  ({ store }) => ({ currentSegmentedControlItemIndex: store.currentSegmentedControlItemIndex }),
)(
  observer(ActiveSegmentIndicator),
);
