import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import { any, func } from 'prop-types';
import UserReference from './UserReference';
import colors from '../../objects/colors';

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
  },
});

const UserPicker = ({ user, style, signInOutTest, userChildAccounts, onSelectUser }) => {
  const onPressUserReference = (email) => {
    onSelectUser();
    signInOutTest(email);
  };

  return (
    <View style={[styles.container, style]}>
      <UserReference {...user} active onPress={() => onPressUserReference(user.email)} />
      {
        userChildAccounts
          .map(userChild => <UserReference key={`${userChild.uid}-picker`} {...userChild} onPress={() => onPressUserReference(userChild.email)} />)
      }
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
