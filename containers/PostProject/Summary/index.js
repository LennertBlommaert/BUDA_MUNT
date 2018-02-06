import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, StyleSheet } from 'react-native';
import { func, object } from 'prop-types';
import BodyText from '../../../components/BodyText';
import HeaderText from '../../../components/HeaderText';
import Button from '../../../components/Button';
import SummaryTile from './SummaryTile/';
import colors from '../../../objects/colors';

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
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

const Summary = ({ postProject, navigation }) => {
  const onPressButton = () => {
    postProject();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* <HeaderText style={styles.headerText} fontSize={18}>We sturen je droom uit naar de rest van de buurt</HeaderText> */}
      <View style={styles.tileContainer}>
        <HeaderText style={styles.headerText} fontSize={32}>Jouw wens voor de buurt</HeaderText>
        <SummaryTile />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon={'addDream'} onPress={onPressButton}>
          Plaats buurtwens
        </Button>
        <BodyText opacity={0.7} style={styles.bodyText} italic>Laten we jouw wens voor de buurt samen realiseren</BodyText>
      </View>
    </View>
  );
};

Summary.propTypes = {
  postProject: func.isRequired,
  navigation: object.isRequired,
};

export default inject(
  ({ store }) => ({ postProject: store.postProject }),
)(
  observer(Summary),
);
