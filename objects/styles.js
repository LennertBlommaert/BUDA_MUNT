import { StyleSheet } from 'react-native';

const colors = {
  card: '#f9f9f9',
  gray: '#eee',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  explore: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
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
