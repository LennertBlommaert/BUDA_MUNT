import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, Image, StyleSheet } from 'react-native';
import { number, string } from 'prop-types';
import HeaderText from '../HeaderText';
import UserImage from '../UserImage';
import ActivatableImage from '../ActivatableImage';
import coin from '../../assets/img/coin_black.png';

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 11,
    height: 16,
    marginLeft: 3,
    marginTop: 4,
    alignSelf: 'center',
  },
  openParentAccountsArrowImage: {
    marginLeft: 10,
    marginTop: 4,
    alignSelf: 'center',
  },
});

const UserStatus = ({ balance, photoURL, signInOutTest, userPickerActive }) => (
  <View style={styles.headerRight}>
    <UserImage size={36} photoURL={photoURL} />
    <HeaderText>{balance}</HeaderText>
    <Image
      style={styles.coinImage}
      source={coin}
    />
    <ActivatableImage
      style={styles.openParentAccountsArrowImage}
      active={userPickerActive}
      icon={'openParentAccountsArrow'}
      size={12}
    />
  </View>
);

UserStatus.propTypes = {
  balance: number.isRequired,
  photoURL: string.isRequired,
};

export default inject(
  ({ store }) => ({ signInOutTest: store.signInOutTest }),
)(
  observer(UserStatus),
);
