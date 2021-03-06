import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { string, func, bool } from 'prop-types';
import BodyText from '../BodyText';
import HeaderText from '../HeaderText';
import UserImage from '../UserImage';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    // borderWidth: 1,
  },
  dadContainer: {
    flexDirection: 'column',
  },
});

const UserReference = ({ name, firstName, photoURL, onPress, active }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <UserImage size={45} photoURL={photoURL} />
    <View style={photoURL === 'charles' ? styles.dadContainer : {}}>
      {
        !active ? <BodyText>{firstName} {name}</BodyText> : <HeaderText fontSize={20}>{firstName} {name}</HeaderText>
      }
      {
        photoURL === 'charles' ? <BodyText italic opacity={0.7}>Papa</BodyText> : null
      }
    </View>
  </TouchableOpacity>
);

UserReference.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
  photoURL: string.isRequired,
  active: bool,
  onPress: func,
};

UserReference.defaultProps = {
  onPress: () => {},
  active: false,
};

export default UserReference;
