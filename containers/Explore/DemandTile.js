import React from 'react';
import { Text, View, Button } from 'react-native';
import { string } from 'prop-types';

const DemandTile = ({ name, desc }) => {
  const onPressAcceptDemand = () => {
    console.log('Accept Demand');
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>{desc}</Text>
      <Button
        onPress={onPressAcceptDemand}
        title="ik wil helpen"
      />
    </View>
  );
};

DemandTile.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
};

export default DemandTile;
