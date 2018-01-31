import React from 'react';
import { Button } from 'react-native';
import { func, object } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

const PostDemandButton = ({ postDemand, navigation }) => {
  const onPressPostDemand = () => {
    navigation.navigate('Explore');
    postDemand();
  };

  return (
    <Button
      onPress={() => onPressPostDemand()}
      title="plaats het zoekertje"
    />
  );
};

PostDemandButton.propTypes = {
  postDemand: func.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ postDemand: store.postDemand }),
)(
  observer(PostDemandButton),
);
