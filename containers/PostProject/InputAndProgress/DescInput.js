import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import colors from '../../../objects/colors';
import HeaderText from '../../../components/HeaderText';

const styles = StyleSheet.create({
  textInput: {
    height: 136,
    width: 335,
    borderWidth: 0,

    padding: 20,
    paddingTop: 15,

    fontSize: 24,
    fontFamily: 'calibre-regular',
    marginTop: 5,
    backgroundColor: colors.textInputBackground,

    borderRadius: 3,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
  },
});

const DescInput = ({ setDescPostProject, descPostProject }) => {
  const handleChangeText = text => setDescPostProject(text);

  return (
    <View>
      <HeaderText fontSize={22}>Omschrijf je buurtwens</HeaderText>

      <TextInput
        style={styles.textInput}
        onChangeText={
          text => handleChangeText(text)
        }
        value={descPostProject}
        autoFocus
        placeholder={'Korte beschrijving'}
        keyboardType={'default'}
        multiline
      />
    </View>
  );
};

DescInput.propTypes = {
  setDescPostProject: func.isRequired,
  descPostProject: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setDescPostProject: store.setDescPostProject,
    descPostProject: store.descPostProject,
  }),
)(
  observer(DescInput),
);
