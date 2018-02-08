import React, { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { TextInput, StyleSheet, Animated } from 'react-native';
import { any, object } from 'prop-types';
import ActivatableImage from '../../../components/ActivatableImage';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    height: 35,
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 35,
    marginBottom: 35,
    backgroundColor: colors.searchInputBackground,

    borderRadius: 3,

    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    opacity: 0,
  },
  inputInactive: {
    flex: 1,
    fontFamily: 'calibre-regular-italic',
    fontSize: 18,
  },
  input: {
    flex: 1,
    fontFamily: 'calibre-regular',
    fontSize: 18,
    color: colors.searchInputText,
  },
  image: {
    alignSelf: 'center',
    marginRight: 12,
  },
});

class SearchInput extends Component {
  state = {
    active: false,
  }

  onPressContainer() {
  }

  onFocusInput() {
    this.setState({ active: !this.state.active });
  }

  onBlurInput() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state;
    const { user, style, opacity, offset } = this.props;

    return (
      // <Animated.View style={[styles.container, style, { opacity, transform: [{ translateY: offset }] }]}>
      <Animated.View style={[styles.container, style, { opacity, height: offset, marginTop: offset, marginBottom: offset }]}>
        <ActivatableImage style={styles.image} size={18} icon={'search'} active={active} />
        <TextInput
          style={active ? styles.input : styles.inputInactive}
          onFocus={() => this.onFocusInput()}
          onBlur={() => this.onBlurInput()}
          placeholder={`Hallo ${user.firstName}, waar ben je naar opzoek?`}
        />
      </Animated.View>
    );
  }
}

SearchInput.propTypes = {
  user: PropTypes.observableObject.isRequired,
  style: any,
  opacity: object.isRequired,
  offset: object.isRequired,
};

SearchInput.defaultProps = {
  style: {},
};

export default inject(
  ({ store }) => ({ user: store.user }),
)(
  observer(SearchInput),
);
