import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

const styles = StyleSheet.create({
  modalGoodToKnow: {
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: getWidth(4),
    paddingLeft: getWidth(3),
  },
  itemHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingTop: getHeight(3.7),
    paddingBottom: getHeight(1),
  },
  itemHeaderText: {
    color: theme.colors.floos1,
    fontSize: getWidth(5),
    fontWeight: '500',
    lineHeight: getHeight(4),
  },
  itemHeaderLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4%',
    paddingLeft: getWidth(3.5),
    paddingRight: getWidth(6),
    paddingVertical: getHeight(1.5),
    backgroundColor: theme.colors.shade2,
    borderRadius: 17,
  },
  itemHeaderLabelTextLarge: {
    color: theme.colors.floos1,
    fontSize: getWidth(8.5),
    fontWeight: '700',
  },
  itemHeaderLabelTextSmall: {
    position: 'relative',
    top: 5,
    color: theme.colors.floos1,
    fontSize: getWidth(6),
  },
  itemText: {
    paddingRight: getWidth(4),
    fontSize: getWidth(4),
    lineHeight: getHeight(3),
  }
});


export default styles;