import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { bool, string } from 'prop-types';
import images from '../objects/images';

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    alignSelf: 'stretch',
  },
});

const ActivatableImage = ({ icon, active }) => (
  <Image
    style={styles.image}
    source={active ? images[icon].active : images[icon].inactive}
    resizeMode={'contain'}
  />
);

ActivatableImage.propTypes = {
  icon: string.isRequired,
  active: bool.isRequired,
};

ActivatableImage.defaultProps = {
  icon: 'addDream',
  active: false,
};

export default ActivatableImage;
