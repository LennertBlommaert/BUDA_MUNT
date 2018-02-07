import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import { any, func, string } from 'prop-types';

import colors from '../../../objects/colors';
import ButtonText from '../../../components/ButtonText';
import ActivatableImage from '../../../components/ActivatableImage';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: colors.tile,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    paddingTop: 15,
    paddingBottom: 15,

    height: 50,
    width: 305,

    borderTopWidth: 2,
    borderColor: colors.projectProposalAccent,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  text: {
    color: colors.projectProposalAccent,
  },
});

class TileButton extends Component {
  state = {
    active: false,
  }

  onPress() {
    this.setState({ active: !this.state.active });
    const { onPress } = this.props;
    onPress();
  }

  render() {
    const { icon, style } = this.props;
    const { active } = this.state;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={[styles.button, style]}>
        <ActivatableImage style={styles.icon} icon={icon} active={active} />
        <ButtonText color={colors.projectProposalAccent} styles={styles.text}>
          { !active ? 'Ik ben voor' : 'Ik ben voor' }
        </ButtonText>
      </TouchableOpacity>
    );
  }
}

TileButton.propTypes = {
  onPress: func.isRequired,
  icon: string.isRequired,
  style: any.isRequired,
};

TileButton.defaultProps = {
  tileButton: false,
  icon: 'voteProject',
  style: {},
};

export default TileButton;
