import React from 'react';
import { Text, View } from 'react-native';
import CircleLarge from 'components/CircleLarge';
import CircleMedium from 'components/CircleMedium';
import CircleSmall from 'components/CircleSmall';
import IconFloosFull from 'components/IconFloosFull';
import { EmailTag } from 'components';
import styles from './styles';

interface IScreenWrapperLogin {
  children?: any;
}

const ScreenWrapperLogin = (props: IScreenWrapperLogin) => {
  return (
    <View style={styles.screenWrapperLogin}>
      <View style={styles.header}>
        <View style={[styles.circle, styles.circleMedium]}>
          <CircleMedium />
        </View>
        <View style={[styles.circle, styles.circleLarge]}>
          <CircleLarge />
        </View>
        <View style={[styles.circle, styles.circleSmall1]}>
          <CircleSmall />
        </View>
        <View style={[styles.circle, styles.circleSmall2]}>
          <CircleSmall />
        </View>
        <View style={styles.headerBackground} />
        <View style={styles.logo}>
          <IconFloosFull />
        </View>
        {/*<View>*/}
        {/*  <Text style={styles.hiMessage}>Hi, Bayani!</Text>*/}
          {/*<EmailTag onPress={() => {}} style={styles.emailTag} email="asd@asd.com" />*/}
        {/*</View>*/}
      </View>
      <View style={styles.childrenContainer}>
        {props.children}
      </View>
    </View>
  );
};


export default ScreenWrapperLogin;