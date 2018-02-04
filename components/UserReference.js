import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { string } from 'prop-types';

import BodyText from './BodyText';
import UserImage from './UserImage';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const UserReference = ({ name, firstName, photoURL }) => (
  <TouchableOpacity style={styles.container}>
    <UserImage photoURL={photoURL} />
    <BodyText>
      {firstName} {name}
    </BodyText>
  </TouchableOpacity>
);

UserReference.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
  photoURL: string.isRequired,
};

export default UserReference;
