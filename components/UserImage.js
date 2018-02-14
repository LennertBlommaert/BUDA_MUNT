import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';
import defaultUser from '../assets/img/default_user_image_small.png';
import annette from '../assets/img/annette.png';
import lisa from '../assets/img/lisa.png';
import charles from '../assets/img/charles.png';
import zorggroep from '../assets/img/zorggroep.png';
import kleinkeuken from '../assets/img/kleinkeuken.png';
import lars from '../assets/img/lars.png';
import fabienne from '../assets/img/fabienne.png';
import budascoop from '../assets/img/budascoop.png';
import tim from '../assets/img/tim.png';

const images = {
  defaultUser,
  annette,
  lisa,
  zorggroep,
  charles,
  kleinkeuken,
  fabienne,
  lars,
  budascoop,
  tim,
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
      source={photoURL !== '' ? images[photoURL] : defaultUser}
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
