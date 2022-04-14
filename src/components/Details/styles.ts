import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: getWidth(9),
    paddingTop: getHeight(5),
    paddingBottom: getHeight(1),
    backgroundColor: theme.colors.shade2,
    borderRadius: 27,
  },
  item: {
    width: '100%',
    marginBottom: getHeight(4),
  },
  label: {
    textAlign: 'left',
    color: '#B3B3B3',
    fontSize: getWidth(4),
    letterSpacing: .5,
    textTransform: 'uppercase',
  },
  text: {
    textAlign: 'left',
    paddingTop: getHeight(1),
    color: theme.colors.textDark,
    fontSize: getWidth(4),
    letterSpacing: .5,
  },
});

export default styles;
