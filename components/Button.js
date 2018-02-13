/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { any, bool, func, string, number } from 'prop-types';

import colors from '../objects/colors';
import ButtonText from './ButtonText';
import ActivatableImage from '../components/ActivatableImage';

class Button extends Component {
  state = {
    active: false,
  }

  componentWillMount() {
    const { tileButton, mainColor, secondaryColor, small } = this.props;
    this.styles = StyleSheet.create({
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 2,
        borderColor: mainColor,
        backgroundColor: 'transparent',

        paddingTop: 15,
        paddingBottom: 15,

        height: 50,
        width: small ? 164 : 335,
        borderRadius: 3,

        alignSelf: 'stretch',

      },
      icon: {
        marginRight: 20,
        alignSelf: 'center',
      },
      offSetBackground: {
        backgroundColor: secondaryColor,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 3,

        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderTopLeftRadius: tileButton ? 0 : 3,
        borderTopRightRadius: tileButton ? 0 : 3,
        shadowColor: tileButton ? 'transparent' : colors.shadowColor,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 3,
        shadowOpacity: 0.05,
      },
    });
  }

  onPress() {
    const { onPress } = this.props;
    // Fire in props given onPress function
    this.setState({ active: true });
    onPress();
  }

  render() {
    const { icon, iconSize, children, style, mainColor } = this.props;
    const { active } = this.state;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={[this.styles.button, style]}>
        <View style={[this.styles.offSetBackground, { transform: [{ translateY: active ? 0 : 3 }] }]}></View>
        <View style={this.styles.textContainer}>
          <ActivatableImage size={iconSize} style={this.styles.icon} icon={icon} active={active} />
          <ButtonText color={mainColor}>{children}</ButtonText>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: any.isRequired,
  onPress: func.isRequired,
  tileButton: bool.isRequired,
  icon: string.isRequired,
  style: any.isRequired,
  small: bool,
  mainColor: string,
  secondaryColor: string,
  iconSize: number,
};

Button.defaultProps = {
  tileButton: false,
  icon: 'addDream',
  style: {},
  mainColor: colors.buttonBlueStrong,
  secondaryColor: colors.buttonBlueSoft,
  iconSize: 30,
  small: false,
};

export default Button;
