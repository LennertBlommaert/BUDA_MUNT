import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { object } from 'prop-types';
import backButton from '../../assets/img/back_button.png';

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});

const BackButton = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={backButton}
      />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  navigation: object.isRequired,
};

export default BackButton;
