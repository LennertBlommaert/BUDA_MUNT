import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { string, func } from 'prop-types';

import BodyText from './BodyText';
import UserImage from './UserImage';
import TopBucketListItem from './TopBucketListItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  textContainer: {
  },
});

const UserReference = ({ name, firstName, topBucketlistItemName, photoURL, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <UserImage photoURL={photoURL} />
    <View class={styles.textContainer}>
      <BodyText>
        {firstName} {name}
      </BodyText>
      {
        topBucketlistItemName !== '' ? <TopBucketListItem topBucketlistItemName={topBucketlistItemName} /> : null
      }
    </View>
  </TouchableOpacity>
);

UserReference.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
  photoURL: string.isRequired,
  onPress: func,
};

UserReference.defaultProps = {
  onPress: () => {},
};

export default UserReference;
