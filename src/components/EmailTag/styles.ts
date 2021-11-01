import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';
import theme from 'config/theme';
import { getFontSize } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  emailTag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 0.04 * windowDimensions.width,
    paddingLeft: 0.05 * windowDimensions.width,
    paddingVertical: 0.012 * windowDimensions.height,
    backgroundColor: theme.colors.shade2,
    borderRadius: 0.05 * windowDimensions.height
  },
  emailText: {
    fontSize: 16,
    marginRight: 22,
  },
  editIcon: {
    width: 0.05 * windowDimensions.width,
    height: 0.05 * windowDimensions.width,
    marginLeft: 0.01 * windowDimensions.width
  }
});

export default useStyles;
