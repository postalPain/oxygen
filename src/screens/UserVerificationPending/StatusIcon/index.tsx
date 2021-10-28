import React from 'react';
import { View } from 'react-native';
import { IconCheck, IconCross } from 'components';
import useStyles from './styles';


interface IStatusIcon {
  status: 'pending' | 'verified' | 'rejected';
}

const StatusIcon = ({ status }: IStatusIcon) => {
  const styles = useStyles();
  switch (status) {
    case 'verified':
      return (
        <View style={[styles.circle, styles.verified]}>
          <IconCheck size={24} />
        </View>
      );
    case 'rejected':
      return (
        <View style={[styles.circle, styles.rejected]}>
          <IconCross size={24} />
        </View>
      );
    case 'pending':
    default:
      return (
        <View style={[styles.circle, styles.pending]}>
    
        </View>
      );
  }
};

export default StatusIcon
