import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';
import close from '../../../assets/img/close.png';

const styles = StyleSheet.create({
  closeImage: {
    width: 34,
    height: 34,
  },
});

const CloseButton = ({ navigation }) => {
  const onPressCloseButton = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPressCloseButton}>
      <Image
        style={styles.closeImage}
        source={close}
      />
    </TouchableOpacity>
  );
};

CloseButton.propTypes = {
  navigation: object.isRequired,
};

export default CloseButton;
