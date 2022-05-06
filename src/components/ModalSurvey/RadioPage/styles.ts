import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    marginBottom: 35,
  },
  title: {
    marginTop: 40,
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 24,
    fontWeight: '300',
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    height: 55,
  },
});

export default useStyles;
