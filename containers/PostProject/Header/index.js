import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeaderText from '../../../components/HeaderText';
import project from '../../../assets/img/add_project_inactive.png';
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
  projectImage: {
    width: 32,
    height: 30,
  },
});

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.projectImage}
      source={project}
    />
    <HeaderText>Plaats je buurtwens</HeaderText>
    <CloseButton navigation={navigation} />
  </View>
);

Header.propTypes = {};

export default Header;
