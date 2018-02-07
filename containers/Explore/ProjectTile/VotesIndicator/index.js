import React from 'react';
import { View } from 'react-native';
import GraphicIndicator from './GraphicIndicator';
import TextualIndicator from './TextualIndicator';

const VotesIndicator = ({ votes }) => (
  <View>
    <GraphicIndicator votes={votes} />
    <TextualIndicator votes={votes} />
  </View>
);

VotesIndicator.propTypes = {};

export default VotesIndicator;
