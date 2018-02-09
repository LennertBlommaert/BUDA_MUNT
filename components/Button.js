/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { any, bool, func, string } from 'prop-types';

import colors from '../objects/colors';
import ButtonText from './ButtonText';
import ActivatableImage from '../components/ActivatableImage';

class Button extends Component {
  state = {
    active: false,
  }

  componentWillMount() {
    const { tileButton } = this.props;

    this.styles = StyleSheet.create({
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 2,
        borderColor: colors.buttonBlueStrong,
        backgroundColor: 'transparent',

        paddingTop: 15,
        paddingBottom: 15,

        height: 50,
        width: 335,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: tileButton ? 0 : 5,
        borderTopRightRadius: tileButton ? 0 : 5,
        shadowColor: tileButton ? 'transparent' : colors.shadowColor,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.13,

        borderRadius: 3,
      },
      icon: {
        marginRight: 20,
      },
      offSetBackground: {
        backgroundColor: colors.buttonBlueSoft,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 3,
        transform: [{ translateY: 3 }],
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
    const { icon, children, style, color } = this.props;
    const { active } = this.state;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={[this.styles.button, style]}>
        <View style={this.styles.offSetBackground}></View>
        <View style={this.styles.textContainer}>
          <ActivatableImage style={this.styles.icon} icon={icon} active={active} />
          <ButtonText color={color === '' ? colors.buttonBlueStrong : color}>{children}</ButtonText>
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
  color: string,
};

Button.defaultProps = {
  tileButton: false,
  icon: 'addDream',
  style: {},
  color: '',
};

export default Button;
