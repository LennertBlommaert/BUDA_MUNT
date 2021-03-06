import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Permissions } from 'expo';
import { object } from 'prop-types';
import Screen from '../../components/Screen';
// import InvisionWebView from '../../components/InvisionWebView';
import CameraFeed from './CameraFeed';
import Instructions from './Instructions';
import SegmentendControl from './SegmentendControl/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default class Pay extends Component {
  state = {
    hasCameraPermission: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { navigation } = this.props;
    const { hasCameraPermission } = this.state;
    if (!hasCameraPermission) return <View />;
    return (
      <Screen style={styles.container} navigation={navigation}>
        <SegmentendControl />
        <CameraFeed />
        <Instructions />
      </Screen>
    );
  }
}

Pay.propTypes = {
  navigation: object.isRequired,
};
