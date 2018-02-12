import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BodyText from '../../components/BodyText';
import colors from '../../objects/colors';
import infoImage from '../../assets/img/info.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 3,
    width: 335,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
  },
  infoImage: {
    width: 20,
    height: 20,
  },
});

const Instructions = () => (
  <View style={styles.container}>
    <Image
      style={styles.infoImage}
      source={infoImage}
    />
    <BodyText>
      Plaats de QR-code in het midden van het scherm om te betalen.
    </BodyText>
  </View>
);

Instructions.propTypes = {};

export default Instructions;
