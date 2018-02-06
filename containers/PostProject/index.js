import React from 'react';
import { StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, bool } from 'prop-types';
// import PostProjectButton from './PostDemandButton';
import Header from './Header/';
import colors from '../../objects/colors';
import InputAndProgress from './InputAndProgress/';
import Summary from './Summary/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.postDemandBackground,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const PostProject = ({ navigation, endOfInputsPostProject }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    {endOfInputsPostProject ? <Summary navigation={navigation} /> : <InputAndProgress />}
  </View>
);

PostProject.propTypes = {
  navigation: object.isRequired,
  endOfInputsPostProject: bool.isRequired,
};

export default inject(
  ({ store }) => ({ endOfInputsPostProject: store.endOfInputsPostProject }),
)(
  observer(PostProject),
);
