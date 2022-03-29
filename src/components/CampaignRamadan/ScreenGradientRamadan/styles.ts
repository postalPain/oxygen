import { StyleSheet } from 'react-native';
import { getHeight } from 'utils/window';

const useStyles = () => StyleSheet.create({
  gradientRamadan: {
    position: 'absolute',
    left: 0,
    right: 0
  },
  gradient: {
    height: getHeight(18),
    opacity: .8
  },
  ornament:{
    position: 'absolute',
    top: -getHeight(12),
  }
});

export default useStyles;