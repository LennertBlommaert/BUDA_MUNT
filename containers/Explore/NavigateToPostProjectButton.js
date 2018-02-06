import React from 'react';
import { object } from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import colors from '../../objects/colors';

const styles = StyleSheet.create({
  button: {
    width: 165,
    paddingLeft: 25,
    paddingRight: 25,
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
