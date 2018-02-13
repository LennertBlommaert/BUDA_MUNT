// Style component for body plain body text
// GUIDE: placing italic as a prop sets text in italic

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer, PropTypes } from 'mobx-react/native';
import { object, bool } from 'prop-types';
import UserStatus from './UserStatus';
import NotificationsIndicator from './NotificationsIndicator';
import BackButton from './BackButton';
import UserPicker from './UserPicker';
import sharedStyles from '../../objects/sharedStyles';

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'stretch',
  },
  userPicker: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: -10,
  },
});

class Header extends Component {
  state = { userPickerActive: false };

  toggleUserPickerAcitve() {
    this.setState({ userPickerActive: !this.state.userPickerActive });
  }

  render() {
    const { navigation, user, backButton } = this.props;
    const { userPickerActive } = this.state;

    return (
      <View style={styles.headerContainer}>
        <View style={sharedStyles.header}>
          {
            backButton ? <BackButton navigation={navigation} /> : null
          }
          <TouchableOpacity onPress={() => this.toggleUserPickerAcitve()}>
            <UserStatus userPickerActive={userPickerActive} {...user} />
          </TouchableOpacity>
          <NotificationsIndicator navigation={navigation} />
        </View>
        {
          userPickerActive ? <UserPicker onSelectUser={() => this.toggleUserPickerAcitve()} style={styles.userPicker} /> : null
        }
      </View>
    );
  }
}

Header.propTypes = {
  user: PropTypes.observableObject.isRequired,
  navigation: object.isRequired,
  backButton: bool.isRequired,
};

export default inject(
  ({ store }) => ({
    user: store.user,
  }),
)(
  observer(Header),
);
