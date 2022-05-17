import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'flex-end',
    width: '100%',
    height: getHeight(15),
    paddingHorizontal: getWidth(16),
  },
  headerText: {
    fontSize: getWidth(6),
    lineHeight: getHeight(4),
    textAlign: 'center',
  },
  infoBlock: {
    alignItems: 'center',
    flex: 2,
    paddingHorizontal: getWidth(14),
    paddingTop: getHeight(3),
  },
  image: {
    height: getHeight(16),
    opacity: .3,
  },
  infoText: {
    marginTop: getHeight(4),
    fontSize: getWidth(4),
    lineHeight: getHeight(3.5),
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
});

export default useStyles;