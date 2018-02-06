import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import { func, object } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Button from '../../../components/Button';
import SummaryTile from './SummaryTile/';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
});

const Summary = ({ postDemand, navigation }) => {
  const onPressButton = () => {
    postDemand();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SummaryTile />
      <HeaderText fontSize={18}>We sturen je droom uit naar de rest van de buurt</HeaderText>
      <BodyText italic>Je kan hem steeds aanpassen bij je profiel</BodyText>
      <Button icon={'addDream'} onPress={onPressButton}>
        Plaats mijn droom
      </Button>
    </View>
  );
};

Summary.propTypes = {
  postDemand: func.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ postDemand: store.postDemand }),
)(
  observer(Summary),
);
