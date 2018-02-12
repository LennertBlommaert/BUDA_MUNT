import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { number, string } from 'prop-types';
import HeaderText from '../../../components/HeaderText';
import UserImage from '../../../components/UserImage';
import ActivatableImage from '../../../components/ActivatableImage';
import coin from '../../../assets/img/coin_black.png';

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

const UserStatus = ({ balance, photoURL }) => (
  <TouchableOpacity style={styles.headerRight}>
    <UserImage size={36} photoURL={photoURL} />
    <HeaderText>{balance}</HeaderText>
    <Image
      style={styles.coinImage}
      source={coin}
    />
    <ActivatableImage
      style={styles.openParentAccountsArrowImage}
      icon={'openParentAccountsArrow'}
      size={12}
    />
  </TouchableOpacity>
);

UserStatus.propTypes = {
  balance: number.isRequired,
  photoURL: string.isRequired,
};

export default UserStatus;
