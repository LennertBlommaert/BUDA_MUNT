import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { number, string } from 'prop-types';
import HeaderText from '../../../components/HeaderText';
import UserImage from '../../../components/UserImage';
import coin from '../../../assets/img/coin_black.png';

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 11,
    height: 16,
  },
});

const UserStatus = ({ balance, photoURL }) => (
  <TouchableOpacity style={styles.headerRight}>
    <UserImage photoURL={photoURL} />
    <HeaderText>{balance}</HeaderText>
    <Image
      style={styles.coinImage}
      source={coin}
    />
  </TouchableOpacity>
);

UserStatus.propTypes = {
  balance: number.isRequired,
  photoURL: string.isRequired,
};

export default UserStatus;
