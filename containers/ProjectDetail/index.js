import React from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, func } from 'prop-types';

import Screen from '../../components/Screen';
import Button from '../../components/Button';
import HeaderAndDescriptionDetail from '../../components/HeaderAndDescriptionDetail';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
});

const ProjectDetail = ({ currentProjectDetail, navigation, voteProjectProposal }) => {
  const onPressVote = () => {
    voteProjectProposal(currentProjectDetail.uid);
  };

  return (
    <Screen style={styles.container} backButton navigation={navigation}>
      <HeaderAndDescriptionDetail
        desc={currentProjectDetail.desc}
        name={currentProjectDetail.name}
      />
      <Button style={styles.button} icon={'voteProject'} onPress={onPressVote}>
        ik ben voor
      </Button>
    </Screen>
  );
};

ProjectDetail.propTypes = {
  currentProjectDetail: object.isRequired,
  navigation: object.isRequired,
  voteProjectProposal: func.isRequired,
};

export default inject(
  ({ store }) => ({
    currentProjectDetail: store.currentProjectDetail,
    voteProjectProposal: store.voteProjectProposal,
  }),
)(
  observer(ProjectDetail),
);
