import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 60,
    paddingHorizontal: 60,
  },
  headerText: {
    fontSize: 22,
    letterSpacing: .5,
    lineHeight: 30,
    textAlign: 'center',
  },
  infoBlock: {
    alignItems: 'center',
    flex: 2,
    paddingHorizontal: 50,
    paddingTop: 40,
  },
  infoText: {
    marginTop: 45,
    fontSize: 16,
    letterSpacing: .5,
    lineHeight: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: SCREEN_BOTTOM_PADDING,
  },
  iconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: theme.colors.screenBackgroundColorLight
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: theme.colors.floos2,
    fontSize: 20,
    lineHeight: 21,
  },
  buttonText: {
    marginLeft: 12,
    color: '#FFF',
    fontSize: 18,
  },
});

export default useStyles;