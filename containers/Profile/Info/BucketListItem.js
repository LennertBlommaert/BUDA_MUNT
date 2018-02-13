import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import BodyText from '../../../components/BodyText';

const BucketListItem = ({ name }) => (
  <View>
    <BodyText>
      { name }
    </BodyText>
  </View>
);

BucketListItem.propTypes = {
  name: string.isRequired,
};

export default BucketListItem;
