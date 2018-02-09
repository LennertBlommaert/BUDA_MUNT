import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../../components/ButtonUnshifted';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  button: {
    flex: 0.8,
    minWidth: 140,
    marginLeft: 4,
    justifyContent: 'center',
    backgroundColor: colors.addProjectButtonBackground,
  },
});

const NavigateToPostProjectButton = ({ navigation }) => {
  const onPressNavigateToPostProject = () => {
    navigation.navigate('PostProject');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Button icon={'addProject'} color={colors.addProjectButtonText} style={styles.button} onPress={onPressNavigateToPostProject}>
      buurtwens
    </Button>
  );
};

NavigateToPostProjectButton.propTypes = {
  navigation: object.isRequired,
};

export default NavigateToPostProjectButton;
