import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { func } from 'prop-types';
import ActivatableImage from '../../../components/ActivatableImage';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
});

const SendMessageButton = ({ postMessage }) => (
  <TouchableOpacity onPress={() => postMessage({})}>
    <ActivatableImage
      size={25}
      style={styles.image}
      icon={'sendMessage'}
    />
  </TouchableOpacity>
);

SendMessageButton.propTypes = {
  postMessage: func.isRequired,
};

export default inject(
  ({ store }) => ({ postMessage: store.postMessage }),
)(
  observer(SendMessageButton),
);
