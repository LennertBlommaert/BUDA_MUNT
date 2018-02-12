import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Camera } from 'expo';
import codeZone from '../../assets/img/code_zone.png';

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 335,
    height: 330,
  },
  codeZone: {
    position: 'absolute',
    top: 0,
    width: 280,
    height: 280,
  },
});

const CameraFeed = () => (
  <View style={styles.container}>
    <Image
      style={styles.codeZone}
      source={codeZone}
    />
    <Camera
      style={styles.camera}
      type={Camera.Constants.Type.back}
      ref={(ref) => { this.camera = ref; }}
    />
  </View>
);

CameraFeed.propTypes = {};

export default CameraFeed;
