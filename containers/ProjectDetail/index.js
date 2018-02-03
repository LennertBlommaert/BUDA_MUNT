import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { object } from 'prop-types';

import Screen from '../../components/Screen';
import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';

import Button from '../../components/Button';

const ProjectDetail = ({ currentProjectDetail }) => {
  const onPressVote = () => {
    console.warn('Voted project');
  };

  return (
    <Screen>
      <HeaderText>{currentProjectDetail.name}</HeaderText>
      <BodyText>{currentProjectDetail.desc}</BodyText>
      <Button onPress={onPressVote}>
        ik stem mee
      </Button>
    </Screen>
  );
};

ProjectDetail.propTypes = {
  currentProjectDetail: object.isRequired,
};

export default inject(
  ({ store }) => ({ currentProjectDetail: store.currentProjectDetail }),
)(
  observer(ProjectDetail),
);
