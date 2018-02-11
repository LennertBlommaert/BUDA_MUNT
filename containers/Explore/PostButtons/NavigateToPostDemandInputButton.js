import React from 'react';
import { object } from 'prop-types';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../../../objects/colors';
import HeaderText from '../../../components/HeaderText';
import BodyText from '../../../components/BodyText';

const styles = StyleSheet.create({
  container: {
    // width: 165,
    flex: 1,
    minWidth: 140,
    marginRight: 4,
    justifyContent: 'center',
    backgroundColor: colors.headerBackground,
    padding: 20,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.06,
  },
  inputContainer: {
    marginTop: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderRadius: 3,
    backgroundColor: colors.exploreInputButtonBackground,
  },
  inputText: {
    color: colors.exploreInputButtonText,
  },
});

const NavigateToPostDemandInputButton = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostDemand');
    // navigation.navigate('Profiled', { name: 'Jane' });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressNavigateToPostDemand}>
      <HeaderText fontSize={19}>
        Waarmee kan de buurt jou helpen?
      </HeaderText>
      {/* <HeaderText>
        Wat is jouw droom?
      </HeaderText> */}
      <View style={styles.inputContainer}>
        <BodyText style={styles.inputText} italic>
          Ik droom ervan om...
        </BodyText>
        {/* <BodyText italic>
          Ik heb hulp nodig met...
        </BodyText> */}
      </View>
    </TouchableOpacity>
  );
};

NavigateToPostDemandInputButton.propTypes = {
  navigation: object.isRequired,
};

export default NavigateToPostDemandInputButton;
