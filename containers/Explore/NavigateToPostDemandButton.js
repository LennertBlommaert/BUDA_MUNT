import React from 'react';
import { Button } from 'react-native';

const NavigateToPostDemandButton = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Button
      onPress={onPressNavigateToPostDemand}
      title="plaats een zoekertje"
    />
  );
};

NavigateToPostDemandButton.propTypes = {};

export default NavigateToPostDemandButton;
