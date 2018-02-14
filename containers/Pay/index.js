import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Permissions } from 'expo';
import Screen from '../../components/Screen';
import InvisionWebView from '../../components/InvisionWebView';
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
    const { hasCameraPermission } = this.state;
    if (!hasCameraPermission) return <InvisionWebView screen={'SQFTXXX3WDY#/279033298_Betaal_Handelaar'} />;
    return (
      <Screen style={styles.container}>
        <SegmentendControl />
        <CameraFeed />
        <Instructions />
      </Screen>
    );
  }
}
