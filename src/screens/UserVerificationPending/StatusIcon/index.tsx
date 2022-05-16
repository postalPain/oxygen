import IconCheck from 'components/IconCheck';
import IconCross from 'components/IconCross';
import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';


export type TFeStatus = 'pending' | 'verified' | 'rejected';

interface IStatusIcon {
  status: TFeStatus;
}

const StatusIcon = ({ status }: IStatusIcon) => {
  const styles = useStyles();
  switch (status) {
    case 'verified':
      return (
        <View style={[styles.circle, styles.verified]}>
          <IconCheck size={14} />
        </View>
      );
    case 'rejected':
      return (
        <View style={[styles.circle, styles.rejected]}>
          <IconCross size={14} />
        </View>
      );
    case 'pending':
    default:
      return (
        <View style={[styles.circle, styles.pending]} />
      );
  }
};

export default StatusIcon;
