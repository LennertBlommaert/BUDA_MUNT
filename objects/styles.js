import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  gray: '#eee',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 5,
  },
});

export default styles;
