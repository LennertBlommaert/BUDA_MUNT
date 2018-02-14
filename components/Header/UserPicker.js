import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { any, func } from 'prop-types';
import UserReference from './UserReference';
import colors from '../../objects/colors';
import HeaderText from '../../components/HeaderText';
import addProfile from '../../assets/img/add_profile.png';
import currentProfileIndicatorImage from '../../assets/img/current_profile_indicator.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerBackground,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: -10,
    position: 'absolute',

    left: 0,
    right: 0,
    top: 60,

    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
    width: 335,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addProfileImage: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  currentProfileIndicatorImage: {
    width: 21,
    height: 24,
    transform: [{ translateY: 4 }],
  },
  currentProfileIndicator: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const UserPicker = ({ user, style, signInOutTest, userChildAccounts, onSelectUser }) => {
  const onPressUserReference = (email) => {
    onSelectUser();
    signInOutTest(email);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.currentProfileIndicator}>
        <UserReference {...user} active onPress={() => onPressUserReference(user.email)} />
        <Image
          style={styles.currentProfileIndicatorImage}
          source={currentProfileIndicatorImage}
        />
      </View>
      {
        userChildAccounts
          .map(userChild => <UserReference key={`${userChild.uid}-picker`} {...userChild} onPress={() => onPressUserReference(userChild.email)} />)
      }
      <TouchableOpacity onPress={() => console.warn('Voeg profiel toe')} style={styles.button}>
        <Image
          style={styles.addProfileImage}
          source={addProfile}
        />
        <HeaderText fontSize={18} color={'#9A9A9A'}>Voeg een profiel toe</HeaderText>
      </TouchableOpacity>
    </View>
  );
};

UserPicker.propTypes = {
  user: PropTypes.observableObject.isRequired,
  style: any,
  signInOutTest: func.isRequired,
  onSelectUser: func.isRequired,
};

UserPicker.defaultProps = {
  style: {},
};

export default inject(
  ({ store }) => ({
    user: store.user,
    userChildAccounts: store.userChildAccounts,
    signInOutTest: store.signInOutTest,
  }),
)(
  observer(UserPicker),
);
