import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { bool, string, any } from 'prop-types';
import images from '../objects/images';

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    alignSelf: 'stretch',
  },
});

const ActivatableImage = ({ icon, active, style }) => (
  <Image
    style={[styles.image, style]}
    source={active ? images[icon].active : images[icon].inactive}
    resizeMode={'contain'}
  />
);

ActivatableImage.propTypes = {
  icon: string.isRequired,
  active: bool.isRequired,
  style: any.isRequired,
};

ActivatableImage.defaultProps = {
  icon: 'addDream',
  active: false,
  style: {},
};

export default ActivatableImage;
