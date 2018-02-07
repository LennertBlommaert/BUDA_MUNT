import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ActivatableImage from '../../../components/ActivatableImage';
import HeaderText from '../../../components/HeaderText';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 105,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: colors.projectProposalAccent,
    fontSize: 22,
  },
});

const Stage = () => (
  <TouchableOpacity style={styles.container}>
    <ActivatableImage icon={'voorstel'} />
    <HeaderText style={styles.text}>voorstel</HeaderText>
  </TouchableOpacity>
);

Stage.propTypes = {};

export default Stage;
