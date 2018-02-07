import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { bool, string, any, number } from 'prop-types';
import images from '../objects/images';

const ActivatableImage = ({ icon, active, style, size }) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      alignSelf: 'stretch',
    },
  });

  return (
    <Image
      style={[styles.image, style]}
      source={active ? images[icon].active : images[icon].inactive}
      resizeMode={'contain'}
    />
  );
};

ActivatableImage.propTypes = {
  icon: string.isRequired,
  active: bool.isRequired,
  style: any.isRequired,
  size: number.isRequired,
};

ActivatableImage.defaultProps = {
  icon: 'addDream',
  active: false,
  style: {},
  size: 25,
};

export default ActivatableImage;
