import React from 'react';
import { func, object } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import Button from '../../components/Button';

const PostDemandButton = ({ postDemand, navigation }) => {
  const onPressPostDemand = () => {
    navigation.navigate('Explore');
    postDemand();
  };

  return (
    <Button onPress={onPressPostDemand}>
      plaats het zoekertje
    </Button>
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
