import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { func, string } from 'prop-types';
import { inject, observer } from 'mobx-react/native';
import styles from '../../objects/styles';

const DescInput = ({ setDesc, desc }) => {
  const handleChangeText = text => setDesc(text);

  return (
    <View>
      <Text>
        Beschrijving
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={
          text => handleChangeText(text)
        }
        value={desc}
        placeholder={'Beschrijf het project'}
        multiline
        numberOfLines={6}
      />
    </View>
  );
};

DescInput.propTypes = {
  setDesc: func.isRequired,
  desc: string.isRequired,
};

export default inject(
  ({ store }) => ({
    setDesc: store.setDesc,
    desc: store.desc,
  }),
)(
  observer(DescInput),
);
