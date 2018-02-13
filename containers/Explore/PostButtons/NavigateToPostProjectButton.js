import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../../components/Button';
// import Button from '../../../components/ButtonUnshifted';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  button: {
    flex: 0.8,
    minWidth: 140,
    marginLeft: 4,
    marginRight: 20,
    marginTop: 50,
    borderRadius: 1,
    justifyContent: 'center',
  },
});

const NavigateToPostProjectButton = ({ navigation }) => {
  const onPressNavigateToPostProject = () => {
    navigation.navigate('PostProject');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Button secondaryColor={colors.buttonPurpleSoft} mainColor={colors.buttonPurpleStrong} small icon={'addProject'} color={colors.addProjectButtonText} style={styles.button} onPress={onPressNavigateToPostProject}>
      Buurtwens
    </Button>
  );
};

NavigateToPostProjectButton.propTypes = {
  navigation: object.isRequired,
};

export default NavigateToPostProjectButton;
