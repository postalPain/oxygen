import { StyleSheet } from 'react-native';
import { getWidth } from 'utils/window';
import { isRTL} from 'config/rtl';

const styles = StyleSheet.create({
  arrow: {
    width: getWidth(4),
    height: getWidth(4),
    borderTopWidth: getWidth(.7),
    borderRightWidth: getWidth(.7),
    borderTopColor: '#7B7B7B',
    borderRightColor: '#7B7B7B',
    transform: [{ rotate: isRTL ? '-45deg' : '45deg' }],
  },
});

export default styles;
