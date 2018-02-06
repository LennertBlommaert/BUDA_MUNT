import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import Tile from '../../../../components/Tile';
import HeaderText from '../../../../components/HeaderText';
import BodyText from '../../../../components/BodyText';
import PriceText from '../../../../components/PriceText';
import Capacities from './Capacities';

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
  tagsAndPriceContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const SummaryTile = ({ title, truncatedDesc, selectedCapacities, reward }) => (
  <Tile style={styles.container}>
    <View style={styles.textContainer}>
      <HeaderText>
        {title}
      </HeaderText>
      <BodyText>
        {truncatedDesc}
      </BodyText>
    </View>
    <View style={styles.tagsAndPriceContainer}>
      <Capacities />
      <PriceText>
        {reward}
      </PriceText>
    </View>
  </Tile>
);

SummaryTile.propTypes = {};

export default inject(
  ({ store }) => ({
    title: store.title,
    truncatedDesc: store.truncatedDesc,
    selectedCapacities: store.selectedCapacities,
    reward: store.reward,
  }),
)(
  observer(SummaryTile),
);
