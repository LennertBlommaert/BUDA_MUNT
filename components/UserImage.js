import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { string } from 'prop-types';
import defaultUser from '../assets/img/default_user_image_small.png';
import annette from '../assets/img/annette.png';
import lisa from '../assets/img/lisa.png';

const images = {
  defaultUser,
  annette,
  lisa,
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

const UserImage = ({ photoURL }) => (
  <Image
    style={styles.image}
    source={photoURL ? images[photoURL] : defaultUser}
    // source={photoURL ? '' : defaultUser}
  />
);

UserImage.propTypes = {
  photoURL: string.isRequired,
};

export default UserImage;
