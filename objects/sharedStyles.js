import { StyleSheet } from 'react-native';
import colors from './colors';

const sharedStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerBackground,

    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 25,
    paddingBottom: 5,

    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.13,
  },
});

export default sharedStyles;
