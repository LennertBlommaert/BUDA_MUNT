import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import defaultUser from '../assets/img/default_user_image_small.png';

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

const UserImage = ({ photoURL }) => (
  <Image
    style={styles.image}
    source={photoURL ? '' : defaultUser}
  />
);

UserImage.propTypes = {
  photoURL: string.isRequired,
};

export default UserImage;
