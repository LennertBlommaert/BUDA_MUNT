import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import Tile from '../../../../components/Tile';
import HeaderText from '../../../../components/HeaderText';
import BodyText from '../../../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingBottom: 20,
    marginBottom: 5,
  },
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
});

const SummaryTile = ({ titlePostProject, truncatedDescPostProject }) => (
  <Tile style={styles.container}>
    <View style={styles.textContainer}>
      <HeaderText>
        {titlePostProject}
      </HeaderText>
      <BodyText>
        {truncatedDescPostProject}
      </BodyText>
    </View>
  </Tile>
);

SummaryTile.propTypes = {};

export default inject(
  ({ store }) => ({
    titlePostProject: store.titlePostProject,
    truncatedDescPostProject: store.truncatedDescPostProject,
  }),
)(
  observer(SummaryTile),
);
