import React from 'react';
import { Button } from 'react-native';

const PostDemandButton = ({ navigation }) => {
  const onPressPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profile', { name: 'Jane' });
  };

  return (
    <Button
      onPress={onPressPostDemand}
      title="plaats een zoekertje"
    />
  );
};

PostDemandButton.propTypes = {};

export default PostDemandButton;
