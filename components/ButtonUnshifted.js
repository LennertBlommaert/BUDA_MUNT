/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
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
      button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonBlueSoft,

        paddingTop: 15,
        paddingBottom: 15,

        height: 50,
        width: 335,

        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderTopLeftRadius: tileButton ? 0 : 2,
        borderTopRightRadius: tileButton ? 0 : 2,
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
        <ActivatableImage style={this.styles.icon} icon={icon} active={active} />
        <ButtonText color={color === '' ? colors.buttonBlueStrong : color}>{children}</ButtonText>
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
