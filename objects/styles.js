import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: colors.card,
    borderWidth: 1,
    marginTop: 5,
  },
});

export default styles;
