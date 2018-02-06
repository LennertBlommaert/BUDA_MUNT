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
        backgroundColor: colors.buttonGreen,
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 80,
        paddingRight: 80,

        height: 50,
        width: 335,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: tileButton ? 0 : 5,
        borderTopRightRadius: tileButton ? 0 : 5,
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
    const { icon, children } = this.props;
    const { active } = this.state;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={this.styles.button}>
        <ActivatableImage icon={icon} active={active} />
        <ButtonText>{children}</ButtonText>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: any.isRequired,
  onPress: func.isRequired,
  tileButton: bool.isRequired,
  icon: string.isRequired,
};

Button.defaultProps = {
  tileButton: false,
  icon: '',
};

export default Button;
