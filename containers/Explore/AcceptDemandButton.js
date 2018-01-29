import React from 'react';
import { Button } from 'react-native';

const AcceptDemandButton = () => {
  const onPressAcceptDemand = () => {};

  return (
    <Button
      onPress={onPressAcceptDemand}
      title="ik wil helpen"
    />
  );
};

AcceptDemandButton.propTypes = {};

export default AcceptDemandButton;
