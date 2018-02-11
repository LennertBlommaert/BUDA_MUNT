import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../../components/ButtonUnshifted';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  button: {
    // width: 165,
    flex: 0.8,
    minWidth: 140,
    marginTop: 50,
    marginRight: 4,
    marginLeft: 20,
    justifyContent: 'center',
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
