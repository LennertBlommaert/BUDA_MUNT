import React from 'react';
import { StyleSheet, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { object, bool } from 'prop-types';
// import PostDemandButton from './PostDemandButton';
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

const PostDemand = ({ navigation, endOfInputs }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    {endOfInputs ? <Summary navigation={navigation} /> : <InputAndProgress />}
  </View>
);

PostDemand.propTypes = {
  navigation: object.isRequired,
  endOfInputs: bool.isRequired,
};

export default inject(
  ({ store }) => ({ endOfInputs: store.endOfInputs }),
)(
  observer(PostDemand),
);
