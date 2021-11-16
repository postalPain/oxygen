import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const styles = StyleSheet.create({
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
    width: '100%',
    marginBottom: 38,
  },
  label: {
    color: '#B3B3B3',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  text: {
    paddingTop: 8,
    color: theme.colors.textDark,
    fontSize: 18,
  },
});

export default styles;