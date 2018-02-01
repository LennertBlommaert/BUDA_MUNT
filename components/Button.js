import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { any, bool } from 'prop-types';

import heart from '../assets/img/heart.png';

import colors from '../objects/colors';
import ButtonText from './ButtonText';

const Button = ({ children, tileButton }) => {
  const styles = StyleSheet.create({
    button: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.buttonGreen,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: tileButton ? 0 : 5,
      borderTopRightRadius: tileButton ? 0 : 5,
    },
    image: {
      width: 20,
      height: 18,
    },
  });

  return (
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.image}
        source={heart}
      />
      <ButtonText>{children}</ButtonText>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: any.isRequired,
  tileButton: bool,
};

Button.defaultProps = {
  tileButton: false,
};

export default Button;
