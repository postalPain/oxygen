import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const TabWrapper = (TabComponent: any) => {
  const styles = useStyles();
  return () => (
    <View style={styles.tabWrapper}>
      <TabComponent />
    </View>
  );
};

export default TabWrapper;
