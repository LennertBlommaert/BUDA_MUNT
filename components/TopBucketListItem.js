import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import images from '../objects/images';
import BodyText from './BodyText';

const styles = StyleSheet.create({
  topBucketlistItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBucketlistItemImage: {
    width: 32,
    height: 18,
    marginRight: 6,
  },
});

const TopBucketListItem = ({ topBucketlistItemName }) => (
  <View style={styles.topBucketlistItemContainer}>
    <Image
      style={styles.topBucketlistItemImage}
      source={images.topBucketListItem.active}
    />
    <BodyText italic opacity={0.7} fontSize={16}>
      {topBucketlistItemName}
    </BodyText>
  </View>
);

TopBucketListItem.propTypes = {
  topBucketlistItemName: string.isRequired,
};

export default TopBucketListItem;
