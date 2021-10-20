import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getFontSize } from 'utils/screen';
import { windowDimensions } from 'utils/window';

export default StyleSheet.create({
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFiledRoot: {
    marginTop: 20,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 0.1 * windowDimensions.width,
    height: 0.16 * windowDimensions.width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: theme.colors.shade1,
    borderBottomWidth: 1,
  },
  cellText: {
    color: theme.colors.floos2,
    fontSize: getFontSize(15),
    textAlign: 'center',
  },
  focusCell: {
  },
});
