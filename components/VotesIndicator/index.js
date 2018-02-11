import React from 'react';
import { View, StyleSheet } from 'react-native';
import { any, number } from 'prop-types';
import GraphicIndicator from './GraphicIndicator';
import TextualIndicator from './TextualIndicator';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
});

const VotesIndicator = ({ votes, style, coinIconSize }) => (
  <View style={[styles.container, style]}>
    <GraphicIndicator coinIconSize={coinIconSize} votes={votes} />
    <TextualIndicator votes={votes} />
  </View>
);

VotesIndicator.propTypes = {
  style: any,
  coinIconSize: number,
};

VotesIndicator.defaultProps = {
  style: {},
  coinIconSize: 32,
};

export default VotesIndicator;
