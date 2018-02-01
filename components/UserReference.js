import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { string } from 'prop-types';

import defaultUser from '../assets/img/default_user_image_small.png';
import BodyText from './BodyText';

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const UserReference = ({ name, firstName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={defaultUser}
      />
      <BodyText>
        {firstName} {name}
      </BodyText>
    </TouchableOpacity>
  );
};

UserReference.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
};

export default UserReference;
