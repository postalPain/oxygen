import { StyleSheet, Platform } from 'react-native';
import { ProjectThemeType } from 'config/theme';
import { HEADER_HEIGHT } from 'utils/screen';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: Platform.OS === 'ios' ? HEADER_HEIGHT : HEADER_HEIGHT - 24,
  },
  title: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default useStyles;
