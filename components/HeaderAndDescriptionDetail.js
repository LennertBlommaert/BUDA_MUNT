import React from 'react';
import { string } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import HeaderText from './HeaderText';
import BodyText from './BodyText';

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginBottom: 15,
  },
});

const HeaderAndDescriptionDetail = ({ desc, name }) => (
  <View style={styles.textContainer}>
    <HeaderText fontSize={30} style={styles.title}>{name}</HeaderText>
    <BodyText>{desc}</BodyText>
  </View>
);

HeaderAndDescriptionDetail.propTypes = {
  desc: string.isRequired,
  name: string.isRequired,
};

export default HeaderAndDescriptionDetail;
