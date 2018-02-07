import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { string } from 'prop-types';

import BodyText from './BodyText';
import UserImage from './UserImage';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
  },
});

const UserReference = ({ name, firstName, topBucketlistItemName, photoURL }) => (
  <TouchableOpacity style={styles.container}>
    <UserImage photoURL={photoURL} />
    <View class={styles.textContainer}>
      <BodyText>
        {firstName} {name}
      </BodyText>
      <BodyText italic fontSize={16}>
        {topBucketlistItemName}
      </BodyText>
    </View>
  </TouchableOpacity>
);

UserReference.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
  photoURL: string.isRequired,
  topBucketlistItemName: string.isRequired,
};

export default UserReference;
