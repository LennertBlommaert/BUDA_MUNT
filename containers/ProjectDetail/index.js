import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, func } from 'prop-types';

import Screen from '../../components/Screen';
import Button from '../../components/Button';
import HeaderAndDescriptionDetail from '../../components/HeaderAndDescriptionDetail';
import VotesIndicator from '../../components/VotesIndicator/';
import PostDetailUserInfo from '../../components/PostDetailUserInfo';
import stagesProgressImage from '../../assets/img/project_stages_progress_proposal.png';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
  stagesProgressImage: {
    width: 336,
    height: 68,
    marginTop: 26,
  },
  votesIndicator: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
  },
  postDetailUserInfo: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const ProjectDetail = ({ currentProjectDetail, navigation, voteProjectProposal }) => {
  const onPressVote = () => {
    voteProjectProposal(currentProjectDetail.uid);
  };

  return (
    <Screen style={styles.container} backButton navigation={navigation}>
      <Image
        style={styles.stagesProgressImage}
        source={stagesProgressImage}
      />
      <HeaderAndDescriptionDetail
        desc={currentProjectDetail.desc}
        name={currentProjectDetail.name}
      />
      <PostDetailUserInfo style={styles.postDetailUserInfo} currentPostDetail={currentProjectDetail} />
      <VotesIndicator
        style={styles.votesIndicator}
        votes={currentProjectDetail.voterUIDs.length}
        coinIconSize={35}
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
