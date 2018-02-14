import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import { func, object } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Button from '../../../components/Button';
import SummaryTile from './SummaryTile/';
import AddToBucketList from './AddToBucketList';
import colors from '../../../objects/colors';
// import PreviousInputButton from '../InputAndProgress/InputsNavigator/PreviousInputButton';

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  tileContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  headerText: {
    marginBottom: 10,
    color: colors.progressActive,
  },
  button: {
    marginBottom: 10,
  },
});

const Summary = ({ postDemand, navigation }) => {
  const onPressButton = () => {
    postDemand();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* <HeaderText style={styles.headerText} fontSize={18}>We sturen je droom uit naar de rest van de buurt</HeaderText> */}
      <View style={styles.tileContainer}>
        <HeaderText style={styles.headerText} fontSize={32}>Jouw droom</HeaderText>
        <SummaryTile />
        <AddToBucketList />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          icon={'addDreamDetail'}
          onPress={onPressButton}
          mainColor={colors.buttonPurpleStrong}
          secondaryColor={colors.buttonPurpleSoft}
        >
          Plaats mijn droom
        </Button>
        {/* <PreviousInputButton /> */}
        <BodyText opacity={0.7} style={styles.bodyText} italic>Je kan hem steeds aanpassen bij je profiel</BodyText>
      </View>
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
