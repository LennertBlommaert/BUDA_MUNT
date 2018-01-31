import React from 'react';
import { Button } from 'react-native';
import { object } from 'prop-types';

const AcceptDemandButton = ({ navigation }) => {
  const onPressAcceptDemand = () => {
    navigation.navigate('Explore');
  };

  return (
    <Button
      onPress={onPressAcceptDemand}
      title="ik wil helpen"
    />
  );
};

AcceptDemandButton.propTypes = {
  navigation: object.isRequired,
};

export default AcceptDemandButton;
