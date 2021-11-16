import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  arrow: {
    width: 14,
    height: 14,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopColor: '#7B7B7B',
    borderRightColor: '#7B7B7B',
    transform: [{ rotate: '45deg' }],
  },
});

export default styles;