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
  state = {}

  // componentWillMount() {
  //   const { active } = this.props;
  //   this.setState({ active });
  // }
  //
  onPress() {
    // this.setState({ active: !this.state.active });
    const { active, onPress } = this.props;

    if (active) return;
    onPress();
  }

  render() {
    const { icon, style, active } = this.props;
    // const { active } = this.props;

    return (
      <TouchableOpacity onPress={() => this.onPress()} style={[styles.button, style]}>
        <ActivatableImage style={styles.icon} icon={icon} active={active} />
        <ButtonText color={colors.projectProposalAccent} styles={styles.text}>
          { !active ? 'Ik ben voor' : 'Je stem werd verstuurd' }
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
