import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getWidth } from '../../utils/window';

const useStyles = () => StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.textDarkBlue,
    textTransform: 'uppercase',
    marginLeft: 8,
    fontWeight: '300',
  },
  button: {
    width: '100%',
  },
  buttonText: {
    paddingLeft: 0,
  },
  textButton: {
    color: theme.colors.primary,
    fontSize: getWidth(5),
    lineHeight: getWidth(6),
    marginTop: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default useStyles;
