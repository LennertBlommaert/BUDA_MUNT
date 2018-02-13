import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeaderText from '../../../components/HeaderText';
import dream from '../../../assets/img/add_dream_inactive_inverted.png';
import CloseButton from './CloseButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',

    paddingLeft: 22,
    paddingRight: 22,
    marginTop: 40,
  },
  dreamImage: {
    width: 36,
    height: 24,
  },
});

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.dreamImage}
      source={dream}
    />
    <HeaderText>Plaats je wens</HeaderText>
    <CloseButton navigation={navigation} />
  </View>
);

Header.propTypes = {};

export default Header;
