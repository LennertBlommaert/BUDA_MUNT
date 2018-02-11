import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';
import defaultUser from '../assets/img/default_user_image_small.png';
import annette from '../assets/img/annette.png';
import lisa from '../assets/img/lisa.png';
import zorggroep from '../assets/img/zorggroep.png';

const images = {
  defaultUser,
  annette,
  lisa,
  zorggroep,
};

const UserImage = ({ photoURL, size }) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      marginRight: 10,
    },
  });

  return (
    <Image
      style={styles.image}
      source={photoURL ? images[photoURL] : defaultUser}
      // source={photoURL ? '' : defaultUser}
    />
  );
};

UserImage.propTypes = {
  photoURL: string.isRequired,
  size: number,
};

UserImage.defaultProps = {
  size: 50,
};

export default UserImage;
