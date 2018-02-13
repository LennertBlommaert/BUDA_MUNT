import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  button: {
    flex: 0.8,
    minWidth: 140,
    marginTop: 50,
    marginRight: 4,
    marginLeft: 20,
    justifyContent: 'center',
  },
});

const NavigateToPostDemandButton = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profiled', { name: 'Jane' });
  };

  return (
    <Button
      secondaryColor={colors.buttonPurpleSoft}
      mainColor={colors.buttonPurpleStrong}
      small
      color={colors.buttonText}
      style={styles.button}
      onPress={onPressNavigateToPostDemand}
    >
      Eigen wens
    </Button>
  );
};

NavigateToPostDemandButton.propTypes = {
  navigation: object.isRequired,
};

export default NavigateToPostDemandButton;
