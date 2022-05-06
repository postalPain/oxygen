import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  title: {
    marginTop: 80,
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 48,
    fontWeight: '300',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labels: {
    marginTop: 24,
    marginBottom: 115,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 19,
    color: theme.colors.textDarkBlue,
  },
});

export default useStyles;
