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
    paddingTop: getHeight(2),
    paddingBottom: getHeight(1),
  },
  itemHeaderText: {
    color: theme.colors.floos1,
    fontSize: getWidth(5),
    fontWeight: '500',
    lineHeight: getHeight(4),
    flexShrink: 1,
  },
  amountTag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4%',
    backgroundColor: theme.colors.shade2,
    paddingHorizontal: getWidth(3),
    paddingVertical: getHeight(1.5),
    borderRadius: getWidth(5),
  },
  amount: {
    color: theme.colors.floos1,
    fontSize: getWidth(8),
    fontWeight: '700',
  },
  currency: {
    position: 'relative',
    top: 5,
    color: theme.colors.floos1,
    fontSize: getWidth(4),
  },
  itemText: {
    paddingRight: getWidth(4),
    fontSize: getWidth(4),
    lineHeight: getHeight(2.5),
  },
  listHeader: {
    fontSize: getWidth(4),
    fontWeight: '600',
    paddingVertical: getHeight(1)
  },
  bar: {
    marginTop: getHeight(2)
  },
  listItem: {
    padding: getWidth(2)
  }
});


export default styles;