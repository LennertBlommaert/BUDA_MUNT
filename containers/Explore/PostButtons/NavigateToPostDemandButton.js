import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  button: {
    width: 165,
    paddingLeft: 42,
    paddingRight: 42,
    backgroundColor: colors.addDemandButtonBackground,
  },
});

const NavigateToPostDemandButton = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profiled', { name: 'Jane' });
  };

  return (
    <Button color={colors.buttonText} style={styles.button} onPress={onPressNavigateToPostDemand}>
      droom
    </Button>
  );
};

NavigateToPostDemandButton.propTypes = {
  navigation: object.isRequired,
};

export default NavigateToPostDemandButton;
