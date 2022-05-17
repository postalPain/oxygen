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
});

export default styles;
