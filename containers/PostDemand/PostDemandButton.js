import React from 'react';
import { Button } from 'react-native';
import { func } from 'prop-types';
import { inject, observer } from 'mobx-react/native';

const PostDemandButton = ({ postDemand }) => {
  const onPressPostDemand = () => postDemand();

  return (
    <Button
      onPress={() => onPressPostDemand()}
      title="plaats het zoekertje"
    />
  );
};

PostDemandButton.propTypes = {
  postDemand: func.isRequired,
};

export default inject(
  ({ store }) => ({ postDemand: store.postDemand }),
)(
  observer(PostDemandButton),
);
