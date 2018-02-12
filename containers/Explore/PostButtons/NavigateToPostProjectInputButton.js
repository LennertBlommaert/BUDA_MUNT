import React from 'react';
import { object } from 'prop-types';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../../../objects/colors';
import HeaderText from '../../../components/HeaderText';

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
    borderRadius: 5,
    backgroundColor: colors.exploreInputButtonBackground,
  },
  inputText: {
    color: colors.exploreInputButtonText,
  },
});

const NavigateToPostDemandInputButton = ({ navigation }) => {
  const onPressNavigateToPostDemand = () => {
    navigation.navigate('PostProject');
    // navigation.navigate('Profiled', { name: 'Jane' });
  };

  return (
    <TouchableOpacity color={colors.buttonText} style={styles.container} onPress={onPressNavigateToPostDemand}>
      <HeaderText fontSize={19}>
        Wat wens jij voor de buurt?
      </HeaderText>
      {/* <HeaderText>
        Wat is jouw droom?
      </HeaderText> */}
      <View style={styles.inputContainer}>
        <HeaderText fontSize={17} style={styles.inputText} italic>
          Ik wens voor de buurt...
        </HeaderText>
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
