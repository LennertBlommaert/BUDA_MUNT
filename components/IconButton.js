/* eslint-disable react/self-closing-comp */

import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { any, string } from 'prop-types';

import ActivatableImage from '../components/ActivatableImage';

const styles = StyleSheet.create({
  button: {},
  icon: {
    alignSelf: 'center',
  },
});

class Button extends Component {
  state = {
    active: false,
  }

  onPress() {
    const { onPress } = this.props;
    onPress();
  }

  setActive() {
    this.setState({ active: true });
  }

  setInActive() {
    this.setState({ active: false });
  }

  render() {
    const { icon, style } = this.props;
    const { active } = this.state;

    return (
      <TouchableOpacity onPress={() => this.onPress()} onTouchEnd={() => this.setActive()} onTouchStart={() => this.setInActive()} style={[styles.button, style]}>
        <ActivatableImage style={styles.icon} icon={icon} active={active} />
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  icon: string,
  style: any,
};

Button.defaultProps = {
  icon: 'addDream',
  style: {},
};

export default Button;
