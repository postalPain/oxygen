import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-end',
    width: '100%',
    height: getHeight(15),
    paddingHorizontal: getWidth(16),
  },
  headerText: {
    fontSize: getWidth(6),
    letterSpacing: .5,
    lineHeight: getHeight(4),
    textAlign: 'center',
  },
  infoBlock: {
    alignItems: 'center',
    flex: 2,
    paddingHorizontal: getWidth(14),
    paddingTop: getHeight(3),
  },
  infoText: {
    marginTop: getHeight(4),
    fontSize: getWidth(4),
    letterSpacing: .5,
    lineHeight: getHeight(3.5),
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default useStyles;