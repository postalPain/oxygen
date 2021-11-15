import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  header: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 25,
    paddingLeft: 8,
  },
  headerText: {
    marginLeft: 16,
    color: theme.colors.textDark,
    fontSize: 18,
    letterSpacing: .5,
    textTransform: 'uppercase',
  },
  detailsContainer: {
    flex: 3,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 36,
    paddingTop: 50,
    paddingBottom: 6,
    backgroundColor: theme.colors.shade2,
    borderRadius: 27,
  },
  item: {
    marginBottom: 44,
  },
  itemHalfLine: {
    width: '50%',
  },
  itemFullLine: {
    width: '100%',
  },
  itemLabel: {
    color: '#B3B3B3',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  itemText: {
    paddingTop: 8,
    color: theme.colors.textDark,
    fontSize: 18,
  },
});

export default useStyles;